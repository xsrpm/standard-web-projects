<?php
    require_once "conexion.php";

    class TurnoModel{
        static public function create($datos){

            $stmt = Conexion::conectar()
            ->prepare("INSERT INTO turno(DesTurno,CodTurno,H_Inicio,H_Fin) VALUES (:DesTurno,:CodTurno,:H_Inicio,:H_Fin)");
            
            $stmt->bindParam(":DesTurno",$datos["DesTurno"],PDO::PARAM_STR);
            $stmt->bindParam(":CodTurno",$datos["CodTurno"],PDO::PARAM_STR);
            $stmt->bindParam(":H_Inicio",$datos["H_Inicio"],PDO::PARAM_STR);
            $stmt->bindParam(":H_Fin",$datos["H_Fin"],PDO::PARAM_STR);

            if($stmt->execute()){
                return "ok";
            }
            else{
                print_r($stmt->errorInfo());
            }

            $stmt = null;
        }

        static public function update($datos){
            $stmt = Conexion::conectar()
            ->prepare("UPDATE turno SET DesTurno=:DesTurno, CodTurno=:CodTurno, H_Inicio=:H_Inicio, H_Fin=:H_Fin WHERE IdTurno=:IdTurno");

            $stmt->bindParam(":IdTurno",$datos["IdTurno"],PDO::PARAM_INT);
            $stmt->bindParam(":DesTurno",$datos["DesTurno"],PDO::PARAM_STR);
            $stmt->bindParam(":CodTurno",$datos["CodTurno"],PDO::PARAM_STR);
            $stmt->bindParam(":H_Inicio",$datos["H_Inicio"],PDO::PARAM_STR);
            $stmt->bindParam(":H_Fin",$datos["H_Fin"],PDO::PARAM_STR);

            if($stmt->execute()){
                return "ok";
            }
            else{
                print_r($stmt->errorInfo());
            }
            
            $stmt = null;
        }

        static public function read(){
            $stmt = Conexion::conectar()->prepare("SELECT * FROM turno");
            $stmt->execute();
            return $stmt->fetchAll();
            $stmt=null;
        }

        static public function readForId($valor){
            $stmt = Conexion::conectar()->prepare("SELECT * FROM turno WHERE IdTurno = :IdTurno");
            $stmt->bindParam(":IdTurno",$valor,PDO::PARAM_INT);
            $stmt->execute();
            $arr = $stmt->fetch();
            return $arr;
            $stmt=null;
        }

        static public function deleteForId($valor){
            $stmt = Conexion::conectar()->prepare("DELETE FROM turno WHERE IdTurno = :IdTurno");
            $stmt->bindParam(":IdTurno",$valor,PDO::PARAM_INT);

            if($stmt->execute()){
                return "ok";
            }
            else{
                print_r($stmt->errorInfo());
            }
            
            $stmt = null;
        }
    }  
?>