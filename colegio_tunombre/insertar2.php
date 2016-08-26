<html>
  <head>    <title>Chalxsoft :: Colegio Base de Datos</title>  </head>
  <body bgcolor="87CEFA">
    <center>
    <table border="0" cellspacing="0" width="800" bgcolor="white">
      <tr>
	<td colspan="2" align="center">
	<img src='http://systemchalx.com/imagenes/alumnos.png'><hr>
	</td>
      </tr>
      <tr>
	<td colspan="2" align="center" bgcolor="4682B4">
	<font size="8" color="white"><b>Chalxsoft :: Insertar Datos</b></font>
	</td>
      </tr>

      <tr>
	<td align="center" bgcolor="4682B4">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
	</a> ] -
	[<a href="insertar1.php" style="text-decoration:none;color:white;">
	<font size="4">Nuevo Registro</font>
	</a> ] 
	</td>
      </tr>

      <tr>
	<td>
	<?php
	$identificacion=$_POST['identificacion'];
	$nombres=$_POST['nombres'];
	$apellidos=$_POST['apellidos'];
	$edad=$_POST['edad'];


	//Conexion con la base de datos
	$chalxConexion = mysqli_connect("localhost", "root", "");

	//Selecciono la base de datos con la que se va a trabajar
	mysqli_select_db($chalxConexion, "colegio_bd");

	//Ejecuta la sentencia SQL a utilizar
	mysqli_query($chalxConexion, "INSERT INTO alumnos (identificacion, nombres, apellidos, edad) VALUES
	('$identificacion','$nombres','$apellidos','$edad')");

	?>

	<table border="1" width="800">
	  <tr>
	    <th colspan="4">Datos Insertados</th>
	  <tr>

	  <tr>
	    <th>Identificación</th><th>Nombres</th><th>Apellidos</th><th>Edad</th>
	  <tr>

	<?php
	echo '<tr><td>'.$identificacion.'</td>';
	echo '<td>'.$nombres.'</td>';
	echo '<td>'.$apellidos.'</td>';
	echo '<td>'.$edad.'</td></tr>';
	?>
	</table>
	</td>
      </tr>

      <tr>
	<td align="center" bgcolor="4682B4" colspan="2">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
	</a> ] -
	[<a href="insertar1.php" style="text-decoration:none;color:white;">
	<font size="4">Nuevo Registro</font>
	</a> ] 
	</td>
      </tr>

      <tr>
	<td colspan="2" align="center">
	<font size="3">
	&copy; Derechos reservados 
<a href="http://www.systemchalx.com/chalxsoft" style="text-decoration:none;">
	Chalxsoft</a> 2000 - 2016
	</font>
	</td>
      </tr>
    </table> </center>
  </body>
</html> 
