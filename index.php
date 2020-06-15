<?php session_start(); ?>

<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>PACMAN</title>
	<script type="text/javascript" src="js/carousel.js" async></script>
	<link rel="stylesheet" href="css/paccss.css">
	<link rel="stylesheet" href="css/home&info.css">
	<link rel="stylesheet" href="css/form.css">
	<link rel="stylesheet" href="css/borderAnimation.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">


</head>
<body>
	<?php 
		function get_pdo(): PDO {
			return new PDO('mysql:host=localhost;port=3308;dbname=pacman','root', '',[
				PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, 
				PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC, 
				PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES UTF8"
			]);
		}
		$pdo = get_pdo();

	

			include 'C_home.php'; // Acceuil (Titre)
			include 'C_information.php'; // Section d'information, presentation. 
			include 'C_chose.php'; // Section de choix de l'association. 
			include 'C_form.php' ; // Section formulaire (pseudo, nom, prenom, region)
			include 'C_pacman.php' ; // Section de jeu
			include 'C_leadboard.php'; // Section Leadboard (Tableau des scores)
			include 'C_don.php' ; // Section des dons
			include 'C_thanks.php'; // Section remerciements

	?>
		

	<script type="text/javascript" src="js/modernizr.min.js"></script> 
	<script type="text/javascript" src="js/jquery-3.5.0.min.js"></script> 
	<script type="text/javascript" src="js/popper.min.js" ></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/form.js"></script>
	<script type="text/javascript" src="js/pacjs.js"></script>

	<?php
		if(isset($_SESSION['association']))
		{
			switch ($_SESSION['association']){
				case 'assoc1' :
					break;
				case 'assoc2' :
					break;
				case 'assoc3' :
					break;

			}

		}
			
			// <script></script>
	?>
</body>

</html>



