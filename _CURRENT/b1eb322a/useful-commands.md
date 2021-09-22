# Remove empty files, empty folders and git folders(USE WITH CAUTION):

    find . -empty -type f -print -delete
    find . -empty -type d -print -delete

    find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

---

# Recursivley Remove Folders by Name

    find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +


    find . -name '.vscode' -type d -prune -exec rm -rf '{}' +

# Remove duplicate lines from a text file

> You can use this shell command:

    uniq -u input.txt output.txt

# grab all links from website

    lynx -dump https://distrokid.com/hyperfollow/mihirbeg/getting-there | awk '/http/{print $2}' > links2.txt

---

REMOVE DUPLICATE LINES:

3.)Find and delete all empty files()===&gt;

## find . -empty -type f -print -delete

4.)Recursive-unzip:()===&gt;

find . -name "\*.zip" | while read filename; do unzip -o -d “`dirname "$filename"`” “$filename”; done;

find . -name "\*desktop.ini" -type f -print -delete

find . -name "\*.zip" -type f -print -delete

find . -name "\*.gz" -type f -print -delete

find . -name "\*.tgz" -type f -print -delete —

add extension to every file in folder

for f in \* ; do mv “<span class="math inline">$f" "$</span>f.html” done

find . -type f -exec mv ‘{}’ ‘{}’.html ;

for f in \* ; do mv “<span class="math inline">$f" "$</span>f.css” done — delete lines contaning specific string:

sed -i ‘/normalizerEmpty/d’ ./js-in-one-page.html

sed -i ‘/.git/d’ ./index.html 2

find . -type f -a ( -name “_.html" -o -name "_.js” -o -name “_.css" -o -name "_.md” ) -a -exec sed -i ‘/Copyright/d’ ‘{}’ + sed -i ‘/Copyright/d’ ./\*.html

find . -type f -a ( -name “_.html" -o -name "_.js” -o -name “_.css" -o -name "_.md” -o -name "\*.php" ) -a -exec sed -i ‘/MIT/d’ ‘{}’ + —

Remove lines of file contaning a string

sudo sed -i ‘/.git/d’ ./index.html sudo sed -i ‘/assets/d’ ./index.html — To find a pattern and remove the line containing the pattern below command can be used

<table><thead><tr class="header"><th>find . -name "*" -type f | xargs sed -i -e ‘/Mirrored from/d’</th></tr></thead><tbody><tr class="odd"><td>print out the path of every file recursivley</td></tr></tbody></table>

ls -R ‘./’ | awk ’ /:$/&&f{s=<span class="math inline">$0;f=0} /:$</span>/&&!f{sub(/:$/,"“);s=$0;f=1;next} NF&&f{ print s”/"$0 }’&gt;listing.md

sed -n -e ’/

’

echo "

directory

"

echo "" echo ’

’ echo ’

’

echo ’

’

echo ""

\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\# continue with the HTML stuff:

echo ""

echo ""

echo "

- [“,$1,” ](%22%22$1%22%22)
- "};

  \# {print " ",<span class="math inline">$1,"&lt;/a&gt;&lt;/li&gt;&nbsp;"}' \\ $</span>listing

  echo ""

  echo "

"

echo "

"

echo "

"

}

cmd <span class="math inline">*listing* −  − *sort* = *extension* &gt; &gt;</span>html

sudo sed -i ‘/.png/d’ ./index.html sudo sed -i ‘/.jpeg/d’ ./index.html sudo sed -i ‘/.gif/d’ ./index.html sudo sed -i ‘/.go/d’ ./index.html sudo sed -i ‘/.vue/d’ ./index.html sed -i "" “s/.git/d” index.html sed -i "" “s/.git/d” ./index.html sed -i "" “s/.git/d” ‘./index.html’ sed -i “./” “s/.git/d” ‘index.html’ sed -i “./” “s/.git/d” index.html sed -i “./” “s/.git/d” index.html sed -i “./” “s/.git/d” ./index.html sed ‘/.git/d’ ./index.html sed ‘/.git/d’ ./index.html sed -i ‘/.git/d’ ./index.html sudo sed -i ‘/node_modules/d’ ./index.html

sudo sed -i ‘/.git/d’ ./index.html sudo sed -i ‘/images/d’ ./index.html sudo sed -i ‘/font/d’ ./index.html sudo sed -i ‘/fonts/d’ ./index.html sudo sed -i ‘/.TTF/d’ ./index.html sudo sed -i ‘/.git/d’ ./index.html sudo sed -i ‘/.js/d’ ./index.html sudo sed -i ‘/.php/d’ ./index.html sudo sed -i ‘/.css/d’ ./index.html —–

      #!/bin/bash
    #Author: Raman Nv

    link="#insert url here#"
    #links were a set of strings with just the index of the video as the variable

    num=3
    #first video was numbered 3 - weird.

    ext=".mp4"

    while [ $num -le 66 ]
    do
          wget $link$num$ext -P ~/Downloads/
          num=$(($num+1))
    done

---

print a dummy text file in each folder

for x in “./”/\*/; do (cd “<span class="math inline">$x" files=(\*) printf '%s\\n' "$</span>{files\[@\]}” &gt; deleteme.txt ) done

---

download all links of given file type

