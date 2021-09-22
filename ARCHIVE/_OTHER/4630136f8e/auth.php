<?php
// located at:  http://another.tld/auth.php

$token_1 = "abcd1234";
$token_2 = "efgh5678";

$auth_callback = $_REQUEST["callback"];

setcookie("token_1",$token_1);

?>

// in JS, document.domain is not settable or spoofable so it's 
// reliable to protect a cross-domain JSON-P call

if (document.domain == "something.tld") { 
   <?=$auth_callback?>({"token_2": "<?=$token_2?>"});
}