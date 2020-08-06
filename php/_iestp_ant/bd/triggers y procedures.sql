
DELIMITER $$
CREATE DEFINER=`nov06ist`@`localhost` FUNCTION `f_siguiente_correlativo_persona`() RETURNS int(11)
BEGIN
declare max int;
select MAX(idPersona) INTO max from persona;
return max+1;
END$$
DELIMITER ;

CREATE TRIGGER `clase_per_wusuario_no_update` BEFORE UPDATE ON `clase_per`
 FOR EACH ROW IF (NEW.wusuario <> OLD.wusuario) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT ='TRIGGER clase_per_wusuario_no_update: campo wusuario no puede actualizarse';
	END IF

CREATE TRIGGER `turno_insert` BEFORE INSERT ON `turno`
 FOR EACH ROW SET NEW.IdTurno = f_siguiente_correlativo_turno()
 
 
DELIMITER $$
CREATE DEFINER=`nov06ist`@`localhost` PROCEDURE `sp_crearAlumno`(IN `W_Usuario` CHAR(15), IN `IdDistrito` INT, IN `APaterno` VARCHAR(20), IN `AMaterno` VARCHAR(20), IN `Nombres` VARCHAR(35), IN `Direccion` VARCHAR(50), IN `Tele_fijo1` VARCHAR(10), IN `Sexo` CHAR(1), IN `EstCivil` CHAR(1), IN `NroDoc` VARCHAR(11), IN `Tele_Celu` VARCHAR(10), IN `email` VARCHAR(80), IN `f_nac` DATE, IN `lugar_nac` VARCHAR(30), IN `foto` VARCHAR(50), IN `condalu` CHAR(3), IN `conding` CHAR(3), IN `nrocarnet` VARCHAR(20))
    MODIFIES SQL DATA
BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION 
BEGIN
	SELECT "SQLEXCEPTION" AS MESSAGE;
    ROLLBACK;
END;

START TRANSACTION;

SET @id = f_siguiente_correlativo_persona();

INSERT INTO persona (idPersona,TipoP,W_Usuario,IdClase) VALUES (@id,"2",W_Usuario,2);

INSERT INTO p_natural (IdDocu,IdDistrito,APaterno,AMaterno,Nombres,Direccion,Tele_fijo1,Sexo,EstCivil,NroDoc,IdPersona,Tele_Celu,email,f_nac,lugar_nac) VALUES (1,IdDistrito,APaterno,AMaterno,Nombres,Direccion,Tele_fijo1,Sexo,EstCivil,NroDoc,@id,Tele_Celu,email,f_nac,lugar_nac);

INSERT INTO alumno(CodAlu,w_usuario,f_reg,foto,condalu,idalumno,anio,conding,nrocarnet) VALUES (NroDoc,W_Usuario,NOW(),foto,condalu,@id,YEAR(NOW()),conding,nrocarnet);

COMMIT;

END$$
DELIMITER ;
 
 