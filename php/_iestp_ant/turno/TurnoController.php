<?php

require_once "TurnoModel.php";

class TurnoController{

    static public function register($arr){
        $respuesta = TurnoModel::create($arr);
        return $respuesta;
    }

    static public function modify($arr){
        $respuesta = TurnoModel::update($arr);
        return $respuesta;
    }

    static public function remove($id){
        $respuesta = TurnoModel::deleteForId($id);
        return $respuesta;
    }

    static public function list(){
        $respuesta = TurnoModel::read();
        return $respuesta;
    }

    static public function listForId($id){
        $respuesta = TurnoModel::readForId($id);
        return $respuesta;
    }
}

?>