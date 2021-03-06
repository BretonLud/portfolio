<?php 

include('identifiant.php');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Class qui permet la connexion à la base de donnée

Class Connexion { 
    
    const HOST = DB_HOST;
    const DBNA = DB_NAME;
    const USER = DB_USER;
    const PASW = DB_PWD; 
 
  protected $dbh;
 
  public function connect(){
     
   return $dbh = new PDO('mysql:host='.self::HOST.'; dbname='.self::DBNA,self::USER,self::PASW);
     }
  
}