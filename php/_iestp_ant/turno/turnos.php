<?php
    require_once "TurnoController.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<h1>Turnos</h1>
<?php if( isset($_GET["alert"] ) ) :  ?>
    <div class="alert alert-success alert-dismissible fade show">
        <?php if( $_GET["alert"] == "insert" ) : ?>
        <strong>Registro exitoso!.</strong>
        <?php elseif( $_GET["alert"] == "update") : ?>
        <strong>Actualización exitosa!.</strong>
        <?php elseif( $_GET["alert"] == "delete") : ?>
        <strong>Eliminación exitosa!.</strong>   
        <?php endif ?>
    </div>
    <script>
        setTimeout(function(){
            $('.alert').alert('close');
            window.location="turnos.php";
        },2000);
    </script>
<?php endif ?>
<a id="nuevo" type="button" href="turno.php" class="btn btn-primary">Nuevo</a>
<div class="grid">
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Descripcion</th>
                <th>Codigo</th>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $turnos = TurnoController::list();
            ?>
            <?php foreach ($turnos as $key => $value): ?>
            <tr>
               
                <td><?= $value["IdTurno"] ?></td>
                <td><?= $value["DesTurno"] ?></td>
                <td><?= $value["CodTurno"] ?></td>
                <td><?= $value["H_Inicio"] ?></td>
                <td><?= $value["H_Fin"] ?></td>
                <td>
                    <div class="btn-group">     
                        <form method="post">
                            <a href="turno.php?id=<?= $value["IdTurno"] ?>" class="btn btn-warning">Editar</a>
                            <input type="hidden" name="id" value="<?= $value["IdTurno"] ?>">
                            <button class="btn btn-danger" type="submit">Eliminar</button>
                        </form>
                        
                    </div>
                </td>
                </tr>
            <?php endforeach; ?>
            <?php
                if(isset($_POST['id'])){
                    $respuesta = TurnoController::remove($_POST['id']);
                    if($respuesta == "ok"){
                        echo '<script>
                        if( window.history.replaceState ){
                            window.history.replaceState(null, null, window.location.href);
    
                        }
                        window.location="turnos.php?alert=delete";
                        </script>';
                    }
                }
            ?>
        </tbody>
    </table>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>