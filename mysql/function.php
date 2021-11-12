<?php 

class contact {

// function validation des données
    function valid_donnees(string $donnees){
        $donnees = trim($donnees);
        $donnees = stripslashes($donnees);
        $donnees = htmlspecialchars($donnees);
        return $donnees;
    }

// Vérification que ça soit pas vide et que ça respecte les données demandées. 
    function startempty(string $name, string $email, string $message){
        if (!empty($name)
        && strlen($name) <= 50
        && !empty($objet)
        && strlen($objet) <= 100
        && !empty($message)
        && !empty($email)
        && filter_var($email, FILTER_VALIDATE_EMAIL));
    }

/*Si les champs prenom et mail ne sont pas vides et si les donnees ont
     *bien la forme attendue...*/

}