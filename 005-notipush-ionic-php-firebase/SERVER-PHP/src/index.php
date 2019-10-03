<?php
namespace MyApp;
require dirname(__DIR__) . '/vendor/autoload.php';

/**
 * Clase encargada de recibir los datos desde IONIC
 * mediante un notificación PUSH
 */
//GUARDAR TOKEN EN BASE DE DATOS

//lee el body de la petición
$postdata = file_get_contents("php://input");

$contents = utf8_encode($postdata);

//pasa un objeto json a un objeto PHP
$results = json_decode($contents);


//ejemplo de funcionamiento
$call = new funcionaVani($results->token, "Head", $result->contenido);
