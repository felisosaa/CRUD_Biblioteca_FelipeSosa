<?php

require_once '../modelo/modelo.php';

$funcion = $_GET['funcion'];

switch ($funcion) {
    case "crear":
      crearLibro();
    break;
    case "eliminar":
     eliminarLibro();
    break;
    case "modificar":
        modificarLibro();
    break;
    case "obtener":
        obtenerLibro();
    break;
    case "xfecha":
        xfecha();
    break;
    case "xprecio":
        xprecio();
    break;
}

function crearLibro(){
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->agregarLibro($nombre, $fecha, $precio);
    echo json_encode($resultado);
 }

 function modificarLibro(){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->modificarLibro($id, $nombre, $fecha, $precio);
    echo json_encode($resultado);
}
function eliminarLibro(){
    $id = $_POST['id'];
    $resultado = (new libro())->eliminarLibro($id);
    echo json_encode($resultado);

}
function obtenerLibro(){
    $resultado = (new libro())->obtenerLibro();   
    echo json_encode($resultado);
}
function xfecha(){
    $resultado = (new libro())->xfecha();   
    echo json_encode($resultado);
}
function xprecio(){
    $resultado = (new libro())->xprecio();   
    echo json_encode($resultado);
}
?>