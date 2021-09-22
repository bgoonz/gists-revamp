var $options = $("<option></option>");
$options.add($("<option></option>"));
$options.add($("<option></option>"));

console.log($options.length); // 1  -- wtf?
console.log($options.html()); // <option></option>  -- again, wtf?

// the documentation for jQuery#add seems to indicate this should work but it doesn't. Any ideas?
