# How Fast is Git?

The web is full of benchmarks showing the supernatural speed of Git even with very big repositories, but unfortunately they use the wrong variable. Size is not important, but the number of files in the repository really is!

Why is that? Well, that's because Git works in a very different way compared to Synergy. You don't have to checkout a file in order to edit it; Git will do that for you automatically. But at what price?

The price is that for every Git operation that requires to know which files changed (git status, git commmit, etc etc) an lstat() call will be executed for every single file

Wow! So how does that perform on a fairly large repository? Let's find out! For this example I will use an example project, which has 19384 files in 1326 folders.

	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m0.175s user 0m0.084s sys 0m0.084s
	 
What?!? That was fast!!! Is Git really doing all those lstat() calls???

	$ strace git status 2>&1 1>/dev/null | grep lstat | wc -l 
	19388
	 
Well, yes. So... who can it be that fast? The answer is, of course, cache. What will happen on a cold disk cache?

	$ sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches" 
	$ sudo sh -c "sync; echo 0 > /proc/sys/vm/drop_caches" 
	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m16.171s user 0m0.128s sys 0m0.332s 
	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m0.165s user 0m0.068s sys 0m0.092s
	 
So, it will take more than 16 seconds on a cold cache, but it will of course get back the usual speed right afterwards. That's a factor of 100!! This raises a couple of questions:

* How often will a developer have a cold cache?
* Is that the worst case scenario?

The answer to the first question is "not very often, almost never", while the answer to the second is "no". But I will tell you more about that in the next post! :)

# How CPU and disk load affect Git performance

In the previous post we saw that we could slow down Git by a factor of 100 if we had a completely cold disk cache. I also anticipated that it can of course get worse than that so I'm going to prove it.

What could make Git go slower? Well, load of course! During the previous experiments we had a CPU usage of about 5% and a load around 0.60... let's see what we can do about that!

Let's try to stress the hell out of the CPU:

	$ for cpu in 1 2; do (while true; do true; done) & done
	
This stresses both the cores of my CPU to 100% and the load is about 1.8. Let's see how Git handles that:

	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m17.995s user 0m0.112s sys 0m0.168s 
	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m0.364s user 0m0.072s sys 0m0.092s
	 
Well, that didn't do much, did it? Of course CPU is not the only responsible for the load: IO is very important as well! Let's see how much. To do this I will use fio, which is a handy tool that allows to generate disk IO load while it tests disk performance. For this example I ran 4 threads: 2 reading and 2 writing. This is the fio script used:

	; Four threads, two query, two writers.  
	[global] 
	rw=randread 
	size=256m 
	directory=/tmp/fio-test 
	ioengine=libaio 
	iodepth=4 
	invalidate=1 
	direct=1  
	[bgwriter] 
	rw=randwrite 
	iodepth=32  
	[queryA] 
	iodepth=1 
	ioengine=mmap 
	direct=0 
	thinktime=3  
	[queryB] 
	iodepth=1 
	ioengine=mmap 
	direct=0 
	thinktime=5  
	[bgupdater] 
	rw=randrw 
	iodepth=16 
	thinktime=40 
	size=32m
	 
In this case the CPU usage is around 8% on both cores and the load is around 3.60. Let's see how Git performs:

	$ sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches; sync; echo 0 > /proc/sys/vm/drop_caches" 
	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 2m45.266s user 0m0.136s sys 0m0.248s 
	$ time git status 
	# On branch master nothing to commit 
	(working directory clean)  
	real 0m0.164s user 0m0.088s sys 0m0.072s
	
Well, that is really something! Now it takes 2 minutes and 45 seconds with an empty cache while with a warm one it takes the usual very short amount of time.

Is this scenario likely to happen? Well, consider a developer compiling a very big project and that wants to work on another clone in the mean time... that would be the case! Is there anything we can do about this? Well, the most obvious option is to keep reading the folder you want to keep cached, or, if you have enough memory, mount the whole folder in a RAM drive, but that is very risky since a computer malfunction or power outage may compromise your whole work. Is there really no other way? We'll soon find out! :)

# Some creative Git usage

So, in the last couple of posts I have been showing how different conditions may change the performance of Git on a relatively big repository. Some considerations come to my mind at this point:

* How many files are we actually going to change on the clone?
* How long will it take to clone the project in the first place?
* Is there any way we can save some local disk space?

Then, right before Xmas, I received a link to a video/presentation about how Google does CI and back-end in general and there it was, the solution I was looking for! But let's take this gradually, shall we?

Imagine this scenario: we have a central repository from which each release gets cloned to a folder that is available to every developer via, for example, NFS. So we have something like this:

	+-myFolder/   
	  +-NfsMountedFolder/     
	    +-.git/     
	    +-restOfTheRepo/
	 
Now let's suppose that we want to keep NfsMountedFolder as read-only, so that every developer can safely read from it. We now need a way to be able to work on the cloned repository, and that's where UnionFS comes into play.

UnionFS is a special filesystem that allows to merge folders A and B and show it as C. All the changes applied to C will only be reflected on B if A is set to be read-only. Let's try that with a user-space fuse based version of UnionFS! First let's create a new and empty folder for the read-write operations and another one for the mount point:

	+-myFolder/   
	  +-NfsMountedFolder/   
	  | +-.git/   
	  | +-restOfTheRepo/   
	  +-localFolder/   
	  +-mergedFolder/
	 
