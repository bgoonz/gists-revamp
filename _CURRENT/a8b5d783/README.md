# GithubCloner

# A script that clones Github repositories of users and organizations.

# Usage

<table style="width:99%;"><colgroup><col style="width: 43%" /><col style="width: 56%" /></colgroup><thead><tr class="header"><th>Description</th><th>Command</th></tr></thead><tbody><tr class="odd"><td>Help</td><td><code>./githubcloner.py --help</code></td></tr><tr class="even"><td>Clone all repositories of a single user.</td><td><code>./githubcloner.py --user user -o /tmp/output</code></td></tr><tr class="odd"><td>Clone all repositories of multiple users.</td><td><code>./githubcloner.py --user user1,user2,user3 -o /tmp/output</code></td></tr><tr class="even"><td>Clone all repositories of a single organization.</td><td><code>./githubcloner.py --org organization -o /tmp/output</code></td></tr><tr class="odd"><td>Clone all repositories of multiple organizations.</td><td><code>./githubcloner.py --org organization1,organization2 -o /tmp/output</code></td></tr><tr class="even"><td>Clone all repositories of an organization in a hosted Github</td><td><code>./githubcloner.py --org organization -o /tmp/output</code> –api-prefix https://git.company.com/api/v3</td></tr><tr class="odd"><td>Modify the amount of used threads</td><td><code>./githubcloner.py --user user --threads 10 -o /tmp/output</code></td></tr><tr class="even"><td>Clone all repositories of an organization, along with all repositories of the organization’s members.</td><td><code>./githubcloner.py --org organization --include-org-members -o /tmp/output</code></td></tr><tr class="odd"><td>Use Github authentication in the task.</td><td><code>./githubcloner.py --org organization -o /tmp/output --authentication user:token</code></td></tr><tr class="even"><td>Clone authenticated repositories that the authenticated user has access to.</td><td><code>./githubcloner.py -o /tmp/output --authentication user:token --include-authenticated-repos</code></td></tr><tr class="odd"><td>Include gists.</td><td><code>./githubcloner.py --user user -o /tmp/output --include-gists</code></td></tr><tr class="even"><td>Save repos as username_reponame</td><td><code>./githubcloner.py --user user -o /tmp/output --prefix-mode underscore</code></td></tr><tr class="odd"><td>Save repos as username/reponame</td><td><code>./githubcloner.py --user user -o /tmp/output --prefix-mode directory</code></td></tr><tr class="even"><td>Save repos as reponame</td><td><code>./githubcloner.py --user user -o /tmp/output --prefix-mode none</code></td></tr><tr class="odd"><td>Exclude comma separated list of repos</td><td><code>./githubcloner.py --user user -- exclude_repos repo1,repo2,repo3,...</code></td></tr><tr class="even"><td>Print gathered URLs only and then exit.</td><td><code>./githubcloner.py --user user --include-gists --echo-urls</code></td></tr></tbody></table>

# Compatibility

The project is compatible with both Python 2 and Python 3.

# Requirements

- Python2 or Python3
- requests
- gitpython

# Testing

- nosetests -vx

# License

The project is licensed under MIT License.

# Legal Disclaimer

This project is made for educational and ethical testing purposes only. It is the end user’s responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.

# Author

## _Mazin Ahmed_

- Website: <https://mazinahmed.net>
- Email: _mazin AT mazinahmed DOT net_
- Twitter: <https://twitter.com/mazen160>
- Linkedin: <http://linkedin.com/in/infosecmazinahmed>

# Update from qkzk

- option to exclude a bunch of repos
- refactor
