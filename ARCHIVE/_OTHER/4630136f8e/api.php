<?php
// located at:  http://another.tld/auth.php

$api_callback = $_REQUEST["callback"];

if ($_COOKIE["token_1"] == "abcd1234" && $_GET["token_2"] == "efgh5678") {
   $msg = "Yes, your API call was successful!";
}
else {
   $msg = "API call not authorized.";
}

?>

// this is a JSON-P style response from the API
<?=$api_callback?>({"msg": "<?=$msg?>"});