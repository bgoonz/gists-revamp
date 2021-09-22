<!-- this illustrates the same problem but not in relation to forms. specifically,
the problem revolves around how to cleanly make conditional inclusion of small 
snippets of markup inside other bigger markup templates. -->


<a href="<?=$bam?>" <?=isExternalLink($bam)?"target=_blank":""?>>Bam</a>
<a href="<?=$baz?>" <?=isExternalLink($baz)?"target=_blank":""?>>Baz</a>
