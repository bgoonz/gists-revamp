# CPU

```
$ sysctl hw.physicalcpu hw.logicalcpu
hw.physicalcpu: 4
hw.logicalcpu: 8
```

# go-ipfs 0.4.21

cmds:

```
rm -rf ~/.ipfs

ipfs init --profile=badgerds

$ ipfs config --json Datastore.NoSync true
$ ipfs config Reprovider.Interval "0"
$ ipfs config --json Experimental.ShardingEnabled true
$ ipfs config --json Experimental.FilestoreEnabled true

time ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
```

results:

```
time ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
47.50 GiB / 47.50 GiB [===============================================] 100.00%
QmY5C4FXTDtmbyyKX1KixVMedJQ2nk9RgJMv6j9pDzrUaR

real	10m49.517s
user	7m5.248s
sys	1m24.406s
```

# go-ipfs master (8417818af1cbdb79ffd22ede4885471d88bbcb58)

cmds:

```
rm -rf ~/.ipfs

git clone https://github.com/ipfs/go-ipfs.git
cd go-ipfs/
make install

$GOPATH/bin/ipfs init --profile=badgerds

$GOPATH/bin/ipfs config --json Datastore.NoSync true
$GOPATH/bin/ipfs config Reprovider.Interval "0"
$GOPATH/bin/ipfs config --json Experimental.ShardingEnabled true
$GOPATH/bin/ipfs config --json Experimental.FilestoreEnabled true

time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
```

results:

```
time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
47.50 GiB / 47.50 GiB [===============================================] 100.00%
QmY5C4FXTDtmbyyKX1KixVMedJQ2nk9RgJMv6j9pDzrUaR

real	11m2.681s
user	7m11.504s
sys	1m25.566s
```

# go-ipfs dirkmc/go-ipfs (1c3c4f0a8142bf778500efae4eb0ba1048993f13)

cmds:

```
rm -rf ~/.ipfs
rm -rf go-ipfs
git clone https://github.com/dirkmc/go-ipfs.git
cd go-ipfs/
git co exp/add-perf
make install

$GOPATH/bin/ipfs init --profile=badgerds
$GOPATH/bin/ipfs config --json Datastore.NoSync true
$GOPATH/bin/ipfs config Reprovider.Interval "0"
$GOPATH/bin/ipfs config --json Experimental.ShardingEnabled true
$GOPATH/bin/ipfs config --json Experimental.FilestoreEnabled true

time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
```

results:

```
1.01 TiB / 47.50 GiB [===============================================] 2167.65%
643387 milli-seconds add
122321 milli-seconds cumulative
QmNiB7YTGC6mkd8BGVv1pj6hdCqyEYEL78ibjwkLqY8MKi

real	2m2.453s
user	1m12.190s
sys	0m15.891s
```

notes:

- pool is missing 38GB of content
- progress is broken
- different CID

# go-ipfs dirkmc/go-ipfs (1c3c4f0a8142bf778500efae4eb0ba1048993f13) attempt 2 (less experimental config flags)

cmds:

```
rm -rf ~/.ipfs
rm -rf go-ipfs
git clone https://github.com/dirkmc/go-ipfs.git
cd go-ipfs/
git co exp/add-perf
make install

$GOPATH/bin/ipfs init --profile=badgerds
$GOPATH/bin/ipfs config --json Datastore.NoSync true
$GOPATH/bin/ipfs config Reprovider.Interval "0"

time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
```

results:

```
time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
1.09 TiB / 47.50 GiB [===============================================] 2356.23%
675337 milli-seconds add
125696 milli-seconds cumulative
QmNecMRRJnhFQeq3y6Sncn9KzuKp5yYWWoofS9EqR1evXZ

real	2m5.837s
user	1m13.165s
sys	0m16.306s
```

notes:

- pool is still missing 38GB of content
- different CID again

# go-ipfs dirkmc/go-ipfs (1c3c4f0a8142bf778500efae4eb0ba1048993f13) attempt 3 (no experimental config flags)

cmds:

```
rm -rf ~/.ipfs
rm -rf go-ipfs
git clone https://github.com/dirkmc/go-ipfs.git
cd go-ipfs/
git co exp/add-perf
make install

$GOPATH/bin/ipfs init --profile=badgerds

time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
```

results:

```
time $GOPATH/bin/ipfs add -r --progress --offline --quieter /Volumes/5TB/arch/
1010.09 GiB / 47.50 GiB [============================================] 2126.59%
769083 milli-seconds add
126815 milli-seconds cumulative
QmYoP9V5zAuyioqWsMnSywvxYTAyhcR2zyvYVoX2SjePsu

real	2m6.979s
user	1m9.665s
sys	0m15.573s
```
