/*
The spirit of what I'm asking is, are there any valid cases where
an identifier (not a reserved keyword) can be followed by a newline
and then by a regex literal? Near as I can tell, the / on the next
line always seems to be interpreted as a /-division and not the
start of a regex literal, but I am trying to verify that there are
no other ASI situations where the regex is valid.

for instance:
return
/foo/ig;

or:
throw
/foo/ig;

in both those cases, the ASI kicks in, and the regex literal would
be considered valid. Are there any other cases where the thing
on the first line is an identifier and not a reserved keyword, and
yet the ASI applies to separate the two and make the regex valid?

*/


something
/aregexliteral/ig;

