## Getting started

{: .-three-column}

### Introduction

{: .-intro}

This is a quick reference to getting started with Bash scripting.

- [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_

### Example

    #!/usr/bin/env bash

    NAME="John"
    echo "Hello $NAME!"

### Variables

    NAME="John"
    echo $NAME
    echo "$NAME"
    echo "${NAME}!"

### String quotes

    NAME="John"
    echo "Hi $NAME"  #=> Hi John
    echo 'Hi $NAME'  #=> Hi $NAME

### Shell execution

    echo "I'm in $(pwd)"
    echo "I'm in `pwd`"
    # Same

See [Command substitution](http://wiki.bash-hackers.org/syntax/expansion/cmdsubst)

### Conditional execution

    git commit && git push
    git commit || echo "Commit failed"

### Functions

{: id=‘functions-example’}

    get_name() {
      echo "John"
    }

    echo "You are $(get_name)"

See: [Functions](#functions)

### Conditionals

{: id=‘conditionals-example’}

    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    fi

See: [Conditionals](#conditionals)

### Strict mode

    set -euo pipefail
    IFS=$'\n\t'

See: [Unofficial bash strict mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/)

### Brace expansion

    echo {A,B}.js

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>{A,B}</code></td><td>Same as <code>A B</code></td></tr><tr class="even"><td><code>{A,B}.js</code></td><td>Same as <code>A.js B.js</code></td></tr><tr class="odd"><td><code>{1..5}</code></td><td>Same as <code>1 2 3 4 5</code></td></tr></tbody></table>

See: [Brace expansion](http://wiki.bash-hackers.org/syntax/expansion/brace)

## Parameter expansions

{: .-three-column}

### Basics

    name="John"
    echo ${name}
    echo ${name/J/j}    #=> "john" (substitution)
    echo ${name:0:2}    #=> "Jo" (slicing)
    echo ${name::2}     #=> "Jo" (slicing)
    echo ${name::-1}    #=> "Joh" (slicing)
    echo ${name:(-1)}   #=> "n" (slicing from right)
    echo ${name:(-2):1} #=> "h" (slicing from right)
    echo ${food:-Cake}  #=> $food or "Cake"

    length=2
    echo ${name:0:length}  #=> "Jo"

See: [Parameter expansion](http://wiki.bash-hackers.org/syntax/pe)

    STR="/path/to/foo.cpp"
    echo ${STR%.cpp}    # /path/to/foo
    echo ${STR%.cpp}.o  # /path/to/foo.o
    echo ${STR%/*}      # /path/to

    echo ${STR##*.}     # cpp (extension)
    echo ${STR##*/}     # foo.cpp (basepath)

    echo ${STR#*/}      # path/to/foo.cpp
    echo ${STR##*/}     # foo.cpp

    echo ${STR/foo/bar} # /path/to/bar.cpp

    STR="Hello world"
    echo ${STR:6:5}   # "world"
    echo ${STR: -5:5}  # "world"

    SRC="/path/to/foo.cpp"
    BASE=${SRC##*/}   #=> "foo.cpp" (basepath)
    DIR=${SRC%$BASE}  #=> "/path/to/" (dirpath)

### Substitution

<table><thead><tr class="header"><th>Code</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${FOO%suffix}</code></td><td>Remove suffix</td></tr><tr class="even"><td><code>${FOO#prefix}</code></td><td>Remove prefix</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>${FOO%%suffix}</code></td><td>Remove long suffix</td></tr><tr class="odd"><td><code>${FOO##prefix}</code></td><td>Remove long prefix</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>${FOO/from/to}</code></td><td>Replace first match</td></tr><tr class="even"><td><code>${FOO//from/to}</code></td><td>Replace all</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>${FOO/%from/to}</code></td><td>Replace suffix</td></tr><tr class="odd"><td><code>${FOO/#from/to}</code></td><td>Replace prefix</td></tr></tbody></table>

### Comments

    # Single line comment

    : '
    This is a
    multi line
    comment
    '

### Substrings

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${FOO:0:3}</code></td><td>Substring <em>(position, length)</em></td></tr><tr class="even"><td><code>${FOO:(-3):3}</code></td><td>Substring from the right</td></tr></tbody></table>

### Length

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${#FOO}</code></td><td>Length of <code>$FOO</code></td></tr></tbody></table>

### Manipulation

    STR="HELLO WORLD!"
    echo ${STR,}   #=> "hELLO WORLD!" (lowercase 1st letter)
    echo ${STR,,}  #=> "hello world!" (all lowercase)

    STR="hello world!"
    echo ${STR^}   #=> "Hello world!" (uppercase 1st letter)
    echo ${STR^^}  #=> "HELLO WORLD!" (all uppercase)

### Default values

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>${FOO:-val}</code></td><td><code>$FOO</code>, or <code>val</code> if unset (or null)</td></tr><tr class="even"><td><code>${FOO:=val}</code></td><td>Set <code>$FOO</code> to <code>val</code> if unset (or null)</td></tr><tr class="odd"><td><code>${FOO:+val}</code></td><td><code>val</code> if <code>$FOO</code> is set (and not null)</td></tr><tr class="even"><td><code>${FOO:?message}</code></td><td>Show error message and exit if <code>$FOO</code> is unset (or null)</td></tr></tbody></table>

Omitting the `:` removes the (non)nullity checks, e.g. `${FOO-val}` expands to `val` if unset otherwise `$FOO`.

## Loops

{: .-three-column}

### Basic for loop

    for i in /etc/rc.*; do
      echo $i
    done

### C-like for loop

    for ((i = 0 ; i < 100 ; i++)); do
      echo $i
    done

### Ranges

    for i in {1..5}; do
        echo "Welcome $i"
    done

#### With step size

    for i in {5..50..5}; do
        echo "Welcome $i"
    done

### Reading lines

    cat file.txt | while read line; do
      echo $line
    done

### Forever

    while true; do
      ···
    done

## Functions

{: .-three-column}

### Defining functions

    myfunc() {
        echo "hello $1"
    }

    # Same as above (alternate syntax)
    function myfunc() {
        echo "hello $1"
    }

    myfunc "John"

### Returning values

    myfunc() {
        local myresult='some value'
        echo $myresult
    }

    result="$(myfunc)"

### Raising errors

    myfunc() {
      return 1
    }

    if myfunc; then
      echo "success"
    else
      echo "failure"
    fi

### Arguments

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>$#</code></td><td>Number of arguments</td></tr><tr class="even"><td><code>$*</code></td><td>All postional arguments (as a single word)</td></tr><tr class="odd"><td><code>$@</code></td><td>All postitional arguments (as separate strings)</td></tr><tr class="even"><td><code>$1</code></td><td>First argument</td></tr><tr class="odd"><td><code>$_</code></td><td>Last argument of the previous command</td></tr></tbody></table>

**Note**: `$@` and `$*` must be quoted in order to perform as described. Otherwise, they do exactly the same thing (arguments as separate strings).

See [Special parameters](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables).

## Conditionals

{: .-three-column}

### Conditions

Note that `[[` is actually a command/program that returns either `0` (true) or `1` (false). Any program that obeys the same logic (like all base utils, such as `grep(1)` or `ping(1)`) can be used as condition, see examples.

<table><thead><tr class="header"><th>Condition</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>[[ -z STRING ]]</code></td><td>Empty string</td></tr><tr class="even"><td><code>[[ -n STRING ]]</code></td><td>Not empty string</td></tr><tr class="odd"><td><code>[[ STRING == STRING ]]</code></td><td>Equal</td></tr><tr class="even"><td><code>[[ STRING != STRING ]]</code></td><td>Not Equal</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>[[ NUM -eq NUM ]]</code></td><td>Equal</td></tr><tr class="odd"><td><code>[[ NUM -ne NUM ]]</code></td><td>Not equal</td></tr><tr class="even"><td><code>[[ NUM -lt NUM ]]</code></td><td>Less than</td></tr><tr class="odd"><td><code>[[ NUM -le NUM ]]</code></td><td>Less than or equal</td></tr><tr class="even"><td><code>[[ NUM -gt NUM ]]</code></td><td>Greater than</td></tr><tr class="odd"><td><code>[[ NUM -ge NUM ]]</code></td><td>Greater than or equal</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>[[ STRING =~ STRING ]]</code></td><td>Regexp</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>(( NUM &lt; NUM ))</code></td><td>Numeric conditions</td></tr></tbody></table>

#### More conditions

<table><thead><tr class="header"><th>Condition</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>[[ -o noclobber ]]</code></td><td>If OPTIONNAME is enabled</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>[[ ! EXPR ]]</code></td><td>Not</td></tr><tr class="even"><td><code>[[ X &amp;&amp; Y ]]</code></td><td>And</td></tr><tr class="odd"><td><code>[[ X || Y ]]</code></td><td>Or</td></tr></tbody></table>

### File conditions

<table><thead><tr class="header"><th>Condition</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>[[ -e FILE ]]</code></td><td>Exists</td></tr><tr class="even"><td><code>[[ -r FILE ]]</code></td><td>Readable</td></tr><tr class="odd"><td><code>[[ -h FILE ]]</code></td><td>Symlink</td></tr><tr class="even"><td><code>[[ -d FILE ]]</code></td><td>Directory</td></tr><tr class="odd"><td><code>[[ -w FILE ]]</code></td><td>Writable</td></tr><tr class="even"><td><code>[[ -s FILE ]]</code></td><td>Size is &gt; 0 bytes</td></tr><tr class="odd"><td><code>[[ -f FILE ]]</code></td><td>File</td></tr><tr class="even"><td><code>[[ -x FILE ]]</code></td><td>Executable</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>[[ FILE1 -nt FILE2 ]]</code></td><td>1 is more recent than 2</td></tr><tr class="odd"><td><code>[[ FILE1 -ot FILE2 ]]</code></td><td>2 is more recent than 1</td></tr><tr class="even"><td><code>[[ FILE1 -ef FILE2 ]]</code></td><td>Same files</td></tr></tbody></table>

### Example

    # String
    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    else
      echo "This never happens"
    fi

    # Combinations
    if [[ X && Y ]]; then
      ...
    fi

    # Equal
    if [[ "$A" == "$B" ]]

    # Regex
    if [[ "A" =~ . ]]

    if (( $a < $b )); then
       echo "$a is smaller than $b"
    fi

    if [[ -e "file.txt" ]]; then
      echo "file exists"
    fi

## Arrays

### Defining arrays

    Fruits=('Apple' 'Banana' 'Orange')

    Fruits[0]="Apple"
    Fruits[1]="Banana"
    Fruits[2]="Orange"

### Working with arrays

    echo ${Fruits[0]}           # Element #0
    echo ${Fruits[-1]}          # Last element
    echo ${Fruits[@]}           # All elements, space-separated
    echo ${#Fruits[@]}          # Number of elements
    echo ${#Fruits}             # String length of the 1st element
    echo ${#Fruits[3]}          # String length of the Nth element
    echo ${Fruits[@]:3:2}       # Range (from position 3, length 2)
    echo ${!Fruits[@]}          # Keys of all elements, space-separated

### Operations

    Fruits=("${Fruits[@]}" "Watermelon")    # Push
    Fruits+=('Watermelon')                  # Also Push
    Fruits=( ${Fruits[@]/Ap*/} )            # Remove by regex match
    unset Fruits[2]                         # Remove one item
    Fruits=("${Fruits[@]}")                 # Duplicate
    Fruits=("${Fruits[@]}" "${Veggies[@]}") # Concatenate
    lines=(`cat "logfile"`)                 # Read from file

### Iteration

    for i in "${arrayName[@]}"; do
      echo $i
    done

## Dictionaries

{: .-three-column}

### Defining

    declare -A sounds

    sounds[dog]="bark"
    sounds[cow]="moo"
    sounds[bird]="tweet"
    sounds[wolf]="howl"

Declares `sound` as a Dictionary object (aka associative array).

### Working with dictionaries

    echo ${sounds[dog]} # Dog's sound
    echo ${sounds[@]}   # All values
    echo ${!sounds[@]}  # All keys
    echo ${#sounds[@]}  # Number of elements
    unset sounds[dog]   # Delete dog

### Iteration

#### Iterate over values

    for val in "${sounds[@]}"; do
      echo $val
    done

#### Iterate over keys

    for key in "${!sounds[@]}"; do
      echo $key
    done

## Options

### Options

    set -o noclobber  # Avoid overlay files (echo "hi" > foo)
    set -o errexit    # Used to exit upon error, avoiding cascading errors
    set -o pipefail   # Unveils hidden failures
    set -o nounset    # Exposes unset variables

### Glob options

    shopt -s nullglob    # Non-matching globs are removed  ('*.foo' => '')
    shopt -s failglob    # Non-matching globs throw errors
    shopt -s nocaseglob  # Case insensitive globs
    shopt -s dotglob     # Wildcards match dotfiles ("*.sh" => ".foo.sh")
    shopt -s globstar    # Allow ** for recursive matches ('lib/**/*.rb' => 'lib/a/b/c.rb')

Set `GLOBIGNORE` as a colon-separated list of patterns to be removed from glob matches.

## History

### Commands

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>history</code></td><td>Show history</td></tr><tr class="even"><td><code>shopt -s histverify</code></td><td>Don’t execute expanded result immediately</td></tr></tbody></table>

### Expansions

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>!$</code></td><td>Expand last parameter of most recent command</td></tr><tr class="even"><td><code>!*</code></td><td>Expand all parameters of most recent command</td></tr><tr class="odd"><td><code>!-n</code></td><td>Expand <code>n</code>th most recent command</td></tr><tr class="even"><td><code>!n</code></td><td>Expand <code>n</code>th command in history</td></tr><tr class="odd"><td><code>!&lt;command&gt;</code></td><td>Expand most recent invocation of command <code>&lt;command&gt;</code></td></tr></tbody></table>

### Operations

<table style="width:99%;"><colgroup><col style="width: 22%" /><col style="width: 77%" /></colgroup><thead><tr class="header"><th>Code</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>!!</code></td><td>Execute last command again</td></tr><tr class="even"><td><code>!!:s/&lt;FROM&gt;/&lt;TO&gt;/</code></td><td>Replace first occurrence of <code>&lt;FROM&gt;</code> to <code>&lt;TO&gt;</code> in most recent command</td></tr><tr class="odd"><td><code>!!:gs/&lt;FROM&gt;/&lt;TO&gt;/</code></td><td>Replace all occurrences of <code>&lt;FROM&gt;</code> to <code>&lt;TO&gt;</code> in most recent command</td></tr><tr class="even"><td><code>!$:t</code></td><td>Expand only basename from last parameter of most recent command</td></tr><tr class="odd"><td><code>!$:h</code></td><td>Expand only directory from last parameter of most recent command</td></tr></tbody></table>

`!!` and `!$` can be replaced with any valid expansion.

### Slices

<table style="width:99%;"><colgroup><col style="width: 8%" /><col style="width: 91%" /></colgroup><thead><tr class="header"><th>Code</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>!!:n</code></td><td>Expand only <code>n</code>th token from most recent command (command is <code>0</code>; first argument is <code>1</code>)</td></tr><tr class="even"><td><code>!^</code></td><td>Expand first argument from most recent command</td></tr><tr class="odd"><td><code>!$</code></td><td>Expand last token from most recent command</td></tr><tr class="even"><td><code>!!:n-m</code></td><td>Expand range of tokens from most recent command</td></tr><tr class="odd"><td><code>!!:n-$</code></td><td>Expand <code>n</code>th token to last from most recent command</td></tr></tbody></table>

`!!` can be replaced with any valid expansion i.e. `!cat`, `!-2`, `!42`, etc.

## Miscellaneous

### Numeric calculations

    $((a + 200))      # Add 200 to $a

    $(($RANDOM%200))  # Random number 0..199

### Subshells

    (cd somedir; echo "I'm now in $PWD")
    pwd # still in first directory

### Redirection

    python hello.py > output.txt   # stdout to (file)
    python hello.py >> output.txt  # stdout to (file), append
    python hello.py 2> error.log   # stderr to (file)
    python hello.py 2>&1           # stderr to stdout
    python hello.py 2>/dev/null    # stderr to (null)
    python hello.py &>/dev/null    # stdout and stderr to (null)

    python hello.py < foo.txt      # feed foo.txt to stdin for python

### Inspecting commands

    command -V cd
    #=> "cd is a function/alias/whatever"

### Trap errors

    trap 'echo Error at about $LINENO' ERR

or

    traperr() {
      echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
    }

    set -o errtrace
    trap traperr ERR

### Case/switch

    case "$1" in
      start | up)
        vagrant up
        ;;

      *)
        echo "Usage: $0 {start|stop|ssh}"
        ;;
    esac

### Source relative

    source "${0%/*}/../share/foo.sh"

### printf

    printf "Hello %s, I'm %s" Sven Olga
    #=> "Hello Sven, I'm Olga

    printf "1 + 1 = %d" 2
    #=> "1 + 1 = 2"

    printf "This is how you print a float: %f" 2
    #=> "This is how you print a float: 2.000000"

### Directory of script

    DIR="${0%/*}"

### Getting options

    while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
      -V | --version )
        echo $version
        exit
        ;;
      -s | --string )
        shift; string=$1
        ;;
      -f | --flag )
        flag=1
        ;;
    esac; shift; done
    if [[ "$1" == '--' ]]; then shift; fi

### Heredoc

    cat <<END
    hello world
    END

### Reading input

    echo -n "Proceed? [y/n]: "
    read ans
    echo $ans

    read -n 1 ans    # Just one character

### Special variables

<table><thead><tr class="header"><th>Expression</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>$?</code></td><td>Exit status of last task</td></tr><tr class="even"><td><code>$!</code></td><td>PID of last background task</td></tr><tr class="odd"><td><code>$$</code></td><td>PID of shell</td></tr><tr class="even"><td><code>$0</code></td><td>Filename of the shell script</td></tr></tbody></table>

See [Special parameters](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables).

### Go to previous directory

    pwd # /home/user/foo
    cd bar/
    pwd # /home/user/foo/bar
    cd -
    pwd # /home/user/foo

### Check for command’s result

    if ping -c 1 google.com; then
      echo "It appears you have a working internet connection"
    fi

### Grep check

    if grep -q 'foo' ~/.bash_history; then
      echo "You appear to have typed 'foo' in the past"
    fi

## Also see

{: .-one-column}

- [Bash-hackers wiki](http://wiki.bash-hackers.org/) _(bash-hackers.org)_
- [Shell vars](http://wiki.bash-hackers.org/syntax/shellvars) _(bash-hackers.org)_
- [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_
- [ShellCheck](https://www.shellcheck.net/) _(shellcheck.net)_
