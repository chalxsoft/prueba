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
	<font size="8" color="white"><b>Chalxsoft :: Actualizar Datos</b></font>
	</td>
      </tr>
      <tr>
	<td align="center" bgcolor="4682B4">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
	</a> ] -
	[<a href="actualizar1.php" style="text-decoration:none;color:white;">
	<font size="4">Nueva Búsqueda</font>
	</a> ]
	</td>
      </tr>
      <tr>
	<td>
	<?php
	$identificacion=$_POST['identificacion'];
	//Conexion con la base de datos
	$chalxConexion = mysqli_connect("localhost", "root", "");
	//Selecciono la base de datos con la que se va a trabajar
	mysqli_select_db($chalxConexion, "colegio_bd");
	//Ejecuto la sentencia SQL a utilizar dentro de una variable
	$result=mysqli_query($chalxConexion, "SELECT * FROM alumnos WHERE identificacion=$identificacion");
	?>
	<table border="1" width="800">
	  <tr>
	    <th>Identificación</th><th>Nombres</th><th>Apellidos</th><th>Edad</th>
	  <tr>
	    <form method="POST" action="actualizar3.php">
	<?php
	//mostrar registros encontrados en una tabla
	while($row=mysqli_fetch_array($result))	{
	echo '<tr><td>'.$row["identificacion"].'</td>';
	echo '<td><input type=text name=nombres value="'.$row["nombres"].'"></td>';
	echo '<td><input type=text name=apellidos value="'.$row["apellidos"].'"></td>';
	echo '<td><input size=5 type=text name=edad value="'.$row["edad"].'">Años</td></tr>';
	}
	mysqli_free_result($result);
	?>
	  <tr>
	    <td colspan="4">
	<?php
	$identificacion=$_POST['identificacion'];
echo '<input size="10" type="text" OnFocus="this.blur()" name="identificacion" value='.$identificacion.'>';
	?>
	    <font color="white">
	    ¿Seguro que desea Actualizar estos datos?
	    </font>
	    <input type="submit" value="Sí">
	    </form>
	    </td>
	  </tr>
	</table>
	</td>
      </tr>
      <tr>
	<td align="center" bgcolor="4682B4" colspan="2">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
	</a> ] -
	[<a href="actualizar1.php" style="text-decoration:none;color:white;">
	<font size="4">Nueva Búsqueda</font>
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