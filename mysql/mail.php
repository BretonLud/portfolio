<?php

class Mail {

    function newMail(){

        $name = trim(stripslashes(htmlspecialchars($_POST["name"])));
        $email = trim(stripslashes(htmlspecialchars($_POST["email"])));
        $message = $_POST["message"];
        $objet = trim(stripslashes(htmlspecialchars($_POST["objet"])));

        /*Si les champs prenom et mail ne sont pas vides et si les donnees ont
        *bien la forme attendue...*/
        if (!empty($name)
            && strlen($name) <= 50
            && !empty($objet)
            && strlen($objet) <= 100
            && !empty($message)
            && !empty($email)
            && filter_var($email, FILTER_VALIDATE_EMAIL)) {

            if (preg_match('/<\/?(.|\s|\S)*?>/', $objet) == false && preg_match('/<\/?(.|\s|\S)*?>/', $message) == false
                && preg_match('/<\/?(.|\s|\S)*?>/', $name) == false) {


                $to = "Bretonludovic40@gmail.com"; // Change this email to your //
                $subject = "$objet:  $name";
                $body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $objet\n\nMessage: $message";
                $header = "From: portfolio2.bretonludovic@hotmail.fr". "\r\n" .
                    "Reply-To: $email" ;
                if(mail($to, $subject, $body, $header)) {
                    $tab = ['Response' => 'success', 'Message' => 'Votre mail a été envoyé'];
                } else {
                    $tab = ['Response' => 'err', 'Message' => 'Le mail n\'a pas été envoyé'];
                }
            } else {
                $tab = ['Response' => 'err', 'Message' => 'Les balises ne sont pas autorisées'];
            }
        } else {
            $tab = ['Response' => 'err', 'Message' => 'Merci de remplir les champs'];
        }
        echo json_encode($tab);
    }
}