Converting md files to html w/highlighting 0a) Create a root directory to pull in all the repos 0b) Recursively clone or pull each repo $&gt; git clone | git pull on the existing repos 0c) Create a TOC index.html file for the root folder $&gt; echo ’

’ &gt;&gt; index.html $&gt; echo ’

’ &gt;&gt; index.html $&gt; ls &gt;&gt; temp.html $&gt; sed -n ‘/./s/[($1)](<($1)>)/p’ temp.html &gt;&gt; index.html $&gt; echo ’

’ &gt;&gt; index.html $&gt; rm temp.html

1.  Recursively convert each md file to html using pandoc: <span class="math inline">$&gt; find . -name "\*.md" | while read i; do pandoc -f markdown -t html "$</span>i" -o "${i%.\*}.html"; done

2.  Change all internal file urls from pointing to _.md links and instead point to the local_ .html file
    1.  recursively run this sed command (programatically replace FILENAME) sed -n -i.bak ‘/href="./s/.md/.html/’ FILENAME.html
    2.  alternatively, run the following command instead (programatically replace FILENAME) sed -e ‘/href="./s/.md/.html/’ FILENAME.html &gt; FILENAME.html.tmp && mv FILENAME.html.tmp FILENAME.html
3.  Add code highlighting to all pages with highlight.js library using the following:
    1.  Download highlight js and add to assets folder
    2.  Add
        to each .html file (via temp file) if it doesn’t already exist $&gt; touch temp.html $&gt; echo ’
        ’ &gt;&gt; temp.html $&gt; echo ’
        ’ &gt;&gt; temp.html $&gt; cat FILENAME.html &gt;&gt; temp.html $&gt; cat temp.html &gt; FILENAME.html $&gt; echo ’
        ’ &gt;&gt; FILENAME.html $&gt; rm temp.html
4.  Recursively delete all _.md files <span class="math inline">$&gt; find . -name "\*.md" | while read i; do pandoc -f markdown -t html "$</span>i" -o "${i%._}.html"; done

5.  Fire up a simple static server to serve these files:
    1.  use python:
        1.  cd /path/to/files
        2.  python -m SimpleHTTPServer \[port\]
    2.  use Node:
        1.  install http-server: npm install http-server -g
        2.  cd /path/to/files
        3.  http-server -p \[port\] ==&gt; default_port=8080

\*\*\*\*\* EXTRAS: 1) From each file, extract ‘Goals’, ‘Exercises’, and ‘Resources’ if they exist \*\*\* Write a Ruby script to split out the Goals/Exercises/Resources sections \*\*\* Use File.open to work on the file: http://www.tutorialspoint.com/ruby/ruby\_input\_output.htm \*\*\* Use “string”.include?(other_string) to break up sections on

## headers http://www.ruby-doc.org/core-2.1.2/String.html\#method-i-include-3F \*\*\* Insert

….

around each of those sections 3) Label the new divs according to the section .. eg.

…

    a) 'Goals' is the first <h2> in the document
    b) 'Exercises' is the last or 2nd-to-last <h2> in the document
    c) 'Resources' is the last <h2> in the document

1.  Change the page layout and move these sections in such a way as to improve page navigation. Add the following to custom.css:
    1.  \#goals {…} styles/layout
    2.  \#exercises {…} styles/layout
    3.  \#resources {…} styles/layout
2.  Add any necessary JQuery animation effects to these elements \*\*\* maybe use the jQuery velocity.js library
3.  Add any other CSS styles to the page as deemed necessary
4.  Add hotkeys for the website - see: \*\*\* http://www.hanselman.com/blog/TheWebIsTheNewTerminalAreYouUsingTheWebsKeyboardShortcutsAndHotkeys.aspx
