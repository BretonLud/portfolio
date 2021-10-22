<?php

require './contact.php';
require './mail.php';

// récupération des données pour envoyer le mail et enregistrer dans la base donnée.

if (isset($_POST['name']) && !empty('name') && isset($_POST['email']) && !empty('email') &&
    isset($_POST['message']) && !empty('message') && isset($_POST['objet']) && !empty('objet')){

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $objet = $_POST["objet"];
    $contact = (new Contact($name, $email, $message, $objet))->newContact($name, $email, $message, $objet);
    $mail = (new Mail())->newMail($name, $email, $message, $objet);
}