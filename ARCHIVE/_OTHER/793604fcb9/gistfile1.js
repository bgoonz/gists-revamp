	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
	<script src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
	<script src='/examples/gravatar-party-list/js/jquery.wufooapi.js'></script>
	<script src='/examples/gravatar-party-list/js/md5.js'></script>
	
	<script id="attendeeTemplate" type="text/x-jquery-tmpl">
	    <li>
			<img src="http://www.gravatar.com/avatar/${MD5(Field3)}" alt="" />
			<h4>${Field1} ${Field2}</h4>
			<a href="http://twitter.com/${Field6}">@${Field6}</a>
		</li>
	</script>
	
	<script>
		function processEntries(data) {
			$.each(data.Entries, function(entriesIndex, entriesObject) {
				if (entriesObject.Field3 != "") {
					$("#attendeeTemplate").tmpl(entriesObject).appendTo("#people ul");  
				}
			});
		};

		$.wufooAPI.getEntries({
			"callback"   : processEntries,
			"formHash"   : "z7p0p1",
			"getterPath" : "../gravatar-party-list/"
		});
	</script>