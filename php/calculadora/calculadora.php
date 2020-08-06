<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <form class="caja" action="calculadora.php" method="get" >
    <h1>CALCULADORA PHP</h1>
        <input type="number" name="numero1" value=0 placeholder="ingrese un numero" min="0">
        <input type="number" name="numero2" value=0 placeholder="ingrese otro numero" min="0">
        <input type="submit" value="Respuesta">
        <output type="number" name="">
    </form>
</body>
</html>

<?php 
    if(isset($_GET['numero1']) && isset($_GET['numero2'])){
        $numero1=$_GET['numero1'];
        $numero2=$_GET['numero2'];
        if(is_numeric($numero1) && is_numeric($numero2)){
            echo  $numero1 + $numero2;
        }
        else{
            echo 0;
        }
    }
?>
