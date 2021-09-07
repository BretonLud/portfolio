<?php 

require './mysql/contact.php';
require './mysql/mail.php';

// récupération des données pour envoyer le mail et enregistrer dans la base donnée.
if (isset($_POST['formcontact'])){

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
	$objet = $_POST["objet"];
	$contact = (new Contact)->newContact($name, $email, $message, $objet);
	//Contact::add(new Contact($name, $email, $message, $objet));
	$mail = (new Mail())->newMail($name, $email, $message, $objet);    	
}  
    
?>

<?php require './templates/header.php' ?>

<!-- Présentation -->
<section class="section_presentation reveal hero" id="presentation">
	<div class="presentation hero-text" >	
		<div>	
			<h2 class="reveal-1">Breton Ludovic</h2>
		</div>
		<div>
			<h1 class="reveal-2"></h1>
		</div>	
			<div class="typed-text">Développeur web et web mobile</div>				
	</div>
	<div class="identite reveal-3">
		<img src="./css/images/id.webp" class="img" alt="photo face">
	</div>		
</section>

<!-- Mes Compétences -->

<section class="skills reveal" id="skill">	
	<h1>Mes compétences</h1>
	<div class="skill reveal-1">	
		<div class="element reveal-2">
			<p>Front-end</p>
			<div class="front reveal-3">
				<div class="logo_Front-end">
					<img src="./css/images/html.png" alt="logo html">
					<img class="logo_CSS" src="./css/images/js.png" alt="logo js">
				</div>
				<div>
					<img src="./css/images/css3.png" alt="logo css">
				</div>
			</div>
		</div>
		<div class="element reveal-2">
			<p>Back-end</p>
			<div class="front reveal-3">
				<div class="logo_Front-end">
					<img src="./css/images/php.png" alt="logo php">
				</div>
				<div>
					<img src="./css/images/mysql.png" alt="logo mysql">
				</div>
			</div>
		</div>
		<div class="element reveal-2">
			<p>Logiciels</p>
			<div class="front reveal-3">
				<div class="logo_Front-end">
					<img src="./css/images/wordpress.png" alt="logo wordpress">
				</div>
				<div>
					<img src="./css/images/vsc.png" alt="logo visual studio code">
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mes projets -->

<section class="projects reveal" id="projects">
	<div>
		<h1>Mes projets</h1>
		<div class="project">
			<div class="box reveal-2">
				<div>
					<img src="./css/images/fricoot.png" alt="image projet 1">
				</div>
				<div class="box_Bot">
					<p>
						Développement au sein d'une équipe d'un questionnaire façon kahoot qui n'a pas abouti.
					</p>					
				</div>
				<input type="button" class="button" id="projet1" value="En savoir plus">					
			</div>
			<div class="box reveal-2">
				<div>
					<img src="./css/images/portfolio.jpg" alt="image projet 2">
				</div>
				<div class="box_Bot">
					<p>
						Développement de mon portfolio afin de faire mes premiers pas dans les projets et avoir de la visibilitée.
					</p>					
				</div>
				<input type="button" class="button" id="projet2" value="En savoir plus">
			</div>
			<!--<div class="box" id="projet3">
				<p>test</p>
			</div>-->
		</div>
	</div>
</section>
<section>
	<div id="modals"  class="modals">
		<div  id="modal1" class="modal">
			<div class="first_Modal_Top">
				<div class="first_Modal_Text">
				 <h2>Fricoot</h2>
					<p>Notre formulaire a été fait en se basant sur kahoot pour la partie designe.
					Nous avons mis via du js la possibilitée d’ajouter des questions.  
					Nous stockions le titre, les questions et les réponses via php et mysql.
					Le nom du titre sert ensuite au joueur à retrouver le questionnaire qui correspond.</p>
					<a href="https://github.com/BretonLud/Fricoot" target=_blank><input type="button" class="button" value="Repertory Github"></input> </a>
				</div>
				<div>
					<img src="./css/images/fri_Questionnaire.png" alt="image questionnaire">
				</div>
			</div>				
			<div class="first_Modal_Bot">
				<div class="first_Modal_Div">
					<img  src="./css/images/fri_Php.png" alt="image php">
				</div>
				<div class="first_Modal_Button">
					<input type="button" class="close" value="Retour">
				</div>
			</div>
		</div>
	</div>
	<div id="modals1"  class="modals">
		<div  id="modal2" class="modal">
			<div class="first_Modal_Top">
				<div class="first_Modal_Text">
					<a href="https://github.com/BretonLud/portfolio" target=_blank><h2>Portfolio</h2></a>
					<p>Comme projet nous devions faire un portfolio. 
						Nous avions la possibilité d'utiliser des templates mais ici ce n'est pas le cas.<br>
						Les fonctions sur le portfolio ont été faites à la main sauf le 'typed.js'.<br>
						Une base de données a été créée pour sauvegarde les mails envoyés.
					</p>
					<a href="https://github.com/BretonLud/portfolio" target=_blank><input type="button" class="button" value="Repertory Github"></input> </a>
				</div>
				<div>
					<img src="./css/images/competence.png" alt="image portfolio">
				</div>
			</div>				
			<div class="first_Modal_Bot">
				<div class="first_Modal_Div">
					<img  src="./css/images/mailPHP.png" alt="image php">
				</div>
				<div class="first_Modal_Button">
					<input type="button" class="close" value="Retour">
				</div>
			</div>
		</div>
	</div>
	<div id="modals2"  class="modals">
		<div>
			<div  id="modal3" class="modal">
				<span class="close">&times;</span>
				<p>test3</p>	
			</div>
		</div>
	</div>
</section>

<!-- Contact -->

<section id="contact" class="contact reveal">
	<h1>Contact</h1>		
		<form class="form" method="post" action="index.php#contact">
			<div class="error">
			<?php
			// affiche le message d'erreur

				if(isset($_GET['reg_err']))
				{
					$err = htmlspecialchars($_GET['reg_err']);

					switch($err)
					{
						case 'success':
						?>	
						<div class="success">							
							<p>Mail envoyé !<p>
						</div>
						<?php
						break;

						case 'fail':
						?>							
						<div class="err">							
							<p>Mail non envoyé !<p>
						</div>						
						<?php
					}
				}
			?>
			</div>
			<div>		
				<input type='text' id='name' name='name' class="input reveal-1" placeholder='Votre nom' required pattern="^[A-Za-z \']+$" maxlength="50">		
			</div>
			<div>
				<input type='email' id='email' name='email' class="input reveal-2" placeholder='Votre adresse mail' required pattern='^[A-Za-z]+@{1}[A-Za-z]+\.{1}[A-Za-Z]{2,}$' maxlength="50">			
			</div>
			<div>
				<input type='text' id='objet' name='objet' class="input reveal-3" placeholder='La raison du contact' required pattern='^[A-Za-z]+@{1}[A-Za-z]+\.{1}[A-Za-Z]{2,}$' maxlength="100">			
			</div>
			<div>
				<textarea id="message" class="reveal-4" name="message" placeholder="Veuillez écrire ici votre message, 2000 caractères maximum" maxlength="2000" required></textarea>
			</div>
			<div id="submit">
				<input type="submit" value="Envoyer" class="button" name="formcontact">
			</div>
		</form>	
</section>


<?php require './templates/footer.php' ?>