<?php
header("Access-Control-Allow-Origin:*");

function connection (){
    $host = "localhost";
    $usuario = "root";
    $password = "";
    $bd = "biblioteca";
    $puerto = 3306; // puerto predeterminado
    $mysql = new mysqli($host,$usuario,$password, $bd, $puerto);
    mysqli_report(MYSQLI_REPORT_OFF); // esepciones 
    return $mysql;

}

?>