<?php
require 'connexion.php';


    // on récupére les valeurs.
class Contact {

    public function newContact(){
    
        $name = trim(stripslashes(htmlspecialchars($_POST["name"])));
        $email = trim(stripslashes(htmlspecialchars($_POST["email"])));
        $message = trim(stripslashes(htmlspecialchars($_POST["message"])));
        $objet = trim(stripslashes(htmlspecialchars($_POST["objet"])));

        /*Si les champs prenom, mail, message et objet ne sont pas vides et si les donnees ont bien la forme attendue...*/
        if (!empty($name)
            && strlen($name) <= 50
            && !empty($objet)
            && strlen($objet) <= 100
            && !empty($message)
            && !empty($email)
            && filter_var($email, FILTER_VALIDATE_EMAIL)){
        
            
                //On se connecte à la BDD
                $dbh = (new Connexion)->connect();
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
    }
}