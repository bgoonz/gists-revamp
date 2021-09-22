# Polling Searches on GHE

How can you determine what is polling your GitHub Enterprise system? If you suspect polling, this data will help you pinpoint where it is coming from. Don't just tell your users "stop polling", get the data and tell them where it is coming from.

## Number of requests in 10 minute intervals

When reviewed over a 24-hour period, consistent numbers in non-peak hours indicates likely polling with short intervals. Longer polling intervals also stand out, often as a burst of high traffic each hour on the hour.

```
$ cut -c 1-15 /var/log/babeld/babeld.log | uniq -c
3731 Mon Aug 29 06:2
8116 Mon Aug 29 06:3
8511 Mon Aug 29 06:4
...
10017 Mon Aug 29 18:2    (*)
10141 Mon Aug 29 18:3
...
9438 Mon Aug 29 19:1
9357 Mon Aug 29 19:2
6665 Mon Aug 29 19:3
...
```

_(\*) Spike at 18:20, a build job probably woke up and started polling. Look for spikes and consistently high numbers._

## Top 10 owners of repositories

For the top 10 owners of repositories:

```
$ grep -oP 'repo=[^/]*' babeld.log | sort | uniq -c | sort -nr | head
96176 repo=pollingUser    (*)
75724 repo=someOwnerA
41157 repo=someOwnerB
33101 repo=someOwnerC
25205 repo=someOwnerD
22396 repo=someOwnerE
21566 repo=someOwnerF
21270 repo=someOwnerG
17600 repo=someOwnerH
16704 repo=someOwnerI
...
```

_(\*) It looks like `pollingUser` is really active._

## Top 10 users doing git operations

For the top 10 users doing Git operations overall:

```
$ grep -oP 'user=[^ ]*' babeld.log | sort | uniq -c | sort -nr | head
110371 user=user:270:1:pollingUser    (*)
83636 user=user:1045:1:userA
52526 user=user:1422:1:userB
34956 user=user:2216:1:userC
26149 user=user:6337:1:userD
22300 user=user:7480:1:userE
21075 user=user:1212:1:userF
19230 user=user:10450:1:userG
18730 user=user:4806:1:userH
16860 user=user:7884:1:userI
...
```

_(\*) There is the `pollingUser` again._

## Per hour access rate

Per hour access by user `pollingUser`.

```
$ grep -F 'user=user:270:1:pollingUser' babeld.log | cut -c 1-13 | uniq -c
3726 Wed Aug 24 06
6505 Wed Aug 24 07
6471 Wed Aug 24 08
6228 Wed Aug 24 09
6448 Wed Aug 24 10
6183 Wed Aug 24 11
6653 Wed Aug 24 12
6669 Wed Aug 24 13    (*)
6530 Wed Aug 24 14
6340 Wed Aug 24 15
...
```

_(\*) A high of 111 per minute._

## Repositories and counts for that user

For the top 10 owners of repositories:

```
$ grep -F 'user=user:270:1:pollingUser' babeld.log | grep -oP 'repo=[^ ]*' | sort | uniq -c | sort -nr
96353 repo=pollingUser/bigRepo    (*)
3646 repo=owner1/bigRepo
3642 repo=owner1/repoX
1214 repo=owner22/repoX
1214 repo=owner333/repoX
...
```

_(\*) `bigRepo` has a lot of activity._

## Identifying the 15 most active SSH keys

Look in `/var/log/github/gitauth.log`.

```
$ grep fingerprint gitauth.log | awk '{print $8}' | sort | uniq -c | sort -nr | head -n 15
55959 fingerprint="b3:****:a4"    (*)
41059 fingerprint="b2:****:fd"
22616 fingerprint="a1:****:14"
21333 fingerprint="d2:****:3d"
16996 fingerprint="19:****:b9"
14759 fingerprint="ef:****:38"
13270 fingerprint="12:****:5d"
12786 fingerprint="0b:****:69"
12465 fingerprint="09:****:67"
```

_(\*) Very active SSH fingerprint. Do you have a lot of build machines? A lot of builds on one machine? Start a dialogue with the user._

# References

- [Managing GitHub at Scale - GitHub Universe 2016](https://www.youtube.com/watch?v=UB283wKxiqU)
