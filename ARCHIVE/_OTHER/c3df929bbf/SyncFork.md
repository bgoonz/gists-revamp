# Sync GitHub Fork with Upstream

**Reference:** https://help.github.com/articles/syncing-a-fork/

The below is a summary of how you are able to synchronize your forked repository in GitHub with the original repository you originally forked from.

1. Clone your forked repo into your workspace and `cd` into it.

    ```
    git clone git@github.com:YOUR_USERNAME/YOUR_FORK.git
    cd YOUR_FORK
    ```

2. Add the upstream URL.

    ```
    git remote -v
    git remote add upstream git@github.com:ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
    git remote -v
    ```

3. Fetch the branches and their respective commits from the upstream repository. Commits to `master` will be stored in a local branch, `upstream/master`.

    ```
    git fetch upstream
    ```

4. Check out your fork's local `master` branch

    ```
    git checkout master
    ```

5. Merge the changes from `upstream/master` into your local `master` branch.

    ```
    git merge upstream/master
    ```

6. If you had any local changes, complete those changes and commit them to `master`.

7. Push the updates to your forked repository.

    ```
    git push origin master
    ```