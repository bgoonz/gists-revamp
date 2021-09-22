/*! LAB.js v1.0.3 (c) Kyle Simpson MIT License */
/*  INCLUDE THE MINIFIED LAB.js CODE HERE */


$LAB
.script('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js')
.wait(function(){
	var scripts = document.getElementsByTagName("script"), 
	    src, i, len,
	    acct = "UA-XXXXX-X", 
	    pageTracker
	;
	try {
		for (i=0, len=scripts.length; i<len; i++) {
			if (scripts[i] && scripts[i].src && 
				(src = scripts[i].src.match(/auto-ga\.js(?:\?[^#]*)?#(?:(?:.*?&)*?)acct=([^&]+)/i)) && 
				src[1]) 
			{
				acct = src[1];
				break;
			}
		}
	} catch (err) {}
	pageTracker = _gat._getTracker(acct);
	pageTracker._trackPageview();
});
