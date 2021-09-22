<!-- here's the PHP'ish way of making inline decisions while constructing HTML markup -->

<select name="foobar">
   <option value="bam" <?=($foobar==="bam"?"selected":"")?>>Bam</option>
   <option value="baz" <?=($foobar==="baz"?"selected":"")?>>Baz</option>
</select>

<input type="radio" name="foobar" value="bam" <?=($foobar==="bam"?"checked":"")?>> Bam
<input type="radio" name="foobar" value="baz" <?=($foobar==="baz"?"checked":"")?>> Baz