wget -r -A.pdf https://overapi.com/git

<table style="width:8%;"><colgroup><col style="width: 8%" /></colgroup><tbody><tr class="odd"><td>for file in *. do</td></tr><tr class="even"><td>sudo sed -i ‘/Copyright/d’ ./*.html</td></tr><tr class="odd"><td>done</td></tr><tr class="even"><td>sudo sed -i ‘/Support/d’ ./<em>.html sudo sed -i ‘/MIT/d’ ./</em>.html sudo sed -i ‘/License/d’ ./<em>.html sudo sed -i ‘/Contributors/d’ ./</em>.html sudo sed -i ‘/Copyright/d’ ./<em>.html sudo sed -i ‘/copyright/d’ ./</em>.html sudo sed -i ‘/Copyright © /d’ ./*.html</td></tr><tr class="odd"><td>sudo sed -i ‘/.json/d’ ./index.html</td></tr><tr class="even"><td>sudo sed -i ‘/.gif/d’ ./index.html</td></tr><tr class="odd"><td>sudo sed -i ‘/.png/d’ ./index.html</td></tr><tr class="even"><td>sudo sed -i ‘/.css/d’ ./index.html</td></tr><tr class="odd"><td>sudo sed -i ‘/.js/d’ ./index.html</td></tr><tr class="even"><td>sudo sed -i ‘/.php/d’ ./index.html</td></tr><tr class="odd"><td>sudo sed -i ‘/.md/d’ ./index.html</td></tr></tbody></table>

Remove any lines not contaning string text or blah

sudo sed -i ‘/.html/!d’ scrap.md

sudo sed -i ‘/CODE-MIRROR/d’ ./resources.html

sudo sed -i ‘/.html/d’ ./index.html

Add text to the first line of every file of a certain extension in a given folder.

for f in \*.txt; do printf ‘%s’ 0a ‘TEXT YOU WISH TO APPEND TO BEGINNING OF EVERY FILE’ . x | ex “$f”; done

for f in \*.html; do printf ‘%s’ 0a ’&lt;!DOCTYPE html&gt;

;’ . x | ex “$f”; done

——————————————————How to add to end of file:——————————————————

echo "

" | tee -a \*.html

for filename in _mesibo_; do echo mv "<span class="math inline">$filename\\" \\"$</span>{filename//mesibo/zumzi}"; done &gt; rename.md

for filename in _mesibo_; do mv “<span class="math inline">$filename" "$</span>{filename//mesibo/zumzi}”; done

for d in \*/ ; do echo “$d” done

---

Name

Email

Submit

---

Input Output error

wsl.exe –shutdown then Get-Service LxssManager | Restart-Service

---

Replace the string source with target in all files in the current directory and all sub-directories:

find . -type f -exec rename ‘s/source/target/’ {} ; Replace the string source with target in all directories in the current directory and all sub-directories:

find . -type d -exec rename ‘s/source/target/’ {} ;

---

I use this one-liner to remove invalid characters in subtitle files:

for f in _.srt; do nf=<span class="math inline">$(echo "$</span>f" |sed -e ‘s/\[^A-Za-z0-9.-\]/./g;s/..././g;s/.././g’); test “<span class="math inline">$f" != "$</span>nf” && mv “<span class="math inline">$f" "$</span>nf” && echo “$nf”; done Only process_ .srt files( \* could be used in place of \*.srt to process every file) Removes all other characters except for letters A-Za-z, numbers 0-9, periods “.”, and dash’s “-” Removes possible double or triple periods Checks to see if the file name needs changing If true, it renames the file with the mv command, then outputs the changes it made with the echo command It works to normalize directory names of movies:

for f in _/; do nf=<span class="math inline">$(echo "$</span>f" |sed -e ‘s/\[^A-Za-z0-9.\]/./g’ -e ‘s/..././g’ -e ‘s/.././g’ -e ’s/._<span class="math inline">$//'); test "$</span>f" != “<span class="math inline">$nf" && mv "$</span>f” “<span class="math inline">$nf" && echo "$</span>nf”; done

---

To remove any number of trailing spaces from file names you can use rename (prename) :

rename ’s/ _$//’_

---

This shell script sanitizes a directory recursively, to make files portable between Linux/Windows and FAT/NTFS/exFAT. It removes control characters, /:\*?"&lt;&gt;| and some reserved Windows names like COM0.

sanitize() { shopt -s extglob;

filename=$(basename “<span class="math inline">$1") directory=$</span>(dirname”$1")

filename_clean=<span class="math inline">$(echo "$</span>filename" | sed -e ‘s/\[\\/:\*?"&lt;&gt;|01-1F7F\]//g’ -e ‘s/^(nul|prn|con|lpt\[0-9\]|com\[0-9\]|aux)(.|<span class="math inline">$\\)//i' -e 's/^\\.\*$</span>//’ -e ‘s/^$/NONAME/’)

if (test “<span class="math inline">$filename" != "$</span>filename_clean”) then mv -v “<span class="math inline">$1" "$</span>directory/$filename_clean” fi }

export -f sanitize

sanitize_dir() { find “$1” -depth -exec bash -c ‘sanitize “$0”’ {} ; }

sanitize_dir ‘/path/to/somewhere’
