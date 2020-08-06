-- Versión del servidor: 5.7.29-MySQL

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iestp_csr`
--
CREATE DATABASE IF NOT EXISTS `nov06ist_IESTPCSR_BD` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nov06ist_IESTPCSR_BD`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `CodAlu` varchar(11) NOT NULL,
  `w_usuario` char(15) DEFAULT NULL,
  `f_reg` date DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `condalu` char(3) DEFAULT NULL,
  `idalumno` int(11) DEFAULT NULL,
  `idpadre` int(11) DEFAULT NULL,
  `idmadre` int(11) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `conding` char(3) DEFAULT NULL,
  `nrocarnet` varchar(20) DEFAULT NULL COMMENT 'nro carnet control interno',
  PRIMARY KEY (`CodAlu`),
  KEY `idalumno` (`idalumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`CodAlu`, `w_usuario`, `f_reg`, `foto`, `condalu`, `idalumno`, `idpadre`, `idmadre`, `anio`, `conding`, `nrocarnet`) VALUES
('03C025D', 'ECALDERON', '2020-01-16', 'N:\\03C025D.JPG', 'ACT', 16413, NULL, NULL, NULL, NULL, NULL),
('03ET086D', 'ECALDERON', '2020-01-15', 'N:\\03ET086D.JPG', 'ACT', 16383, NULL, NULL, NULL, NULL, NULL),
('12QI469D', 'ECALDERON', '2020-01-16', 'N:\\12QI469D.JPG', 'ACT', 16391, NULL, NULL, 2012, NULL, '0001 2013 0003 0164'),
('14CI006D', 'ECALDERON', '2020-01-16', 'N:\\14CI006D.JPG', 'ACT', 16393, NULL, NULL, 2014, 'ECP', '0001 2015 0001 0985'),
('15CT388V', 'VHTAPIA', '2020-01-13', 'N:\\15CT388V.JPG', 'ACT', 16364, NULL, NULL, 2015, 'TEX', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
CREATE TABLE IF NOT EXISTS `ciclo` (
  `IdCiclo` int(11) NOT NULL,
  `NomCiclo` varchar(15) DEFAULT NULL,
  `CodCiclo` char(3) DEFAULT NULL,
  PRIMARY KEY (`IdCiclo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciclo`
--

INSERT INTO `ciclo` (`IdCiclo`, `NomCiclo`, `CodCiclo`) VALUES
(1, 'PRIMERO', 'I'),
(2, 'SEGUNDO', 'II'),
(3, 'TERCERO', 'III'),
(4, 'CUARTO', 'IV'),
(5, 'QUINTO', 'V'),
(6, 'SEXTO', 'VI'),
(7, 'VERANO', 'VER'),
(8, 'ACTUALIZACION', 'ACT');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase_per`
--

DROP TABLE IF EXISTS `clase_per`;
CREATE TABLE IF NOT EXISTS `clase_per` (
  `IdClase` int(11) NOT NULL,
  `CodClase` char(3) DEFAULT NULL,
  `DesClase` varchar(15) DEFAULT NULL,
  `Estado` tinyint(4) DEFAULT NULL,
  `freg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'current date',
  `wusuario` varchar(15) COMMENT 'current user',
  PRIMARY KEY (`IdClase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clase_per`
--

INSERT INTO `clase_per` (`IdClase`, `CodClase`, `DesClase`, `Estado`, `freg`, `wusuario`) VALUES
(1, 'CLI', 'CLIENTE', 1, '2014-11-12', 'DBA'),
(2, 'ALU', 'ALUMNO', 1, '2014-11-12', 'DBA'),
(3, 'APO', 'APODERADO', 1, '2014-11-12', 'DBA'),
(4, 'TRA', 'TRABAJADOR', 1, '2014-11-12', 'DBA'),
(5, 'PRO', 'PROVEEDOR', 1, '2014-11-12', 'DBA'),
(6, 'POS', 'POSTULANTE', 1, '2014-11-12', 'DBA'),
(7, 'OTR', 'OTROS', 1, '2018-05-09', 'DBA');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

DROP TABLE IF EXISTS `especialidad`;
CREATE TABLE IF NOT EXISTS `especialidad` (
  `IdEspecialidad` int(11) NOT NULL,
  `NomEspecialidad` varchar(30) DEFAULT NULL,
  `ResolCrea` varchar(30) DEFAULT NULL,
  `idsubarea` int(11) DEFAULT NULL,
  `fresolcrea` date DEFAULT NULL,
  `resolaut` varchar(30) DEFAULT NULL,
  `fresolaut` date DEFAULT NULL,
  `MencionTitulo` varchar(80) DEFAULT NULL COMMENT 'Mención del Titulo Profesional de la Especialidad',
  `ResolReva` varchar(30) DEFAULT NULL,
  `fresolreva` date DEFAULT NULL,
  PRIMARY KEY (`IdEspecialidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`IdEspecialidad`, `NomEspecialidad`, `ResolCrea`, `idsubarea`, `fresolcrea`, `resolaut`, `fresolaut`, `MencionTitulo`, `ResolReva`, `fresolreva`) VALUES
(1, 'COMPUTACIÓN E INFORMÁTICA', 'R.D. Nº 442-1994-ED', 11, '1994-01-01', 'R.D. Nº 0422-94-ED', '1994-05-06', 'Profesional Técnico en Computación e Informática', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(2, 'CONTABILIDAD', 'R.D. Nº 193-1983-ED', 14, '1983-03-09', 'R.D. Nº 193-83-ED', '1983-03-15', 'Profesional Técnico en Contabilidad', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(3, 'QUÍMICA INDUSTRIAL', 'R.D. Nº 2438-1983-ED', 16, '1983-01-01', 'R.D. Nº 2438-83-ED', '1984-08-29', 'Profesional Técnico en Química Industrial', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(4, 'ENFERMERÍA TÉCNICA', 'R.D. Nº 389-1990-ED', 26, '1990-01-01', 'R.D. Nº 389-90-ED', '1990-02-26', 'Profesional Técnico en Enfermería Técnica', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(5, 'ELECTRICIDAD', NULL, 0, NULL, NULL, NULL, 'Profesional Técnico en Electricidad', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(6, 'ELECTRÓNICA', NULL, 0, NULL, NULL, NULL, 'Profesional Técnico en Electrónica', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(7, 'MECÁNICA AUTOMOTRIZ', 'R.D. Nº 193-1983-ED', 28, '1983-03-09', 'R.D. Nº 193-83-ED', '1983-03-15', 'Profesional Técnico en Mecánica Automotriz', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(8, 'MECÁNICA DE PRODUCCIÓN', 'R.D. Nº 193-1983-ED', 29, '1983-03-09', 'R.D. Nº 193-83-ED', '1983-03-15', 'Profesional Técnico en Mecánica de Producción', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(9, 'MODELERIA Y FUNDICIÓN', NULL, 0, NULL, NULL, NULL, 'Profesional Técnico en Modelería y Fundición', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(10, 'METALURGIA', NULL, 0, NULL, NULL, NULL, 'Profesional Técnico en Metalurgia', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(11, 'SECRETARIADO COMPUTARIZADO', NULL, 0, NULL, NULL, NULL, 'Profesional Técnico en Secretariado Computarizado', NULL, NULL),
(12, 'BACHILLERATO', NULL, 0, NULL, NULL, NULL, 'Bachiller de Educación Secundaria', NULL, NULL),
(13, 'ELECTROTÉCNIA INDUSTRIAL', 'R.D. Nº 126-2007-ED', 19, NULL, 'R.D. Nº 126-2007-ED', '2007-03-05', 'Profesional Técnico en Electrotécnia Industrial', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(14, 'ELECTRÓNICA INDUSTRIAL', 'R.D. Nº 126-2007-ED', 20, NULL, 'R.D. Nº 126-2007-ED', '2007-03-05', 'Profesional Técnico en Electrónica Industrial', 'R.D. Nº 059-2005-ED', '2005-02-24'),
(15, ' NINGUNO', NULL, 0, NULL, NULL, NULL, ' Ninguno', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

DROP TABLE IF EXISTS `matricula`;
CREATE TABLE IF NOT EXISTS `matricula` (
  `IdMatricula` int(11) NOT NULL,
  `IdTipoMatri` int(11) DEFAULT NULL,
  `IdTurno` int(11) DEFAULT NULL,
  `IdCiclo` int(11) DEFAULT NULL,
  `IdSemestre` int(11) DEFAULT NULL,
  `F_reg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'current date',
  `w_usuario` char(15) COMMENT 'current user',
  `CodAlu` varchar(11) DEFAULT NULL,
  `IdEspecialidad` int(11) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `sistema` char(1) DEFAULT NULL,
  `observa` varchar(150) DEFAULT NULL,
  `nrorecibo` varchar(11) DEFAULT NULL,
  `H_Reg` time COMMENT 'current time',
  `Print_Bol` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`IdMatricula`),
  KEY `CodAlu` (`CodAlu`),
  KEY `IdCiclo` (`IdCiclo`),
  KEY `IdTurno` (`IdTurno`),
  KEY `IdSemestre` (`IdSemestre`),
  KEY `IdEspecialidad` (`IdEspecialidad`),
  KEY `IdTipoMatri` (`IdTipoMatri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `matricula`
--

INSERT INTO `matricula` (`IdMatricula`, `IdTipoMatri`, `IdTurno`, `IdCiclo`, `IdSemestre`, `F_reg`, `w_usuario`, `CodAlu`, `IdEspecialidad`, `estado`, `sistema`, `observa`, `nrorecibo`, `H_Reg`, `Print_Bol`) VALUES
(42414, 1, 2, 2, 64, '2014-11-20', 'vhtapia', '03C025D', 8, 1, 'M', NULL, '000-0000000', '13:43:32', 1),
(42436, 2, 1, 4, 64, '2014-12-30', 'Ecalderon', '12QI469D', 3, 1, 'M', NULL, '006-23663', '11:58:28', 1),
(42441, 1, 1, 5, 66, '2015-03-17', 'YZumaeta', '14CI006D', 8, 1, 'M', NULL, '006-025173', '09:52:43', 1),
(42468, 1, 2, 3, 66, '2015-03-27', 'YZumaeta', '03ET086D', 2, 1, 'M', NULL, '006-025602', '11:07:16', 0),
(42484, 1, 2, 5, 66, '2015-04-06', 'YZumaeta', '15CT388V', 3, 1, 'M', NULL, '006-00706', '10:18:55', 1),
(42511, 1, 1, 3, 66, '2015-04-08', 'LChauca', '03C025D', 2, 1, 'M', NULL, '006-0026112', '11:07:08', 1),
(42538, 1, 1, 1, 66, '2015-04-13', 'YZumaeta', '12QI469D', 7, 1, 'M', NULL, '006-026284', '11:33:35', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula_rep`
--

DROP TABLE IF EXISTS `matricula_rep`;
CREATE TABLE IF NOT EXISTS `matricula_rep` (
  `IdEspecialidad` int(11) NOT NULL,
  `IdCiclo` int(11) NOT NULL,
  `IdTurno` int(11) NOT NULL,
  `IdSemestre` int(11) NOT NULL,
  `IdUnidad` int(11) NOT NULL,
  `CodAlu` varchar(11) NOT NULL,
  `F_Matri` date NOT NULL,
  `Estado` char(1) NOT NULL,
  `F_reg` date NOT NULL,
  `W_Usuario` char(15) NOT NULL COMMENT 'current user',
  `nrorecibo` varchar(11) DEFAULT NULL,
  `Calificacion` int(11) DEFAULT NULL,
  `FReg_Cal` datetime DEFAULT NULL,
  `WUsuario_Cal` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`IdEspecialidad`,`IdCiclo`,`IdTurno`,`IdSemestre`,`IdUnidad`,`CodAlu`) USING BTREE,
  KEY `CodAlu` (`CodAlu`),
  KEY `IdUnidad` (`IdUnidad`),
  KEY `IdCiclo` (`IdCiclo`),
  KEY `IdEspecialidad` (`IdEspecialidad`),
  KEY `IdSemestre` (`IdSemestre`),
  KEY `IdTurno` (`IdTurno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `matricula_rep`
--

INSERT INTO `matricula_rep` (`IdEspecialidad`, `IdCiclo`, `IdTurno`, `IdSemestre`, `IdUnidad`, `CodAlu`, `F_Matri`, `Estado`, `F_reg`, `W_Usuario`, `nrorecibo`, `Calificacion`, `FReg_Cal`, `WUsuario_Cal`) VALUES
(2, 4, 2, 84, 205, '03C025D', '2019-08-12', '1', '2019-08-12', 'Ecalderon', '006-0061822', 15, '2019-12-19 00:00:00', 'AChero'),
(3, 2, 2, 84, 106, '12QI469D', '2019-08-14', '1', '2019-08-14', 'Ecalderon', '006-0062030', 13, '2019-12-18 00:00:00', 'CPereyra'),
(4, 2, 2, 84, 73, '14CI006D', '2019-09-05', '1', '2019-09-05', 'Ecalderon', '006-0063167', 0, '2019-12-18 00:00:00', 'GNavarro'),
(7, 4, 2, 84, 204, '15CT388V', '2019-07-08', '1', '2019-08-07', 'KAcosta', '006-0061741', 0, '2019-12-18 00:00:00', 'MGuarniz'),
(7, 6, 1, 84, 71, '12QI469D', '2019-02-09', '1', '2019-09-02', 'Ecalderon', '006-0062831', 13, '2019-12-18 00:00:00', 'MHidalgo'),
(8, 2, 1, 84, 91, '03ET086D', '2019-09-05', '1', '2019-09-05', 'Ecalderon', '006-0062959', 13, '2019-12-18 00:00:00', 'CPereyra'),
(8, 2, 2, 84, 224, '03C025D', '2019-08-26', '1', '2019-08-26', 'Ecalderon', '006-0062244', 1, '2019-12-18 00:00:00', 'CPereyra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulos`
--

DROP TABLE IF EXISTS `modulos`;
CREATE TABLE IF NOT EXISTS `modulos` (
  `IdModulo` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Tipo` char(1) DEFAULT NULL,
  `Nro` int(11) DEFAULT NULL,
  `Estado` char(1) DEFAULT NULL,
  `Observa` varchar(200) DEFAULT NULL,
  `W_Usuario` char(15) NOT NULL,
  `F_Reg` date NOT NULL,
  `morden` int(11) DEFAULT NULL,
  `UndCompe` varchar(1000) DEFAULT NULL COMMENT 'Unidad de competencias',
  `HoraPract` int(11) DEFAULT NULL COMMENT 'Horas de practicas',
  PRIMARY KEY (`IdModulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modulos`
--

INSERT INTO `modulos` (`IdModulo`, `Nombre`, `Tipo`, `Nro`, `Estado`, `Observa`, `W_Usuario`, `F_Reg`, `morden`, `UndCompe`, `HoraPract`) VALUES
(1, 'COMUNICACIÓN', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 1, NULL, NULL),
(2, 'MATEMÁTICA', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 2, NULL, NULL),
(3, 'SOCIEDAD Y ECONOMÍA', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 3, NULL, NULL),
(4, 'ECOLOGÍA Y DESARROLLO SOSTENIDO', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 4, NULL, NULL),
(5, 'ACTIVIDADES', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 5, NULL, NULL),
(6, 'INFORMÁTICA', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 6, NULL, NULL),
(7, 'IDIOMA EXTRANJERO', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 7, NULL, NULL),
(8, 'INVESTIGACIÓN TECNOLÓGICA', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 8, NULL, NULL),
(9, 'RELACIONES EN EL ENTORNO DEL TRABAJO', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 9, NULL, NULL),
(10, 'GESTION EMPRESARIAL', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 10, NULL, NULL),
(11, 'FORMACIÓN Y ORIENTACIÓN LABORAL', '1', 1, '1', NULL, 'EORTEGA', '2011-12-19', 11, NULL, NULL),
(12, 'OPERATIVIDAD Y SOPORTE DE LOS SISTEMAS INFORMÁTICOS', '2', 1, '1', NULL, 'EORTEGA', '2011-12-19', 1, NULL, NULL),
(13, 'GESTIÓN E IMPLEMENTACIÓN DE REDES DE COMPUTADORAS', '2', 2, '1', NULL, 'EORTEGA', '2011-12-19', 2, NULL, NULL),
(14, 'DISEÑO Y CONSTRUCCIÓN DE SOFTWARE', '2', 3, '1', NULL, 'DBA', '2008-02-20', 3, NULL, NULL),
(15, 'APLICACIONES WEB, DISEÑO GRÁFICO Y PRODUCTOS MULTIMEDIA', '2', 4, '1', NULL, 'DBA', '2008-02-20', 4, NULL, NULL),
(16, 'PROCESOS CONTABLES', '2', 1, '1', NULL, 'ECALDERON', '2016-08-01', 1, '- Analizar el funcionamiento global de las empresas a partir de la funcion especifica del area contable.x0dx0a- Efectuar el registro contable de las operaciones económicas y financieras en base a los documentos sustentatorios.x0dx0a- Elaborar la informacion contable relativa a un ciclo económico, aplicando la metodologia contable adecuada.x0dx0a- Analizar y aplicar las normas tributarias vigentes en la actividad económica de la organizacion.', 666),
(17, 'CONTABILIDAD PÚBLICA Y PRIVADA', '2', 2, '1', NULL, 'ECALDERON', '2016-08-01', 2, '- Analizar y registrar los costos de producción de acuerdo a los métodos y sustemas vigente.x0dx0a- Formular presupuestos para la elaboración de los productos.x0dx0a- Registrar operaciones contables de las diferentes formas societarias , actividades productivas y de servicios.x0dx0a- Analizar y aplicar las normas legaes vigentes y registrar las operaciones contables.x0dx0a', 918),
(18, 'ANÁLISIS FINANCIERO', '2', 3, '1', NULL, 'ECALDERON', '2016-08-01', 3, '- Preparar la información financiera necesaria de acuerdo al plan establecido.x0dx0a- Analizar los estados financieros aplicando técnicas y procedimientos establecidos.x0dx0a- Interpretar los resultados de los estados financieros segun estándares y parámetros.x0dx0a- Registrar las operaciones de las instituciones financieras de acuerdo al plan contable para instituciones financieras.x0dx0a- Aplicar procedimientos de auditoria interpretando documentos para el desarrollo del trabajo.', 846),
(19, 'ENSAYOS DE LABORATORIO', '2', 1, '1', NULL, 'ECALDERON', '2016-08-02', 1, '- Manipular adecuadamente los materiales, equipos e instrumentos de laboratorio bajo normas de buenas practicas.x0dx0a- Utilizar los métodos de ensayos químicos para determinar parámetros de calidad de las materias primas.x0dx0a- Aplicar los métodos de ensayos químicos por instrumentación para determinar parámetros de calidad de materias.x0dx0a', 720),
(20, 'PROCESOS QUÍMICOS INDUSTRIALES', '2', 2, '1', NULL, 'ECALDERON', '2016-08-02', 2, '- Establecer el programa de producción y su sistema de control aprovechando racionalmente los recursos.x0dx0a- describir el control de los sistemas auxiliares asociados al proceso productivo.x0dx0a- aplicar los procesos y operaciones básicas asociadas al proceso productivo para conocer la productividad.', 936),
(21, 'ASEGURAMIENTO DE LA CALIDAD', '2', 3, '1', NULL, 'ECALDERON', '2016-08-02', 3, '- Explicar el plan de calidad para la cadena productiva de un producto químico industrial.x0dx0a- Explicar las acciones de control de calidad relacionadas a sus funciones para asegurar la productividad.x0dx0a- Explicar las acciones relacionadas a sus funciones para el levantamiento de no conformidades.', 774),
(22, 'ATENCIÓN PRIMARIA EN SALUD', '2', 1, '1', NULL, 'ECALDERON', '2016-07-21', 1, '- Aplica Tecnicas de Primeros Auxilios y planes de contingencias en situacions de urgencia.x0dx0a- Realiza acciones de educacion para la salud en la comunidad de acuerdo a los lineamientos de politicas de salud.x0dx0a', 756),
(23, 'SERVICIOS TÉCNICOS DE ENFERMERÍA ASISTENCIAL', '2', 2, '1', NULL, 'ECALDERON', '2016-07-21', 2, '- Realiza acciones administrativas de su conocimiento para la atencion de salud del usuario.x0dx0a- Realiza acciones de educacion para la salud en la comunidad de acuerdo a los lineamientos de politicas de salud.x0dx0a- Organiza y realiza actividades preventivo promocionales basadas en los lineamientos de políticas de salud.x0dx0a- Realiza acciones de apoyo en la epidemiologia de las enfermedades en la población.', 828),
(24, 'SERVICIOS TÉCNICOS DE ENFERMERÍA ESPECIALIZADA', '2', 3, '1', NULL, 'ECALDERON', '2016-07-21', 3, '- Participa en la atención integral de salud materna de acuerdo a protocolos establecidos.x0dx0a- Participa en la planificación y organización de la atención de salud del niño y adolescente.x0dx0a- Organiza y realiza actividades asistenciales de enfermeria en el paciente de adulto mayor.x0dx0a- Asisten en la atención al usuario con discapacidad física.', 846),
(25, 'INSTALACION Y MANTENIMIENTO  DE SISTEMAS ELÉCTRICOS', '2', 1, '1', NULL, 'ECALDERON', '2016-08-01', 1, '- Levanta e interpreta planos y esquemas electricos y elaborar proyectos de instalaciones comerciales industriales.x0dx0a- Selecciona y utiliza con criterio tecnico materiales, herramientas, instrumentos y equipos para realizar el montaje.x0dx0a- instala y pone en servicio subestaciones y redes de baja y media tension.', 756),
(26, 'MANTENIMIENTO DE MÁQUINAS Y EQUIPOS ELÉCTRICOS', '2', 2, '1', NULL, 'ECALDERON', '2016-08-01', 2, '- Levanta e interpreta planos y esquemas de maquinas y equipos electricos.x0dx0a- Supervisa y realiza el mantenimiento programado de las máquinas y equipos eléctricos.x0dx0a- Aplica un protocolo de pruebas a las maquinas y equipos electricos.', 828),
(27, 'AUTOMATIZACIÓN DE SISTEMAS ELÉCTRICOS INDUSTRIALES', '2', 3, '1', NULL, 'ECALDERON', '2016-08-01', 3, '- Levanta e interpreta planos y esquemas de fuerza y control para circuitos de automatizacion industrial.x0dx0a- Diseñar programas de automatizacion electrica para aplicarlos en los controladores logicos programables.x0dx0a- Automatizar y controlar procesos electroneumaticos y electro hidraulicos. x0dx0a- hsdbfjdbj', 846),
(28, 'DISEÑO E INSTALACIÓN DE SISTEMAS ELÉCTRICO - ELECTRONICOS', '2', 1, '1', '', 'ECALDERON', '2017-05-24', 1, '- Interpreta planos de equipos y sistemas electrónicos-eléctricos.x0dx0a- Clasifica los materiales,herramientas, componentes y equipospara la instalación y mantenimiento dex0dx0a   sistemas electrónicos-eléctricos.x0dx0a- Supervisa el plan demantenimiento de equipos y sistemaselectrónicos-eléctricos.x0dx0a-Implementa el diseñoefectuando las pruebas necesariaspara su correcta operatividad.', 756),
(29, 'SISTEMAS DE POTENCIA Y AUTOMATIZACIÓN', '2', 2, '1', NULL, 'LCHAUCA', '2017-11-06', 2, '- Lee e interpreta planos y catálogos desistemas de control de potencia yautomatización.x0dx0a- Ejecuta programas de mantenimiento deequipos de potencia y automatización.x0dx0a- Supervisa el programa de mantenimientode equipos de potencia y automatizaciónx0dx0a  siguiendo un protocolo de pruebas.', 756),
(30, 'SISTEMAS DE CONTROL DE PROCESOS INDUSTRIALES Y COMUNICACIONES', '2', 3, '1', NULL, 'LCHAUCA', '2018-01-04', 3, 'Planificar, diseñar, ensamblar, programar, supervisar, controlar y realizar el mantenimiento de sistemas de control de procesos industriales y de comunicaciones.', NULL),
(31, 'MANTENIMIENTO DE LOS SISTEMAS DE SUSPENSIÓN, DIRECCIÓN Y FRENOS AUTOMOTRICES', '2', 1, '1', NULL, 'ECALDERON', '2018-05-25', 1, '-Diagnosticar y ejecutar el mantenimiento del sistema de suspension automotriz de acuerdo a especificaciones tecnicas.x0dx0a-Diagnosticar y ejecutar el mantenimiento del sistema de direccion automotriz de acuerdo a especificaciones tecnicas.x0dx0a-Diagnosticar y ejecutar el mantenimiento del sistema de frenos automotrices de acuerdo a especificaciones tecnicas.x0dx0a', 265),
(32, 'MANTENIMIENTO DEL SISTEMA DE TRANSMISIÓN DE VELOCIDAD Y FUERZA AUTOMOTRIZ', '2', 2, '1', NULL, 'ECALDERON', '2018-05-25', 2, '- Diagnosticar y ejecutar el mantenimiento  del mecanismo de embrague, de acuerdo a especificaciones técnicas. x0dx0a- Diagnosticar y ejecutar el mantenimiento de cajas de velocidades, teniendo en consideración especificaciones  técnicasx0dx0a- Diagnosticar y ejecutar el mantenimiento del mecanismo diferencial, de acuerdo a especificaciones  técnicas x0dx0ax0dx0a', 139),
(33, 'MANTENIMIENTO DEL SISTEMA ELÉCTRICO - ELECTRONICO AUTOMOTRIZ', '2', 3, '1', '', 'ECALDERON', '2018-05-25', 3, 'Realizar el diagnóstico y mantenimiento de los sistemas de carga y arranque ,Determina las averías relacionándolas con los parámetros establecidos.x0dx0aRealiza el mantenimiento de los componentes del sistema de carga y arranque,     según especificaciones técnicas. x0dx0aVerifica  el funcionamiento de los  componentes del  sistema  de carga y arranque, utilizando los instrumentos y equipos de diagnóstico.', 151),
(34, 'MANTENIMIENTO DE MOTORES DE COMBUSTIÓN INTERNA', '2', 4, '1', '', 'ECALDERON', '2018-05-25', 4, 'Diagnosticar y ejecutar  mantenimiento de los motores Ottox0dx0aMantenimiento de motores Diesel.x0dx0aEjecuta el proceso de mantenimiento del motor Otto y sus sistemas,utilizando herramientas, instrumentos, equipos y máquinas, según especificaciones técnicas.', 296),
(35, 'DISEÑO MECANICO', '2', 1, '1', NULL, 'ECALDERON', '2017-01-02', 1, '- Reconocer, seleccionar y utilizar adecuadamente los materiales utilizados en la fabricación de elementos mecánicos y maquinas.x0dx0a- Resolver problemas prácticos de habilitación de material y medir elementos mecánicos aplicando la tolerancia y ajuste de fabricación.x0dx0a- Elaborar e interpretar la documentación técnica del diseño de elementos mecánicos y máquinas.x0dx0dx0a', 158),
(36, 'TECNOLOGIA DE LA SOLDADURA', '2', 2, '1', NULL, 'ECALDERON', '2017-01-02', 2, '- Seleccionar los diferentes procesos y materiales de soldadura de acuerdo a normas técnicas.x0dx0a- Soldar mediante el proceso de soldadura blanda y oxigasx0dx0dx0a- Opera equipos de soldadura eléctrica con electrodos revestidos de forma manual, en chapas, perfiles y tubos de acero.x0dx0a', 107),
(37, 'MECANIZADO CON MÁQUINAS HERRAMIENTAS', '2', 3, '1', NULL, 'ECALDERON', '2017-01-02', 3, '- Interpretar documentación técnica al proceso de fabricación.x0dx0a- Fabricar elementos mecánicos con máquinas herramientas considerando normas técnicas de producción.x0dx0a- Efectuar el montaje de los componentes necesarios para la construcción de máquinas.x0dx0a', 290),
(38, 'MATRICERIA Y FUNDICIÓN', '2', 4, '1', NULL, 'ECALDERON', '2017-01-02', 4, '- Diseñar y construir modelos utilizando los equipos, maquinas, herramientas y materiales. x0dx0dx0a- Construye moldes de arena utilizando las técnicas adecuadas.x0dx0dx0a- Fundir materiales ferrosos y no ferrosos para la obtención de piezas mecánicas fundidas.x0dx0a', 151),
(39, 'MANTENIMIENTO MECÁNICO', '2', 5, '1', NULL, 'ECALDERON', '2017-01-02', 5, '- Analizar y aplicar las técnicas propias para el desarrollo de los procedimientos de mantenimiento mecánico eléctrico, utilizando los equipos, herramientas, materiales y medios requeridos.x0dx0a- x0dAnalizar e identificar las probables causas que originan averías o mal funcionamiento de un sistema mecánico y/o eléctrico.x0dx0dx0a- Interpretar y manejar documentación relacionada con el mantenimiento mecánico eléctrico.x0dx0a', 145),
(40, 'ECONOMÍA', '1', 1, '1', NULL, 'DBA', '2008-02-20', NULL, NULL, NULL),
(41, 'METODOLOGÍA DE LA INVESTIGACIÓN', '1', 1, '1', NULL, 'DBA', '2008-02-20', NULL, NULL, NULL),
(42, 'REALIDAD NACIONAL', '1', 1, '1', NULL, 'DBA', '2008-02-20', NULL, NULL, NULL),
(43, 'SUSPENSION Y DIRECCIÓN DE FRENOS', '2', 1, '1', NULL, 'DBA', '2008-02-20', 1, NULL, NULL),
(44, 'ELECTRICIDAD Y ELECTRÓNICA AUTOMOTRIZ', '2', 2, '1', NULL, 'DBA', '2008-02-20', 2, NULL, NULL),
(45, 'TRANSMISIÓN Y PROPULSIÓN', '2', 3, '1', NULL, 'DBA', '2008-02-20', 3, NULL, NULL),
(46, 'MOTORES DE COMBUSTION INTERNA', '2', 4, '1', NULL, 'DBA', '2008-02-20', 4, NULL, NULL),
(47, 'FORMACIÓN GENERAL', '1', 1, '1', NULL, 'DBA', '2008-02-20', NULL, NULL, NULL),
(48, 'TRANSFORMACIONES QUÍMICAS INDUSTRIALES', '2', 2, '1', NULL, 'DBA', '2009-02-12', 2, NULL, NULL),
(49, 'MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE', '1', NULL, '1', NULL, 'EORTEGA', '2011-12-19', 4, NULL, NULL),
(50, 'GESTIÓN DE SOPORTE TÉCNICO, SEGURIDAD Y TICS', '2', 1, '1', NULL, 'LCHAUCA', '2017-12-14', 1, '-Administrar, gestionar e implementar, el servicio de  mantenimiento y operativadad d elos recursos de hardware y software, redes de comunicación y los lineamientos y politicas de seguridad de la información, teniendo en cuenta los criterios y estándares vigentes.', 756),
(51, 'DESARROLLO DE SOFTWARE Y GESTIÓN DE BASE DE DATOS', '2', 2, '1', NULL, 'LCHAUCA', '2017-12-14', 2, '- Analizar, diseñar , desarrollar sistemas de información y administrar sistemas de gestión de base de datos de acuerdo a los requerimientos de la organización, considerando los criterios de seguridad en la transmisión y el almacenamiento de datos.', 828),
(52, 'GESTIÓN DE APLICACIONES PARA INTERNET Y PRODUCCIÓN MULTIMEDIA', '2', 3, '1', NULL, 'LCHAUCA', '2018-01-04', 3, '- Diseñar, desarrollar, administrar, gestionar e implementar productos multimedia y aplicaciones para internet, teniendo en cuenta los requerimientos del cliente.', 846),
(53, 'EXAMENES DE SUFICIENCIA', '2', 5, '1', NULL, 'ECALDERON', '2013-05-15', 5, NULL, NULL),
(54, 'SISTEMAS DE POTENCIA Y AUTOMATIZACIÓN', '2', 2, '1', NULL, 'ECALDERON', '2017-05-24', 2, '- Lee e interpreta planos y catálogos desistemas de control de potencia yautomatización.x0dx0a- Ejecuta programas de mantenimiento deequipos de potencia y automatización.x0dx0a- Supervisa el programa de mantenimientode equipos de potencia y automatizaciónx0dx0a  siguiendo un protocolo de pruebas.', 756),
(55, 'SISTEMAS DE POTENCIA Y AUTOMATIZACIÓN', '2', 2, '1', NULL, 'ECALDERON', '2017-05-24', 2, '- Lee e interpreta planos y catálogos desistemas de control de potencia yautomatización.x0dx0a- Ejecuta programas de mantenimiento deequipos de potencia y automatización.x0dx0a- Supervisa el programa de mantenimientode equipos de potencia y automatizaciónx0dx0a  siguiendo un protocolo de pruebas.', 756),
(56, 'SISTEMAS DE POTENCIA Y AUTOMATIZACIÓN', '2', 2, '1', NULL, 'ECALDERON', '2017-05-24', 2, '- Lee e interpreta planos y catálogos desistemas de control de potencia yautomatización.x0dx0a- Ejecuta programas de mantenimiento deequipos de potencia y automatización.x0dx0a- Efectúa el mantenimiento preventivo deacuerdo con el plan y los procedimientosestablecidos.x0dx0a', 756);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `idPersona` int(11) NOT NULL,
  `TipoP` char(1) DEFAULT NULL,
  `W_Usuario` char(15) COMMENT '(current user)',
  `F_reg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '(current date)',
  `IdClase` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPersona`),
  KEY `IdClase` (`IdClase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idPersona`, `TipoP`, `W_Usuario`, `F_reg`, `IdClase`) VALUES
(11668, '1', 'VHTAPIA', '2012-10-02', 1),
(11669, '1', 'VHTAPIA', '2012-10-02', 1),
(11670, '1', 'VHTAPIA', '2012-10-02', 1),
(12868, '1', 'VHTAPIA', '2014-12-02', 1),
(14252, '2', 'DGONZALES', '2016-06-13', 3),
(16328, '2', 'CCASTANEDA', '2019-05-08', 4),
(16335, '2', 'VHTAPIA', '2019-07-02', 4),
(16336, '2', 'CCASTANEDA', '2019-07-04', 4),
(16354, '2', 'CCASTANEDA', '2019-12-18', 4),
(16355, '2', 'CCASTANEDA', '2019-12-18', 4),
(16364, '2', 'DGONZALES', '2020-01-08', 2),
(16383, '2', 'DGONZALES', '2020-01-16', 2),
(16391, '2', 'DGONZALES', '2020-01-21', 2),
(16393, '2', 'DGONZALES', '2020-01-21', 2),
(16413, '2', 'DGONZALES', '2020-02-03', 2),
(16420, '2', 'DGONZALES', '2020-02-07', 1),
(16421, '2', 'DGONZALES', '2020-02-07', 1),
(16422, '2', 'DGONZALES', '2020-02-07', 1),
(16432, '2', 'DGONZALES', '2020-02-11', 1),
(16434, '2', 'DGONZALES', '2020-02-12', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planestudio_mod`
--

DROP TABLE IF EXISTS `planestudio_mod`;
CREATE TABLE IF NOT EXISTS `planestudio_mod` (
  `IdPlan` int(11) NOT NULL,
  `IdModulo` int(11) DEFAULT NULL,
  `IdUnidad` int(11) DEFAULT NULL,
  `IdEspecialidad` int(11) DEFAULT NULL,
  `IdCiclo` int(11) DEFAULT NULL,
  `Orden` int(11) DEFAULT NULL,
  `Vigencia` char(4) DEFAULT NULL,
  `Creditos` decimal(3,1) DEFAULT NULL,
  `Estado` char(1) DEFAULT NULL,
  `W_Usuario` char(15) NOT NULL,
  `F_Reg` date NOT NULL,
  PRIMARY KEY (`IdPlan`),
  KEY `IdUnidad` (`IdUnidad`),
  KEY `IdModulo` (`IdModulo`),
  KEY `IdEspecialidad` (`IdEspecialidad`),
  KEY `IdCiclo` (`IdCiclo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `planestudio_mod`
--

INSERT INTO `planestudio_mod` (`IdPlan`, `IdModulo`, `IdUnidad`, `IdEspecialidad`, `IdCiclo`, `Orden`, `Vigencia`, `Creditos`, `Estado`, `W_Usuario`, `F_Reg`) VALUES
(9, 16, 73, 2, 1, 3, '2009', NULL, '1', 'vhtapia', '2008-10-10'),
(10, 16, 72, 2, 1, 5, '2009', NULL, '1', 'vhtapia', '2008-10-10'),
(11, 16, 71, 2, 1, 2, '2009', NULL, '1', 'vhtapia', '2008-10-10'),
(44, 17, 79, 2, 3, 3, '2009', NULL, '1', 'ECALDERON', '2008-10-20'),
(47, 17, 76, 2, 3, 1, '2009', NULL, '1', 'ECALDERON', '2008-10-20'),
(48, 17, 81, 2, 3, 5, '2009', NULL, '1', 'ECALDERON', '2008-10-20'),
(54, 16, 71, 2, 1, 2, '2007', '4.0', '1', 'VHTAPIA', '2008-10-23'),
(55, 16, 72, 2, 1, 3, '2007', '4.0', '1', 'VHTAPIA', '2008-10-23'),
(377, 39, 224, 8, 6, 1, '2007', NULL, '1', 'JNieto', '2010-01-19'),
(636, 39, 224, 8, 6, 4, '2010', '6.0', '1', 'vhtapia', '2011-04-18'),
(792, 39, 224, 8, 6, 3, '2009', NULL, '1', 'ECALDERON', '2011-11-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_juridica`
--

DROP TABLE IF EXISTS `p_juridica`;
CREATE TABLE IF NOT EXISTS `p_juridica` (
  `IdDistrito` int(11) DEFAULT NULL,
  `RSocial` varchar(50) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `Tele_Fijo1` varchar(10) DEFAULT NULL,
  `Ruc` varchar(11) DEFAULT NULL,
  `idPersona` int(11) NOT NULL,
  `replegal` varchar(60) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `www` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `p_juridica`
--

INSERT INTO `p_juridica` (`IdDistrito`, `RSocial`, `Direccion`, `Tele_Fijo1`, `Ruc`, `idPersona`, `replegal`, `email`, `www`) VALUES
(197, 'Banco Internacional del Perú - InterBank', 'Jr. Francisco Bolognesi', NULL, '20100053455', 11668, NULL, NULL, 'www.interbank.com.pe'),
(197, 'Banco de Credito del Perú', 'Jr. Francisco Bolognesi', NULL, '20100047218', 11669, NULL, NULL, 'www.viabcp.com'),
(197, 'Banco de la Nación', 'Av. Jos‚ Galvez', NULL, '20100030595', 11670, NULL, NULL, 'www.bn.com.pe'),
(84, 'DIRECCION REGIONAL DE EDUCACION ANCASH', 'Jr. José de Sucre N° 731-Huaraz', '(043)-4210', NULL, 12868, 'TUYA JARA, ANTONIO WILFREDO', NULL, 'http://www.dreancash.gob.pe/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `p_natural`
--

DROP TABLE IF EXISTS `p_natural`;
CREATE TABLE IF NOT EXISTS `p_natural` (
  `IdDocu` int(11) DEFAULT NULL,
  `IdDistrito` int(11) DEFAULT NULL,
  `APaterno` varchar(20) DEFAULT NULL,
  `AMaterno` varchar(20) DEFAULT NULL,
  `Nombres` varchar(35) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `Tele_fijo1` varchar(10) DEFAULT NULL,
  `Sexo` char(1) DEFAULT NULL,
  `EstCivil` char(1) DEFAULT NULL,
  `NroDoc` varchar(11) DEFAULT NULL,
  `IdPersona` int(11) NOT NULL,
  `Tele_Celu` varchar(10) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `f_nac` date DEFAULT NULL,
  `lugar_nac` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`IdPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `p_natural`
--

INSERT INTO `p_natural` (`IdDocu`, `IdDistrito`, `APaterno`, `AMaterno`, `Nombres`, `Direccion`, `Tele_fijo1`, `Sexo`, `EstCivil`, `NroDoc`, `IdPersona`, `Tele_Celu`, `email`, `f_nac`, `lugar_nac`) VALUES
(1, 197, 'VASQUEZ', 'TERRONES', 'JOSE LUIS', 'JR. PACASMAYO Nº 415', NULL, 'M', NULL, '17834236', 16364, '943471278', NULL, NULL, NULL),
(NULL, 197, 'VILLANUEVA', 'MORILLO', 'KATHERIN YOSELIN', NULL, NULL, 'F', NULL, NULL, 16383, NULL, NULL, NULL, NULL),
(NULL, 197, 'ESTRADA', 'OLIVA', 'JAMER EMILIO', NULL, NULL, 'M', NULL, NULL, 16391, NULL, NULL, NULL, NULL),
(NULL, 197, 'CHAVEZ', 'ALVAREZ', 'LEONEL SEBASTIAN', NULL, NULL, 'M', NULL, NULL, 16393, NULL, NULL, NULL, NULL),
(NULL, 197, 'URQUIAGA', 'RAMOS', 'ERIKA DEL ROCIO', NULL, NULL, 'F', NULL, NULL, 16413, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regnotas_p`
--

DROP TABLE IF EXISTS `regnotas_p`;
CREATE TABLE IF NOT EXISTS `regnotas_p` (
  `IdMatricula` int(11) NOT NULL,
  `IdPlan` int(11) NOT NULL,
  `Nota` int(11) DEFAULT NULL,
  `NroMatri` int(11) NOT NULL,
  `Estado` char(1) DEFAULT NULL,
  `W_Usuario` char(15) DEFAULT NULL COMMENT 'current user',
  `F_Reg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'current date',
  `F_Eval` date DEFAULT NULL,
  `Observa` varchar(100) DEFAULT NULL,
  `NotaRec` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdMatricula`,`IdPlan`,`NroMatri`),
  KEY `IdMatricula` (`IdMatricula`),
  KEY `IdPlan` (`IdPlan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regnotas_p`
--

INSERT INTO `regnotas_p` (`IdMatricula`, `IdPlan`, `Nota`, `NroMatri`, `Estado`, `W_Usuario`, `F_Reg`, `F_Eval`, `Observa`, `NotaRec`) VALUES
(42414, 636, 14, 2, '1', 'Ecalderon', '2014-11-14', '2013-12-27', '(03-11-2014)', NULL),
(42436, 377, 16, 1, '1', 'Ecalderon', '2014-11-20', '2011-12-30', '(24-10-2014)', NULL),
(42441, 792, 16, 1, '1', 'Ecalderon', '2014-11-20', '2013-01-04', '(25/07/2014)', NULL),
(42484, 9, 17, 1, '1', 'Ecalderon', '2014-12-10', '2011-12-30', '28/10/2014', NULL),
(42484, 10, 19, 1, '1', 'YZumaeta', '2014-12-23', '2013-12-27', '(22-12-2014)', NULL),
(42511, 11, 15, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL),
(42511, 44, 16, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL),
(42511, 47, 18, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL),
(42538, 48, 14, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL),
(42538, 54, 17, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL),
(42538, 55, 15, 1, '1', 'Ecalderon', '2014-12-26', '2014-12-30', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regnotas_t`
--

DROP TABLE IF EXISTS `regnotas_t`;
CREATE TABLE IF NOT EXISTS `regnotas_t` (
  `NroMatri` int(11) NOT NULL,
  `n1` int(11) DEFAULT NULL,
  `n2` int(11) DEFAULT NULL,
  `n3` int(11) DEFAULT NULL,
  `n4` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `f_eval` date,
  `observa` varchar(200) DEFAULT NULL,
  `f_reg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'current date',
  `w_usuario` char(15) DEFAULT NULL,
  `CodAlu` varchar(10) NOT NULL,
  `IdModulo` int(11) NOT NULL,
  `Condicion` char(1) DEFAULT NULL,
  PRIMARY KEY (`NroMatri`,`CodAlu`,`IdModulo`),
  KEY `IdModulo` (`IdModulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regnotas_t`
--

INSERT INTO `regnotas_t` (`NroMatri`, `n1`, `n2`, `n3`, `n4`, `estado`, `f_eval`, `observa`, `f_reg`, `w_usuario`, `CodAlu`, `IdModulo`, `Condicion`) VALUES
(1, 14, 13, 13, 13, '1', '2008-08-22', NULL, '2009-03-30', 'ECALDERON', '08CI373V', 1, 'T'),
(1, 13, 14, 13, 0, '1', '2008-08-22', NULL, '2008-10-24', 'ECALDERON', '08CI386N', 1, 'T'),
(1, 14, 13, 13, 14, '1', '2008-12-30', NULL, '2009-02-04', 'ECALDERON', '08CI387N', 1, 'T'),
(1, 13, 13, 13, 17, '1', '2008-12-30', NULL, '2009-02-04', 'ECALDERON', '08CI388N', 1, 'T'),
(1, 13, 13, 13, 15, '1', '2008-12-30', NULL, '2009-02-04', 'ECALDERON', '08CI390N', 1, 'T'),
(1, 13, 13, 13, 14, '1', '2008-12-30', NULL, '2009-02-04', 'ECALDERON', '08CI395N', 1, 'T'),
(1, 13, 13, 13, 0, '1', '2008-08-22', NULL, '2009-03-30', 'ECALDERON', '08CI398V', 1, 'T'),
(1, 13, 13, 13, 14, '1', '2008-08-22', NULL, '2009-03-30', 'ECALDERON', '08CI458V', 1, 'T'),
(2, 16, 15, 16, 15, '1', '2007-08-17', NULL, '2009-06-02', 'YZUMAETA', '07QI211D', 1, 'T'),
(2, 13, 14, 14, 16, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET268D', 1, 'T'),
(2, 16, 13, 13, 16, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET269D', 1, 'T'),
(2, 13, 13, 14, 16, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET270D', 1, 'T'),
(2, 13, 14, 15, 15, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET276D', 1, 'T'),
(2, 14, 13, 13, 16, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET279D', 1, 'T'),
(2, 14, 13, 14, 14, '1', '2008-08-22', NULL, '2014-11-18', 'vhtapia', '08ET280D', 1, 'T');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `semestre`
--

DROP TABLE IF EXISTS `semestre`;
CREATE TABLE IF NOT EXISTS `semestre` (
  `IdSemestre` int(11) NOT NULL,
  `Descripcion` varchar(15) NOT NULL,
  `anio` int(11) NOT NULL,
  `f_inicio` date DEFAULT NULL,
  `f_vencim` date DEFAULT NULL,
  `f_eval` date DEFAULT NULL,
  `estado` char(1) NOT NULL,
  `condicion` char(1) NOT NULL COMMENT 'T: Termino; V: VIgente',
  `CMatri_SR` date DEFAULT NULL COMMENT 'Fecha de Cierre de Matricula Sin Recargo',
  `CMatri_CR` date DEFAULT NULL COMMENT 'Fecha de Cierre de Matricula Con Recargo',
  `vigencia` varchar(4) DEFAULT NULL,
  `CIng_Notas` date DEFAULT NULL COMMENT 'Fecha de Cierre de Ingreso de notas',
  `freg` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'current date',
  `wusuario` varchar(15) DEFAULT NULL COMMENT 'current user',
  PRIMARY KEY (`IdSemestre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `semestre`
--

INSERT INTO `semestre` (`IdSemestre`, `Descripcion`, `anio`, `f_inicio`, `f_vencim`, `f_eval`, `estado`, `condicion`, `CMatri_SR`, `CMatri_CR`, `vigencia`, `CIng_Notas`, `freg`, `wusuario`) VALUES
(28, '1999 - II', 1999, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(29, '2000 - I', 2000, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(30, '2000 - II', 2000, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(31, '2001 - I', 2001, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(32, '2001 - II', 2001, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(33, '2002 - I', 2002, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(34, '2002 - II', 2002, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(35, '2003 - I', 2003, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(36, '2003 - II', 2003, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(37, '2004 - I', 2004, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(38, '2004 - II', 2004, '2005-01-01', '2005-01-01', '2005-01-01', '1', 'T', '2005-01-01', '2005-01-01', '1986', '2005-01-01', '2014-11-13', 'DBA'),
(39, '2005 - I', 2005, '2005-01-01', '2005-08-19', '2005-08-19', '1', 'T', '2005-01-01', '2009-12-31', '2005', '2005-01-01', '2014-11-13', 'DBA'),
(40, '2005 - II', 2005, '2005-08-20', '2006-01-06', '2006-01-06', '1', 'T', '2005-01-01', '2009-12-31', '2005', '2005-01-01', '2014-11-13', 'DBA'),
(41, '2006 - I', 2006, '2006-01-01', '2006-07-31', '2006-01-18', '1', 'T', '2005-01-01', '2009-12-31', '2006', '2005-01-01', '2014-11-13', 'DBA'),
(42, '2006 - II', 2006, '2006-08-01', '2007-12-31', '2006-12-29', '1', 'T', '2005-01-01', '2009-12-31', '2006', '2005-01-01', '2014-11-13', 'DBA'),
(43, '2007 - I', 2007, '2007-01-01', '2007-07-31', '2007-08-17', '1', 'V', '2005-01-01', '2009-12-31', '2007', '2005-01-01', '2018-12-28', 'VHTAPIA'),
(44, '2007 - II', 2007, '2007-08-01', '2007-12-31', '2007-12-28', '1', 'V', '2005-01-01', '2009-12-31', '2007', '2005-01-01', '2018-12-28', 'VHTAPIA'),
(45, '2008-I', 2008, '2008-01-01', '2008-08-31', '2008-08-22', '1', 'T', '2005-01-01', '2009-12-31', '2009', '2005-01-01', '2014-11-13', 'DBA'),
(46, '2008-II', 2008, '2008-09-01', '2008-12-31', '2008-12-30', '1', 'T', '2008-12-25', '2008-12-31', '2009', '2005-01-01', '2017-10-30', 'VHTAPIA'),
(47, '2009-0', 2009, '2009-01-01', '2009-03-31', '2009-03-31', '1', 'T', '2009-02-28', '2009-03-31', '2009', '2005-01-01', '2014-11-13', 'DBA'),
(48, '2009-I', 2009, '2009-04-01', '2009-08-31', '2009-08-31', '1', 'V', '2009-04-30', '2010-03-31', '2009', '2005-01-01', '2019-11-26', 'VHTAPIA'),
(49, '2009-II', 2009, '2009-09-01', '2009-12-31', '2009-12-31', '1', 'V', '2009-09-30', '2010-04-30', '2009', '2016-10-01', '2019-11-26', 'VHTAPIA'),
(50, '2010-0', 2010, '2010-01-01', '2010-03-31', '2010-03-31', '1', 'T', '2010-02-28', '2011-04-30', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(51, '2010-I', 2010, '2010-04-01', '2010-08-13', '2010-08-13', '1', 'V', '2010-04-30', '2011-07-31', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(52, '2010-II', 2010, '2010-09-01', '2010-12-31', '2010-12-31', '1', 'V', '2011-09-30', '2011-07-31', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(53, '2011-0', 2011, '2011-01-01', '2011-03-27', '2011-03-31', '1', 'V', '2011-04-30', '2011-07-31', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(54, '2011-I', 2011, '2011-03-28', '2011-08-05', '2011-08-05', '1', 'V', '2011-08-30', '2011-11-15', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(55, '2011-II', 2011, '2011-08-06', '2011-12-30', '2011-12-30', '1', 'V', '2011-10-14', '2011-12-30', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(56, '2012-0', 2012, '2012-01-02', '2011-03-31', '2012-03-31', '1', 'V', '2011-03-30', '2011-03-30', '2010', '2005-01-01', '2014-11-13', 'DBA'),
(57, '2012-I', 2012, '2012-04-01', '2012-08-03', '2012-08-03', '1', 'V', '2012-04-15', '2013-09-02', '2010', '2013-07-17', '2014-11-13', 'DBA'),
(58, '2012-II', 2012, '2012-08-04', '2013-01-04', '2013-01-04', '1', 'V', '2012-09-28', '2013-09-02', '2010', '2013-07-17', '2014-11-13', 'DBA'),
(59, '2013-0', 2013, '2013-01-05', '2013-02-28', '2013-02-28', '1', 'V', NULL, NULL, '2010', '2013-02-28', '2014-11-13', 'DBA'),
(60, '2013-I', 2013, '2013-03-01', '2013-08-15', '2013-08-15', '1', 'V', '2013-04-30', '2013-10-17', '2010', '2013-06-17', '2014-11-13', 'DBA'),
(61, '2013-II', 2013, '2013-08-16', '2013-12-27', '2013-12-27', '1', 'V', '2013-10-11', '2013-12-20', '2010', '2014-01-30', '2014-11-13', 'DBA'),
(62, '2014-0', 2014, '2014-01-02', '2014-03-31', '2014-03-31', '1', 'V', NULL, NULL, '2010', '2014-01-30', '2014-11-13', 'DBA'),
(63, '2014-I', 2014, '2014-04-01', '2014-08-01', '2014-08-01', '1', 'V', '2014-06-23', '2014-07-31', '2010', NULL, '2014-11-13', 'DBA'),
(64, '2014-II', 2014, '2014-08-02', '2014-12-30', '2014-12-30', '1', 'V', '2014-09-30', '2014-12-30', '2010', '2014-12-26', '2014-12-23', 'VHTAPIA'),
(65, '2015-0', 2015, '2015-01-02', '2015-03-15', '2015-03-15', '1', 'V', NULL, NULL, '2010', NULL, '2014-11-13', 'DBA'),
(66, '2015-I', 2015, '2015-03-16', '2015-08-07', '2015-08-07', '1', 'V', '2015-06-08', '2015-07-23', '2010', NULL, '2015-07-23', 'JSALDANA'),
(67, '2015-II', 2015, '2015-08-08', '2015-12-30', '2015-12-30', '1', 'V', '2015-10-02', '2016-05-18', '2010', NULL, '2016-05-17', 'VHTAPIA'),
(68, '2016-0', 2016, '2016-01-02', '2016-02-29', '2016-02-29', '1', 'V', NULL, NULL, '2010', NULL, '2014-11-13', 'DBA'),
(69, '2016-I', 2016, '2016-03-01', '2018-12-30', '2016-07-27', '1', 'V', '2018-12-30', '2018-12-30', '2010', NULL, '2018-11-30', 'JSALDAÑA'),
(70, '2016-II', 2016, '2016-08-01', '2016-12-31', '2016-12-23', '1', 'V', '2016-09-09', '2016-12-30', '2010', NULL, '2016-11-23', 'VHTAPIA'),
(71, '2017-0', 2017, '2016-12-27', '2017-02-28', '2017-02-28', '1', 'V', NULL, NULL, '2010', NULL, '2016-12-14', 'DBA'),
(72, '2017-I', 2017, '2017-03-01', '2017-07-31', '2017-07-27', '1', 'V', '2017-05-31', '2017-08-04', '2010', '2017-06-16', '2018-07-18', 'VHTAPIA'),
(73, '2017-II', 2017, '2017-07-31', '2018-05-15', '2017-12-29', '1', 'V', '2017-10-31', '2017-11-05', '2010', '2017-12-21', '2018-05-15', 'JSALDANA'),
(74, '2018-0', 2018, '2018-01-02', '2018-02-28', '2018-02-28', '1', 'V', NULL, NULL, '2010', NULL, '2018-02-16', 'DBA'),
(75, '2018-I', 2018, '2018-03-19', '2018-07-31', '2018-07-31', '1', 'V', '2018-07-23', '2018-07-23', '2010', '2018-07-23', '2018-08-14', 'VHTAPIA'),
(76, '2018-II', 2018, '2018-08-13', '2018-12-31', '2018-12-28', '1', 'V', '2018-12-13', '2018-12-17', '2010', '2018-12-27', '2018-12-26', 'VHTAPIA'),
(77, '2019-0', 2019, '2019-01-02', '2019-02-28', NULL, '1', 'V', NULL, NULL, '2010', NULL, '2018-08-07', 'DBA'),
(83, '2019-I', 2019, '2019-03-01', '2019-07-31', '2019-07-26', '1', 'V', '2019-04-02', '2019-07-26', '2010', '2019-07-26', '2019-07-31', 'VHTAPIA'),
(84, '2019-II', 2019, '2019-08-01', '2019-12-31', '2019-12-20', '1', 'V', '2019-09-16', '2019-11-12', '2010', '2020-01-04', '2020-01-03', 'VHTAPIA'),
(85, '2020-0', 2020, '2020-01-01', '2020-03-15', NULL, '1', 'V', NULL, NULL, '2020', NULL, '2020-01-02', 'VHTAPIA'),
(86, '2020-I', 2020, '2020-03-16', '2020-07-31', NULL, '0', 'V', NULL, NULL, '2020', NULL, '2020-01-02', 'VHTAPIA'),
(87, '2020-II', 2020, '2020-08-01', '2020-12-31', NULL, '0', 'V', NULL, NULL, '2020', NULL, '2020-01-02', 'VHTAPIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_matricula`
--

DROP TABLE IF EXISTS `tipo_matricula`;
CREATE TABLE IF NOT EXISTS `tipo_matricula` (
  `IdTipoMatri` int(11) NOT NULL,
  `DesTipoMatri` varchar(50) DEFAULT NULL,
  `nomcorto` char(3) DEFAULT NULL,
  PRIMARY KEY (`IdTipoMatri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_matricula`
--

INSERT INTO `tipo_matricula` (`IdTipoMatri`, `DesTipoMatri`, `nomcorto`) VALUES
(1, 'ORDINARIA', 'ORD'),
(2, 'EXTEMPORANEA', 'EXT'),
(3, 'ESPECIAL', 'ESP'),
(4, 'TRASLADO EXTERNO', 'TEX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno`
--

DROP TABLE IF EXISTS `turno`;
CREATE TABLE IF NOT EXISTS `turno` (
  `IdTurno` int(11) NOT NULL,
  `DesTurno` varchar(15) DEFAULT NULL,
  `CodTurno` char(2) DEFAULT NULL,
  `H_Inicio` time DEFAULT NULL,
  `H_Fin` time DEFAULT NULL,
  PRIMARY KEY (`IdTurno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turno`
--

INSERT INTO `turno` (`IdTurno`, `DesTurno`, `CodTurno`, `H_Inicio`, `H_Fin`) VALUES
(1, 'DIURNO', 'D', '06:00:00', '13:00:00'),
(2, 'NOCTURNO', 'N', '18:00:00', '23:00:00'),
(3, 'VESPERTINO', 'V', '13:00:00', '18:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `und_didactica`
--

DROP TABLE IF EXISTS `und_didactica`;
CREATE TABLE IF NOT EXISTS `und_didactica` (
  `IdUnidad` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Estado` int(11) DEFAULT NULL,
  `W_Usuario` char(15) NOT NULL,
  `F_Reg` date NOT NULL,
  `codigo` char(6) DEFAULT NULL,
  `duracion` varchar(10) DEFAULT NULL,
  `horas` int(11) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`IdUnidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `und_didactica`
--

INSERT INTO `und_didactica` (`IdUnidad`, `Nombre`, `Estado`, `W_Usuario`, `F_Reg`, `codigo`, `duracion`, `horas`, `Descripcion`) VALUES
(71, 'Plan Contable', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 4, NULL),
(72, 'Documentación Comercial y Contable', 1, 'ECALDERON', '2017-06-14', NULL, 'S', 5, NULL),
(73, 'Administración Empresarial', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 3, NULL),
(76, 'Contabilidad de Costos', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 6, NULL),
(79, 'Técnica Presupuestal', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 6, NULL),
(81, 'Aplicativos Informáticos', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 5, NULL),
(84, 'Formulación y Evaluación de Proyectos', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 5, NULL),
(88, 'Electrónica de Potencia', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 5, NULL),
(90, 'Ensayos F¡sicos y Organolépticos', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 4, NULL),
(91, 'Ensayos Qu¡micos', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 10, NULL),
(96, 'Servicios Auxiliares de Proceso', 1, 'ECALDERON', '2017-06-14', NULL, 'S', 3, NULL),
(106, 'Máquinas Eléctricas', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 8, NULL),
(204, 'Dibujo Técnico', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 4, NULL),
(205, 'Materiales Industriales', 1, 'ECALDERON', '2017-06-14', NULL, NULL, 3, NULL),
(224, 'Automatización', 1, 'ECALDERON', '2020-01-07', NULL, 'S', 8, NULL);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`idalumno`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`CodAlu`) REFERENCES `alumno` (`CodAlu`),
  ADD CONSTRAINT `matricula_ibfk_2` FOREIGN KEY (`IdTurno`) REFERENCES `turno` (`IdTurno`),
  ADD CONSTRAINT `matricula_ibfk_3` FOREIGN KEY (`IdTipoMatri`) REFERENCES `tipo_matricula` (`IdTipoMatri`),
  ADD CONSTRAINT `matricula_ibfk_4` FOREIGN KEY (`IdCiclo`) REFERENCES `ciclo` (`IdCiclo`),
  ADD CONSTRAINT `matricula_ibfk_5` FOREIGN KEY (`IdSemestre`) REFERENCES `semestre` (`IdSemestre`),
  ADD CONSTRAINT `matricula_ibfk_6` FOREIGN KEY (`IdEspecialidad`) REFERENCES `especialidad` (`IdEspecialidad`);

--
-- Filtros para la tabla `matricula_rep`
--
ALTER TABLE `matricula_rep`
  ADD CONSTRAINT `matricula_rep_ibfk_1` FOREIGN KEY (`CodAlu`) REFERENCES `alumno` (`CodAlu`),
  ADD CONSTRAINT `matricula_rep_ibfk_2` FOREIGN KEY (`IdUnidad`) REFERENCES `und_didactica` (`IdUnidad`),
  ADD CONSTRAINT `matricula_rep_ibfk_3` FOREIGN KEY (`IdTurno`) REFERENCES `turno` (`IdTurno`),
  ADD CONSTRAINT `matricula_rep_ibfk_4` FOREIGN KEY (`IdCiclo`) REFERENCES `ciclo` (`IdCiclo`),
  ADD CONSTRAINT `matricula_rep_ibfk_5` FOREIGN KEY (`IdSemestre`) REFERENCES `semestre` (`IdSemestre`),
  ADD CONSTRAINT `matricula_rep_ibfk_6` FOREIGN KEY (`IdEspecialidad`) REFERENCES `especialidad` (`IdEspecialidad`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`IdClase`) REFERENCES `clase_per` (`IdClase`);

--
-- Filtros para la tabla `planestudio_mod`
--
ALTER TABLE `planestudio_mod`
  ADD CONSTRAINT `planestudio_mod_ibfk_1` FOREIGN KEY (`IdUnidad`) REFERENCES `und_didactica` (`IdUnidad`),
  ADD CONSTRAINT `planestudio_mod_ibfk_2` FOREIGN KEY (`IdModulo`) REFERENCES `modulos` (`IdModulo`),
  ADD CONSTRAINT `planestudio_mod_ibfk_3` FOREIGN KEY (`IdEspecialidad`) REFERENCES `especialidad` (`IdEspecialidad`),
  ADD CONSTRAINT `planestudio_mod_ibfk_4` FOREIGN KEY (`IdCiclo`) REFERENCES `ciclo` (`IdCiclo`);

--
-- Filtros para la tabla `p_juridica`
--
ALTER TABLE `p_juridica`
  ADD CONSTRAINT `p_juridica_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `p_natural`
--
ALTER TABLE `p_natural`
  ADD CONSTRAINT `p_natural_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `regnotas_p`
--
ALTER TABLE `regnotas_p`
  ADD CONSTRAINT `regnotas_p_ibfk_1` FOREIGN KEY (`IdMatricula`) REFERENCES `matricula` (`IdMatricula`),
  ADD CONSTRAINT `regnotas_p_ibfk_2` FOREIGN KEY (`IdPlan`) REFERENCES `planestudio_mod` (`IdPlan`);

--
-- Filtros para la tabla `regnotas_t`
--
ALTER TABLE `regnotas_t`
  ADD CONSTRAINT `regnotas_t_ibfk_1` FOREIGN KEY (`IdModulo`) REFERENCES `modulos` (`IdModulo`);
COMMIT;





/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
