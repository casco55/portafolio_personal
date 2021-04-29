<?php
function contacto(){
    require ('conexion.php'); 

    date_default_timezone_set('America/Santiago');
    
    $nombre = strip_tags($_POST['nombre']);
    $fono = strip_tags($_POST['fono']);
    $email = strip_tags($_POST['email']);
    $comentario = strip_tags($_POST['comentario']);
    $registrar_contacto = "INSERT INTO contactos (nombre, fono, mail, comentario,fecha,hora) VALUES ('$nombre', '$fono', '$email','$comentario',curdate(),curtime())";
        $resultado = mysqli_query($conexion,$registrar_contacto)
        or die("2");
        echo "1";

}
contacto();
?>