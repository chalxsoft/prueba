<?php
require('fpdf/fpdf.php');

class PDF extends FPDF
{
//Cabecera de página
function Header()
{
	//Logo
	$this->Image('http://www.systemchalx.com/imagenes/systemchalx2.jpg',10,5,15,15);
	//Arial bold 15
	$this->SetFont('Arial','B',20);
	//Colores de los bordes, fondo y texto
	$this->SetDrawColor(0,80,180);
	$this->SetFillColor(230,230,0);
    	$this->SetTextColor(220,50,50);
    	//Ancho del borde (1 mm)
    	$this->SetLineWidth(1);
	//Movernos a la derecha
	$this->Cell(30);
	//Título
	$this->Cell(150,10,'INSTITUTO SYSTEM CHALX',1,0,'C');
	//Salto de línea
	$this->Ln(20);
}

//Pie de página
function Footer()
{
	//Posición: a 1,5 cm del final
	$this->SetY(-15);
	//Arial italic 8
	$this->SetFont('Arial','I',8);
	//Número de página
	$this->Cell(0,10,'Página '.$this->PageNo().'/{nb}',0,0,'C');
}
}

//Creación del objeto de la clase heredada
$pdf=new PDF('P','mm','Letter');
//Guarda el numero de paginas
$pdf->AliasNbPages();
// Agrega una hoja al documento.
$pdf->AddPage();

//Conexion con la base de datos
mysql_connect("localhost","root","");
//Selecciono la base de datos con la que se va a trabajar
mysql_select_db("colegio_bd");
//Ejecuto la sentencia SQL a utilizar dentro de una variable
$result=mysql_query("select * from alumnos");

//Establece la fuente a utilizar, el formato Negrita y el tamaño
$pdf->SetFont('Arial','B',20);
//color de la letra
$pdf->SetTextColor(220,50,50);
$pdf->Cell(180,10,'ALUMNOS',1,0,'C');

$pdf->Ln(10);
$pdf->SetTextColor(0,0,0);
//Establece la fuente a utilizar, el formato Negrita y el tamaño
$pdf->SetFont('Arial','B',10);
//Los titulos de la tabla
$pdf->Cell(30,5,'IDENTIFICACION',1,0,'C');
$pdf->Cell(50,5,'NOMBRES',1,0,'C');
$pdf->Cell(50,5,'APELLIDOS',1,0,'C');
$pdf->Cell(50,5,'EDAD',1,0,'C');
$pdf->Ln();

$pdf->SetFont('Arial','',8);
//Muestra los datos de la consulta
while($row = mysql_fetch_array($result)){
$pdf->Cell(30,5,$row['identificacion'],1,0,'R');
$pdf->Cell(50,5,$row['nombres'],1,0,'L');
$pdf->Cell(50,5,$row['apellidos'],1,0,'L');
$pdf->Cell(50,5,$row['edad'],1,0,'L');
$pdf->Ln();
}


$pdf->Output();
?>
