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
	<font size="8" color="white"><b>Chalxsoft :: Borrar Datos</b></font>
	</td>
      </tr>

      <tr>
	<td align="center" bgcolor="4682B4" colspan="2">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
	</a> ]
	</td>
      </tr>

      <tr>
	<td>
<img src="http://www.systemchalx.com/imagenes/systemchalx2.jpg" width="300" height="300">
	</td>
	<td align="center">
	<font size="8">Datos Borrados
	</td>
      </tr>

	<?php
	$identificacion=$_POST['identificacion'];
	//Conexion con la base de datos
	$chalxConexion = mysqli_connect("localhost", "root", "");
	//Selecciono la base de datos con la que se va a trabajar
	mysqli_select_db($chalxConexion, "colegio_bd");
	//Ejecuto la sentencia SQL a utilizar dentro de una variable
	$result=mysqli_query($chalxConexion, "DELETE FROM alumnos WHERE identificacion=$identificacion");
	?>
      <tr>
	<td align="center" bgcolor="4682B4" colspan="2">
	[<a href="index.html" style="text-decoration:none;color:white;">
	<font size="4">Panel de Control</font>
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