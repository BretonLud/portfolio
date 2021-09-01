<?php
require 'connexion.php';


    // on récupére les valeurs.
class Contact {

    function newContact(){
        
        function valid_donnees($donnees){
            $donnees = trim($donnees);
            $donnees = stripslashes($donnees);
            $donnees = htmlspecialchars($donnees);
            return $donnees;
        }
        
        $name = valid_donnees($_POST["name"]);
        $email = valid_donnees($_POST["email"]);
        $message = valid_donnees($_POST["message"]);
        $objet = valid_donnees($_POST["objet"]);

        /*Si les champs prenom, mail, message et objet ne sont pas vides et si les donnees ont bien la forme attendue...*/
        if (!empty($name)
            && strlen($name) <= 50
            && !empty($objet)
            && strlen($objet) <= 100
            && !empty($message)
            && !empty($email)
            && filter_var($email, FILTER_VALIDATE_EMAIL)){
        
            try{
                //On se connecte à la BDD
                $dbh = (new Connexion())->conect();
                $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                //On insère les données reçues
                $sth = $dbh->prepare("INSERT INTO contact(nom, email, message, objet)
                    VALUES(:name, :email, :message, :objet)");
                $sth->bindParam(':name',$name);
                $sth->bindParam(':email',$email);
                $sth->bindParam(':message',$message);
                $sth->bindParam(':objet', $objet);            
                $sth->execute();               
            }
            catch(PDOException $e){
                echo 'Erreur : '.$e->getMessage();
            }
        }
    }
}