Now we need to mount:

	$ unionfs-fuse -o cow /fullpath/localFolder=RW:/fullpath/NfsMountedFolder=RO /fullpath/mergedFolder
	 
Now we have something like this:

	+-myFolder/   
	  +-NfsMountedFolder/   
	  | +-.git/   
	  | +-restOfTheRepo/   
	+-localFolder/   
	+-mergedFolder/     
	  +-.git/     
	  +-restOfTheRepo/
	   
If we now add/change a file in mergedFolder it will only appear in localFolder and if we delete a file from mergedFolder it will appear in localFolder/.unionFS. Everything will be transparent for whoever uses mergedFolder, Git included.

So what does this give us? Well, not much if it wasn't for one detail: we can actually instruct Git not to do lstat() calls at all, at the price of having to remember to inform Git whenever we change a file. And that can be automized writing a very thin wrapper around the git command that will check localFolder, set those files as trackable, and run the git command issued.

This is of course just an idea and it needs to be tested (in the next post maybe?), but I would like to hear your opinion as well, especially if you already use Git. Have a nice weekend! :)

# User space file systems: fast enough?

In the previous post I considered the possibility to use a user space version of UnionFS to do some tricks. The first thing to do is to compare how it performs compared to a local FS. The times reported here are for a merged FS that puts together two local folders. No NFS was involved here.

	$ sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches" 
	$ sudo sh -c "sync; echo 0 > /proc/sys/vm/drop_caches" 
	$ time ../../ngit.py status 
	# On branch master 
	[...] 
	no changes added to commit (use "git add" and/or "git commit -a")  
	real    1m43.737s user    0m12.773s sys     0m2.264s 
	$ time ../../ngit.py status 
	# On branch master 
	[...] 
	no changes added to commit (use "git add" and/or "git commit -a")  
	real    1m54.901s user    0m12.333s sys     0m2.628s
	 
As you can see the performance is very bad both with a cold and warm cache. Actually there is no cache at all since this FS is handled in user space!
For every lstat operation (and there are 19000 of those here!) the following happens:

* the kernel receives an lstat() request.
* it notices it is a mounted FS so it will contact the fuse kernel module
* the fuse module goes to user space and asks for informations about the file
* the user space user module checks the two folders and replies

As you can see we have a lot of overhead... Will it be worthy once we limit the number of lstat() calls? Stay tuned and find out! :)

# Let Git ignore changes

The previous post showed a pretty bad performance drop when using a userspace unionFS merged folder. How will it behave when we tell git to ignore file changes? Let's find out!

	# Tell Git to ignore file changes 
	$ git config core.ignoreStat true 
	# Set the flag in all the files  
	$ find . -type f | xargs git update-index --assume-unchanged 
	# Update the git index for the change to take effect 
	$ git update-index --really-refresh
	 
Let's see how the performance is:

	$ sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches" 
	$ sudo sh -c "sync; echo 0 > /proc/sys/vm/drop_caches" 
	$ time ../../ngit.py status 
	# On branch master 
	[...]  
	real 0m18.504s user 0m0.360s sys 0m0.316s  
	$ time ../../ngit.py status 
	[...]  
	real 0m1.386s user 0m0.288s sys 0m0.244s 
	
So it's 18 seconds with cold cache and one second with a warm cache. Not too bad I suppose. But hey, what is the system busy doing in those 18 seconds? Didn't we avoid all the lstat() calls?

	$ strace git status 2>&1 1>/dev/null | grep lstat | wc -l 
	39 
	$ strace git status 2>&1 1>/dev/null | grep open | wc -l 
	2676
	 
Aha! What are those open calls? Well, git status does two open calls for every folder, one to open it, and one to try to open the .gitignore file in it (even if it's not existent). At the moment there is no way to avoid this.

So, is this workaround worth using? Well, hold your horses guys! First we need to test it in a real world environment, which means that the read-only folder must be and NFS mounted one. Till next time! :)

# Add NFS to the equation

In the previous posts I described this alternative method to try to save some time and space when using Git on huge repositories. The time has come to test the "final" solution, one that will put together all the elements in the equation: unionfs, the thing wrapper around Git and now NFS.

To do this I installed an NFS server on our test machine and an NFS client on my laptop, then i mounted the NFS folder and merged it with my local folder
 
	$ unionfs-fuse -o cow localRepo=RW:nfsRepo=RO mergedRepo
	 
And now, the moment of truth! *drumrolls*:

	$ sudo sh -c "sync; echo 3 > /proc/sys/vm/drop_caches" 
	$ sudo sh -c "sync; echo 0 > /proc/sys/vm/drop_caches" 
	$ time git status 
	# On branch master 
	[...]  
	real 0m8.797s user 0m0.248s sys 0m0.272s 
	$ time git status 
	# On branch master 
	[...]  
	real 0m2.599s user 0m0.212s sys 0m0.308s
	 
As you can see with cold cache it's faster than in the local version, and that's because I only deleted the local cache, and not the one on the NFS server. The warm cache case takes about double the time compared with the previous experiment.
I think I will sleep over the results and draw some conclusions in the next post :)