<?php
    require_once "TurnoController.php";

    if(isset($_GET["id"])){
        $arr = TurnoController::listForId($_GET["id"]);
    }

    if(isset($_POST["IdTurno"])){
        if(isset($_GET["id"])){
            $respuesta = TurnoController::modify($_POST);
        }
        else{
            $respuesta = TurnoController::register($_POST);
        }

        if($respuesta =="ok"){
            if(isset($_GET["id"]))
                header("Location: turnos.php?alert=update"); 
            else
                header("Location: turnos.php?alert=insert");
        }  
    }
?>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome!</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
<section>
<h1>Turno</h1>
<form method="post">
    <input type="hidden" id="IdTurno" name="IdTurno" value="<?php if(isset($_GET["id"])) echo $arr["IdTurno"] ?>">
    <label for="DesTurno">Descripcion</label>
    <input type="text" id="DesTurno" name="DesTurno" class="form-control" placeholder="Descripción" value="<?php if(isset($_GET['id'])) echo $arr['DesTurno'] ?>"/>
    <label for="CodTurno">Codigo</label>
    <input type="text" id="CodTurno" name="CodTurno" class="form-control"  placeholder="Codigo" value="<?php if(isset($_GET['id'])) echo $arr['CodTurno'] ?>" /> 
    <label for="H_Inicio">Hora Inicial</label>
    <input type="time" id="H_Inicio" name="H_Inicio" class="form-control"  placeholder="Hora Inicial" value="<?php if(isset($_GET['id'])) echo $arr['H_Inicio'] ?>" /> 
    <label for="H_Fin">Hora Final</label>
    <input type="time" id="H_Fin" name="H_Fin" class="form-control"  placeholder="Hora Final" value="<?php if(isset($_GET['id'])) echo $arr['H_Fin'] ?>" /> 
    <input type="submit" value="Registrar" class="btn btn-success">
    <a href="turnos.php" class="btn btn-secondary">Cancelar</a>
</form>
</section>
</body>
</html>

