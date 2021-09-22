# File system package managers

## What?

There are general four approaches to the implementation of package manager seen in popular usage:

- File System Based
- Database Based
- and two git based ones:
  - Portable Registries
  - Registry-less

File system based package managers are the simplest in their implementation, the whole registry (often also called a repository), including all package metadata and package contents is contained on disk within a single top level directory.

The contain a well defined directory structure of nested folders containing various types of files. Different file system based package managers will have different directory structures but all of them contain basic types of files, folders, symlinks etc that can be found on a unix file system.

This top level directory is then exposed to the world (read-only) via a number of protocols: http, ftp and rsync being the most popular ways.

Clients of these package managers will have a built-in understanding of the directory structure and are able to turn installation requests for a package by name, `0ad` in debian for example, into a path within the registry, `pool/main/0/0ad/0ad_0.0.21-2_amd64.deb`, which can then be download, by http in this case at: http://http.us.debian.org/debian/pool/main/0/0ad/0ad_0.0.21-2_amd64.deb

Because the whole registry is available as a single folder, downloading a whole working copy of that registry is easy, and so many people will make copies for themselves, their companies or even the community (often called mirrors).

Publishing to file-system-based registries is quite different than with database-based package manager that you may have used before (via `npm publish` for example). This is because only a handful of people have write access to a file-system-based registry and when they do, they have access to add/update/edit/remove any package within the whole registry.

The general process for publishing to a file-system-based registry is to email one of the admins of the registry (usually via a public mailing list or bug tracker) and once your package has been audited, it will be added to the registry at the admins discretion.

This is unlike database-based registries where you can often signup with an email and password via a website and then upload a new package without any barriers but you can only publish packages that you have been given access to, either because you initially created it or another publisher gave you access to publish updates to their package.

Another way to publish to a file-system-based registry, without requiring going through a review process is to make yourself a brand new registry. Because file-system-based registries are just a file system, the requirements for creating one are minimal, each registry type (usually aligned with a linux distribution) has a tool that will set up the correct directory structure and update metadata files to be able to publish a package. You can then expose your registry over http with a simple web server like apache or nginx and over rsync by running the rsync daemon.

The downsides of making your own registry for your packages is that for other people to use it, they must first know about your registry or find it somewhere, then they must trust it's content as it won't be listed as an official, approved mirror by the distro maintainers. You are then wholly responsible for keeping the mirror up and running, up to date and secure for potentially years. Popular public registries can also end up serving large amounts of bandwidth.

Security-wise, file-system-based package managers lean strongly on public key signing, signatures are also stored as files within the same registry.

## Why?

Because file-system-based package managers have minimal requirements of read+writable unix file system plus http server, this is the easiest package manager type to fully support with IPFS.

IPFS also has all of the basic elements to be able to support file-system-based package managers already, the main amount of work is to optimise those pieces for performance and end user experience.

Almost all Linux Distributions us a file system based package manager, so making IPFS support this kind will enable a large percentage of system package managers to be deployed/mirrored onto IPFS, as well as a handful of popular language package managers.

The work to enable file system based package managers is not specific to any one registry, as long as all standard file system features are supported, all file system based package managers will be able to us it on the registry/server/mirror side of things, which existing clients will be able to continue to use HTTP and upgrade to load data directly over IPFS on their own time.

Database-based package managers require much of the work that will need to be done for file-system-based package managers, as well as more work on top of that for the Database-based specific parts.

The IPFS requirements for supporting File system based package managers are very similar to supporting Large Files on IPFS, although with a smaller scope and just two personas, the repository maintainer (sets up and maintains+updates the registry/mirror) and the package consumer (downloads packages from the registry/mirror on their laptop/server/CI/container).

## How?

In theory, IPFS already has all of the required pieces to be able to support file-system-based package managers already, but the experience of actually running one on IPFS is currently very slow and the user experience can be confusing.

Some relevant IPFS subsystems to file-system-based package managers:

- unixFS
- DNSlink
- IPNS
- MFS
- IPFS cluster

There are two main sections in file-system-based package manager support:

1. Hosting a registry on IPFS
2. Installing packages from a registry hosted IPFS

Steps involved in hosting a file-system-based registry on IPFS:

Initial import:

- Given the path to the root directory of the registry on disk,
- import the whole directory into IPFS, resulting in a single CID of the root directory and all files+folders contained within
- Publish that CID to a DNSlink txt record on a domain name to act as the domain name for the registry
- (optional) publish that CID to IPNS and publish the IPNS hash to DNSlink instead of the CID

Updating the registry:

TODO

## When?

Q3+Q4

## Where?

....
