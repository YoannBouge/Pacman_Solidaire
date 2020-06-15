<?php
   echo("coucou");
    $result = $pdo->exec("INSERT INTO partie (iduser, score, association)   values ( ".$_session['user']['id'].", ".$_request['score'].", ".$_SESSION['association'].");");
    $_SESSION['lastparty'] = array($_SESSION['user']['id'], $_request['score'], $_SESSION['association']);

    if($result){
       echo "data inserted";
    }

     ?>   