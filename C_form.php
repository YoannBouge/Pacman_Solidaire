<?php 


function getUserIpAddr(){
  if(!empty($_SERVER['HTTP_CLIENT_IP'])){
      //ip from share internet
      var_dump($_SERVER['HTTP_CLIENT_IP']);
      $ip = $_SERVER['HTTP_CLIENT_IP'];
  }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
      //ip pass from proxy
      var_dump($_SERVER['HTTP_X_FORWARDED_FOR']);
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }else{
      var_dump($_SERVER['REMOTE_ADDR']);
      $ip = $_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}

//var_dump($_SESSION['user']);
if(isset($_REQUEST['login']) && $_REQUEST['login'] != ""){
    var_dump($_SESSION['association']);
    $login = $_REQUEST['login'];
    $ip = utf8_encode(getUserIpAddr());
    $region = $_REQUEST['region'];
    var_dump($login, $ip);
    $result = $pdo->query("SELECT * FROM joueur WHERE pseudo = '".$login."' AND ip = '".$ip."';");
    if ($result->rowCount() ==0){
        //$result = $pdo->exec("INSERT INTO joueur(login, nom, prenom, region)   values ( ".$login.", ".$region.")");
        $stmt = $pdo->prepare("INSERT INTO  joueur(pseudo, ip, region)   values (:pseudo, :ip, :region)");
        $stmt->execute([":pseudo"=>$login, ":ip"=>$ip, ":region"=>$region]);
        //var_dump( $result);
        $res = $pdo->query("SELECT * FROM `joueur` WHERE pseudo = '".$login."' AND ip = '".$ip."';");
        $_SESSION['user']= $res->fetch();
    }else{
        $_SESSION['user']= $result->fetch();
    }
    
    var_dump($result->fetch());
    //header('Location: index.php#jeux');
 
  // <script type="text/javascript">
  //       window.location.replace('index.php#jeux');
  //   </script>

}else if(!isset($_SESSION['user'])){

    echo '  <div class="row screen" id="form">
              <div class="left col"></div>

              <div class="col-8 formulaire">
                <div class="form-titles"> 
                  <span class="form-title1"><span style="font-size:5vw;">F</span>AITES LE <span class="yellow-text">MEILLEURS SCORE</span></span><br>
                  <span class="form-title2">PACMAN <span class="yellow-text">POUR VOTRE ASSOCIATION</span></span>
                </div>
                <form class="form-inscr" action="index.php?page=form&uc=inscription" method="GET">
                    <!-- <div class="form-group">
                        <input type="text" class="form-control" name="login" id="login" placeholder="pseudo">
                    </div> -->
                    <div class="form-champs">
                        <label class="field a-field a-field_a">
                            <input class="field__input a-field__input" name="login" id="login" placeholder="pseudo" required>
                            <span class="a-field__label-wrap">
                              <span class="a-field__label">PSEUDO</span>
                            </span>
                        </label>
                        <label class="field a-field a-field_a" style="margin-top:1vh;">
                            <input class="field__input a-field__input" name="region" id="region" placeholder="region" required>
                            <span class="a-field__label-wrap">
                              <span class="a-field__label">REGION</span>
                            </span>
                        </label>    
                    </div>
                    <!--<div class="autocomplete" style="width:300px;">
                        <input id="region" type="text" name="region" placeholder="region">
                    </div> -->
                    <br>
                    <button type="submit" class="form-button">VALIDER<img class="img-button" src="css/img/ghost_pacman.png"></button>
                </form>
              </div>

              <div class="right col"></div>  
            </div>';

}?>




