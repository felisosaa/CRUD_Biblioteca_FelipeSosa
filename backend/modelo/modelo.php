<?php
require_once  '../conexion/conexion.php';

class libro {

    function obtenerLibro(){
        $connection = connection();
        $sql = "SELECT * FROM libro";
        $respuesta = $connection->query($sql);
        $libro = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libro;
    }

    public function agregarLibro($nombre, $fecha, $precio){
        $connection = connection();
        $sql = "INSERT INTO libro VALUES(0, '$nombre', '$fecha', '$precio')";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function eliminarLibro($id){
        $connection = connection();
        $sql = "DELETE FROM libro WHERE (id ='$id');";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function modificarLibro($nombre, $fecha, $precio){
        $sql = "UPDATE libro SET nombre ='$nombre',fecha = '$fecha' precio = $precio";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;

}
}