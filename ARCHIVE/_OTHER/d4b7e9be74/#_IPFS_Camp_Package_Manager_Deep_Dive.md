# IPFS Camp Package Manager Deep Dive

## Package Managers: What Now, What Next?

> Community evaluation and ideation session to recap the current (as of late June) state of the IPFS-enabled package manager landscape, discuss happiness and pain points, and do some ideation/co-creation around the direction of our next rounds of package manager efforts.

## Existing materials

- Fundamental package management concepts
- Problems with package managers
- Cladistic tree of IPFS integration
- Decentralized package management
- Offline package management
- Existing integrations and demos

## Topics and areas of interest

- Ease of use
- Resource reduction
- Performance
- Offline
- Reproducability
- Forkability
- User hosted
- Decentralized publishing
- Communication
- Security and Trust
- Discovery
- Community

## Order of activities

- Overview of current space (can @achingbrain and @andrew help assemble this?) with
  - Emphasis that there's a lot to tackle here, and we want to give you a brief overview to level-set
  - Emphasis on "here's our body of research/analysis over the last six months, here are the problems and opportunities we've reached as part of this research, now let's rank/discuss these"
  - Emphasis that this is a large problem space: show the reproducable build group's current work and problem space?
- Posters with streamlined versions of the in-depth problems and benefits below
- Dot-voting (include fill-in-the-blank for "other")
- 2x2 grids: prevalence of problem, pain of problem. Points on the grids to be noted per package manger or other area of specificity
- Further discussion on the "biggest" dots: potential solutions and technical hurdles on stickies
  - [Crazy Eights](https://www.iamnotmypixels.com/how-to-use-crazy-8s-to-generate-design-ideas/) would be another great approach if we have enough people or enough concentration of interest in particular areas

## Session Flow ideas

Q: which problems with package management should IPFS tackle?

Outputs for each problem:

- why that problem is important
- what solutions are available
- advantages and shortcomings of proposed solutions
- important concepts, obstacles, and related topics

Q: which benefits for package management should IPFS focus on?

Outputs for each benefit:

- why that benefit is important
- how to achieve that benefit
- advantages and shortcomings of proposed solutions
- important concepts, obstacles, and related topics

Q: ideas for potential solutions

- Even if they are wacky
- Or they've been done before

## Indepth problems that face package managers today that IPFS could help with

- Compatibility/interoperability
  - Maintaining compatibility with multiple platforms, architectures and run times
- Versioning
  - Not being able to opt-out of using new releases which have breaking changes
  - Difficult to know what percentage of consumers are using newer releases vs stuck on old releases due to incompatibilities
  - Difficult to discourage users from using broken/deprecated releases
- Services/tooling
  - Tooling and infrastructure to produce pre-built binaries is awful across the board
- Dependencies
  - Language level packages that depend system level packages do not communicate or automate those dependency links effectively
  - Not being able to resolve conflicting dependency requirements when building a dependency tree
  - Not being able to update/fix/swap old packages deep within a dependency tree when they cause problems
  - Not being able to efficiently review the downloaded code within each dependency of an application
  - Not being able to reproduce a known working set of dependencies at a later date
  - Not being able to install more than one version of a dependency at once
  - Difficult to test package against a range of different versions of upstream and downstream dependencies
  - Package managers often can't use themselves for managing dependencies, due to bootstrapping issues, resulting in duplicate efforts and reduced productivity
- Security/verifiablity/trust
  - Not being able to validate the license/copyright/patent details of a package
  - Not being able to confirm that the contents of a download package is the same as was originally published by the author
  - Package maintainers transferring ownership to unknown entities
  - Vetting contributions for security concerns
  - Coordinating key signing infrastructure between maintainers is time consuming and error prone
  - Having to police illegal/pirate/malicious packages from the registry
  - Difficult to hand over control/trust when maintainers step down
  - Large amount of trust placed on very small amount of maintainers
- Reliablity/availablity
  - Package releases being removed from registries
  - Not being able to install or build packages whilst offline
  - Registry downtime stops building/developing of software that is dependent on it
  - Recovery of data after loss due to server failure or security breach
- Communication/support/community/discovery
  - Not knowing the status of a package (deprecated, unmaintained, broken etc)
  - Difficult to know if a new release of a package is stable
  - Difficult to know when new releases of packages are published
  - Not being able to find new packages that are relevant to consumers interests/needs
  - Not being able to filter packages by compatible licenses
  - Communicating with consumers of packages
  - Difficulties communicating with package consumers and producers
  - Deploying significant changes can result in community backlash
  - Heavy support burden from both consumers and producers
- Costs
  - Hosting internal or private mirrors of registries is time consuming and requires ongoing maintenance and infrastructure costs
  - Greatly increased infrastructure costs when storing binaries as well as source code
  - Difficulties funding maintenance, development and infrastructure costs
  - Distributing infrastructure globally can be costly/complex

## Indepth potential benefits of putting package managers on IPFS:

- Ease of use

  - easier to mirror a registry
  - easier to run private registries
  - easier to use specific historial versions

- Save resources

  - Save bandwidth reducing re-downloads
  - minimize storage requirements by de-duping package contents
  - updates are smaller/more condensed
  - registries save on bandwidth and storage costs
  - registries aren't reliant on donations of services (CDN, hosting etc)
  - more users = more savings

- Performance

  - Faster to download from IPFS powered registries/mirrors
  - Faster when there are other local devs with the same packages installed
  - Faster in production environments (clusters, CI etc)

- Offline

  - More resilient to network problems during installations
  - possible to install and verify packages whilst Offline
  - registry downtime doesn't delay deployment
  - works great when network is poor
  - takes load off community ran registries

- Reproducibility

  - Easy to delcare and verify the provenance of all software you run
  - confirm that you're running exactly the same code you expect
  - No more left-pads

- Forkability

  - Users can easily fork existing registries
  - Users can easily make use of multiple registry indexes
  - Users can easily start their own registries

- User hosted

  - Users can replicate and provide the packages they care about
  - People automatically cache the packages and content they rely on
  - cached copies remain available when network partitions happen
  - small actors can contribute to scaling their community
  - every user is a mirror (the term mirror falls away)
  - no special access required to copy/mirror/edit parts of a dependency network

- Decentralized publishing

  - reduced requirement for centralized registries
  - publish directly to IPFS
  - avoid namespacing problems
  - reduce central points of failure and trust

- Communication
  - Improved ways to broadcast/announce things to package consumers (new release, cve, license issue, bugs etc)
  - verification data can be broadly shared between many users to improve visibility and reduce verification rework
