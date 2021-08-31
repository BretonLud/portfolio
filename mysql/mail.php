<?php

class Mail {

    function newMail(){

        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $objet = $_POST["objet"];
        
        /*Si les champs prenom et mail ne sont pas vides et si les donnees ont
        *bien la forme attendue...*/
        if (!empty($name)
            && strlen($name) <= 50
            && !empty($objet)
            && strlen($objet) <= 100
            && !empty($message)
            && !empty($email)
            && filter_var($email, FILTER_VALIDATE_EMAIL)){

            try{
                $to = "Bretonludovic40@gmail.com"; // Change this email to your //
                $subject = "$objet:  $name";
                $body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $objet\n\nMessage: $message";
                $header = "From: $email";
                $header .= "Reply-To: $email";	
                mail($to, $objet, $body, $header);         
            }
            catch(PDOException $e){
                echo 'Erreur : '. $e->getMessage();
            }
        }
    }
}