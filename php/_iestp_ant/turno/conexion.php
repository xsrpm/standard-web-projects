<?php
    class Conexion{
        static public function conectar(){
           #"nombre del servidor; nombre de base de datos", "nombre de usuario", "contraseña"
            try{
                $conection=new PDO("mysql:host=localhost;dbname=nov06ist_IESTPCSR_BD","root","");
                return $conection;
            }
            catch(Exception $e){
                die('Connection error: ' . $e->getMessage());
            }
        }
    }
?>