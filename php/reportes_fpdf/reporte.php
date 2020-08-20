<?php
	include 'plantilla.php';
	require 'conexion.php';
	
	$query = "SELECT * FROM `alumno` WHERE 1 ";
	$resultado = $mysqli->query($query);
	
    $pdf = new PDF('P','mm','A4');
    $pdf->SetMargins(30,20.5,30);
	$pdf->AliasNbPages();
	$pdf->AddPage();
    
    $pdf->SetFont('Arial','',10);
    $pdf->Write(5,'Visit');
    $pdf->Ln();

	$pdf->SetFillColor(232,232,232);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(70,6,'CodAlu',1,0,'C',1);
	$pdf->Cell(20,6,'idalumno',1,0,'C',1);
	$pdf->Cell(70,6,utf8_decode('Año'),1,1,'C',1);
	
	$pdf->SetFont('Arial','',10);
	
	while($row = $resultado->fetch_assoc())
	{
		$pdf->Cell(70,6,utf8_decode($row['CodAlu']),1,0,'C');
		$pdf->Cell(20,6,$row['idalumno'],1,0,'C');
		$pdf->Cell(70,6,utf8_decode($row['anio']),1,1,'C');
	}
	$pdf->Output();
?>