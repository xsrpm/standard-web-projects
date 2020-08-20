<?php
     //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos
	$mysqli = new mysqli("localhost","nov06ist","33Fr5U1jHpmV","nov06ist_IESTPCSR_BD"); 
	
	if(mysqli_connect_errno()){
		echo 'Conexion Fallida : ', mysqli_connect_error();
		exit();
	}
?>