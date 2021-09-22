use Apache2::SubProcess();

$r = shift();

print "Content-type: text/html\n\n";

my($in, $out, $err) = $r->spawn_proc_prog("myprog");

while (<$out>) {
	print $_;   # works fine
}
