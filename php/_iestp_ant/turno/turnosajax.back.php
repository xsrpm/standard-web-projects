<?php
    require_once "TurnoController.php";
    
    $respuesta = "";
    
    //list
    if(isset($_GET["list"])){
        $respuesta= TurnoController::list();
    }
    //listForId
    if(isset($_GET["listForId"])){
        $respuesta = TurnoController::listForId($_POST["id"]);
    }
    //Register
    if(isset($_GET["register"])){
        $respuesta = TurnoController::register($_POST);
    }
    //Modify
    if(isset($_GET["modify"])){
        $respuesta = TurnoController::modify($_POST);
    }
    //Remove
    if(isset($_GET["remove"])){
        $respuesta = TurnoController::remove($_POST['id']);
    }

    print json_encode($respuesta, JSON_UNESCAPED_UNICODE);
?>