# Import Git script for PS1
source /etc/bash_completion.d/git-prompt

# Color definition for PS1
txtred='\e[0;31m'
txtwhite='\e[0;37m'
txtyellow='\e[0;33m'

# Defnite PS1 in this format: 
#      user:dir (git branch)$: 
# on this colors:
#      user = white
#      dir = yellow
#      branch = red
#      $ = white
PS1="\[$txtwhite\]\u:\[\e[0m\]\[$txtyellow\]\w\[\e[0m\]\[$txtred\]\$(__git_ps1)\[\e[0m\]\[$txtwhite\]\\$\[\e[0m\] "