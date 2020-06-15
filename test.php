<?php
echo('coucou');
if(isset($_POST['association'])) {
    $_SESSION["association"]= $_REQUEST["association"];
}


var_dump($_SESSION['association']); 
?>
