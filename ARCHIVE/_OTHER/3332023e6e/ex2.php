<!-- here's another PHP'ish approach using parameterized function calling -->

<?php
function selected($val,$test){ return ($val===$test?"selected":""); }
function checked($val,$test){ return ($val===$test?"checked":""); }
?>

<select name="foobar">
   <option value="bam" <?=selected($foobar,"bam")?>>Bam</option>
   <option value="baz" <?=selected($foobar,"baz")?>>Baz</option>
</select>

<input type="radio" name="foobar" value="bam" <?=checked($foobar,"bam")?>> Bam
<input type="radio" name="foobar" value="baz" <?=checked($foobar,"baz")?>> Baz