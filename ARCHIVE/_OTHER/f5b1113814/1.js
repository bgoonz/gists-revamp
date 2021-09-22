/*
  NOTE: This code assumes a bare git repo in ./bare-git/,
  which should have at least one text file in its root,
  named "greetings.txt".
  
  This code updates the contents of a "greetings.txt"
  file, and creates a new file called "greetings-XXX.txt"
  (with XXX being a random number). It then creates a new
  commit for these changes. Finally, it reads and dumps
  the new current contents of the repo, file by file.
  
  Some code inspired by:
     https://gist.github.com/yofreke/9379d1156fe6f5f0be73
*/

var Git = require("nodegit");
var FA = require("fasy"); // used for concurrent async mapping

// NOTE: these are used to authenticate clones/fetches/pushes
var authenticationCallbacks = {
  certificateCheck: function skipCertCheck() {
    return 1;
  },
  credentials: onCredentialCheck,
};

main().catch(console.error);

// **************************************

async function main() {
  // var repo = await cloneRepo();
  var repo = await openRepo();

  // await updateRepo(repo);
  await changeRepoFiles(repo);
  // await pushRepo(repo);
  await dumpRepoContents(repo);
}

async function openRepo() {
  return Git.Repository.openBare("./bare-git");
}

async function cloneRepo() {
  // NOTE: doing a bare clone instead of a full clone.
  //   also, HTTP unauthenticated clone instead of via SSH
  return Git.Clone.clone(
    "https://github.com/whatever/something.git",
    "./bare-git",
    {
      bare: 1,
    }
  );

  // NOTE: if you need to do authenticated cloning (via SSH),
  //    this is how to do that:
  // return Git.Clone.clone(
  //     "git@github.com:whatever/something.git",
  //     "./bare-git",
  //     {
  //         bare: 1,
  //         fetchOpts: {
  //             callbacks: authenticationCallbacks,
  //         },
  //     }
  // );
}

async function updateRepo(repo) {
  var remote = await Git.Remote.lookup(repo, "origin");

  // NOTE: using this wildcard refspec to fetch everything
  await remote.fetch("+refs/*:refs/*", {
    downloadTags: 1,
    prune: 1,
    updateFetchhead: 1,
  });

  // NOTE: if the repo was cloned from an authenticated source
  //    (e.g., via SSH), updating needs to be authenticated,
  //    so this is how to do that:
  // await remote.fetch("+refs/*:refs/*",{
  //     downloadTags: 1,
  //     prune: 1,
  //     updateFetchhead: 1,
  //     callbacks: authenticationCallbacks,
  // });
}

function onCredentialCheck() {
  // NOTE: you might instead need to get an SSH key from
  //    local public/private keys, using `sshKeyNew(..)`.
  //    either way, the username has to be 'git' if that's
  //    the username used for the SSH URL for the remote
  //    (clone, etc)
  return Git.Cred.sshKeyFromAgent("git");
}

async function pushRepo(repo) {
  var remote = await repo.getRemote("origin");

  // NOTE: pulling out all refs so that the push is complete
  var refs = await repo.getReferences(Git.Reference.TYPE.LISTALL);
  var refSpecs = refs.map(function getRefSpec(ref) {
    return `${ref.toString()}:${ref.toString()}`;
  });

  // NOTE: this is how to connect/disconnect the remote, in case
  //    that's needed; but it doesn't seem like it is.
  // await remote.connect(Git.Enums.DIRECTION.PUSH,authenticationCallbacks);
  // await remote.disconnect();

  // NOTE: pushing generally requires authentication, so this is
  //    how to do that:
  await remote.push(refSpecs, {
    callbacks: authenticationCallbacks,
  });
}

async function getFileContents(repo, tree, filePath) {
  var fileEntry = await tree.entryByPath(filePath);
  return (await repo.getBlob(fileEntry.oid())).toString();
}

async function addOrUpdateFile(repo, builder, filePath, fileContents) {
  var buf = new Buffer(fileContents, "utf-8");
  var oid = await Git.Blob.createFromBuffer(repo, buf, buf.length);
  await builder.insert(filePath, oid, Git.TreeEntry.FILEMODE.BLOB);
}

async function commitChanges(repo, treeOID, parentCommit, message) {
  var author = Git.Signature.now("--Me--", "--my@email.tld--");

  return repo.createCommit("HEAD", author, author, message, treeOID, [
    parentCommit,
  ]);
}

async function changeRepoFiles(repo) {
  var HEAD = await repo.getBranchCommit("master");
  var currentTree = await HEAD.getTree();

  // get current file contents and update it
  var greetings = await getFileContents(repo, currentTree, "greetings.txt");
  greetings += `(Updated: ${Date.now()})`;

  var newFilename = `greetings-${Math.trunc(Math.random() * 1e6)}.txt`;

  // change the git tree using treebuilder
  var builder = await Git.Treebuilder.create(repo, currentTree);
  await addOrUpdateFile(repo, builder, "greetings.txt", chainJSON);
  await addOrUpdateFile(repo, builder, newFilename, "Hello World!");
  var treeOID = builder.write();

  // commit changes
  var commitOID = await commitChanges(
    repo,
    treeOID,
    HEAD,
    `Adding/updating files: greetings.txt, ${newFilename}`
  );

  console.log(`New commit: ${commitOID.toString()}`);
}

async function dumpRepoContents(repo) {
  var HEAD = await repo.getBranchCommit("master");
  var currentTree = await HEAD.getTree();

  console.log(`HEAD commit: ${HEAD.id()}; ${HEAD.message()}`);

  var tree = await HEAD.getTree();
  var treeEntries = tree.entries();

  var contents = await FA.concurrent.flatMap(async function getContents(entry) {
    if (entry.isFile()) {
      return {
        filename: entry.name(),
        contents: (await entry.getBlob()).toString(),
      };
    } else if (entry.isDirectory()) {
      let dirEntries = (await entry.getTree()).entries();
      return FA.concurrent.flatMap(getContents, dirEntries);
    }
  }, treeEntries);

  console.log(JSON.stringify(contents, null, 4));
}
