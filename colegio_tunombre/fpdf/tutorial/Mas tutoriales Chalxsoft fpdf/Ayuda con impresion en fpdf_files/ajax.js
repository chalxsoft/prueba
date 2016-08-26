<!--
var Conexion=false; // Variable que manipula la conexion.
var js_idReloj=""; // Determina el nombre del id que hace referencia al reloj
var js_cadena=""; // Determina la ultima palabra buscada.
var js_valueCadena=""; //Contiene el valor de la cadena buscada
var js_display="inline"; // Determina como mostramos el style.display del destino. Puede ser inline, block, ...
var js_functionExecute=""; // Determina la funcion a ejecutar. Si no se especifica, ejecuta ContenidoHTML

// funcion que realiza la conexion con el objeto XMLHTTP...
function Conectar()
{
	if(window.XMLHttpRequest)
		Conexion=new XMLHttpRequest(); //mozilla
	else if(window.ActiveXObject)
		Conexion=new ActiveXObject("Microsoft.XMLHTTP"); //microsoft
}

//gestiona contenido devuelto en formato HTML
function ContenidoHTML(idContenido)
{
	/**
	 * ReadyState devuelve el estado de la conexion. puede valer:
	 *	0- No inicializado (Es el valor inicial de readyState)
	 *	1- Abierto (El metodo "open" ha tenido exito)
	 *	2- Enviado (Se ha completado la solicitud pero ningun dato ha sido recibido todavia)
	 *	3- Recibiendo
	 *	4- Respuesta completa (Todos los datos han sido recibidos)
	 */

	// En espera del valor 4
	if(Conexion.readyState!=4) return;
	/**
	 * status: contiene un codigo enviado por el servidor
	 *	200-Completado con exito
	 *	404-No se encontra URL
	 *	414-Los valores pasados por GET superan los 512
	 * statusText: contiene el texto del estado
	 */
	if(Conexion.status==200) // Si conexion HTTP es buena !!!
	{
		//ejecutamos la funcion inidicada
		if(js_functionExecute)
			eval(js_functionExecute)(idContenido);
	}else{
		document.getElementById(idContenido).innerHTML=Conexion.status+"-"+Conexion.statusText;
	}
	// Deshabilitamos la visualizacion del reloj
	if(document.getElementById(js_idReloj))
	{
		document.getElementById(js_idReloj).style.visibility="hidden";
		document.getElementById(js_idReloj).style.display="none";
	}
	Conexion=false;
}

/**
 * Funcion que modifica el contenido de la web.
 * Esta funcion recibe:
 * 	idContenido=identificador donde colocar el contenido
 */
function modifyContentHTML(idContenido)
{
	//si recibimos algun valor a mostrar...
	if(Conexion.responseText)
	{
		/*
		 * Modificamos el identificador con el valor recibido por la consulta
		 * Podemos recibir diferentes tipos de datos:
		 * responseText-Datos devueltos por el servidor en formato cadena
		 * responseXML-Datos devueltos por el servidor en forma de documento XML
		 */
		document.getElementById(idContenido).style.display=js_display;
		document.getElementById(idContenido).innerHTML=Conexion.responseText;
	}else{
		document.getElementById(idContenido).style.display=js_display;
		document.getElementById(idContenido).innerHTML="";
	}
}

function SolicitudHTML(idContenido,Cadena,filePHP)
{
	/**
	 * Si no recibimos cadena, no hacemos nada.
	 * 	Cadena=la cadena a buscar en la base de datos
	 * Si cadena es igual a Palabra, no se realiza la busqueda. Puede ser que pulsen la tecla tabulador,
	 * y no interesa que vuelva a verificar...
	 */
	if(Cadena && Cadena!=js_cadena)
	{
		// Si ya esta conectado, cancela la solicitud en espera de que termine
		if(Conexion) return; // Previene uso repetido del boton.
		
		// Realiza la conexion
		Conectar();
		// Si la conexion es correcta...
		if(Conexion)
		{
			// Habilitamos la visualizacion del reloj
			if(document.getElementById(js_idReloj))
			{
				document.getElementById(js_idReloj).style.visibility="visible";
				document.getElementById(js_idReloj).style.display="inline";
			}

			// Esta variable, se utiliza para igualar con la cadena a buscar.
			js_cadena=Cadena;

			/**
			 * Preparamos una conexion con el servidor:
			 *	POST|GET - determina como se envian los datos al servidor
			 *	true - No sincronizado. Ello significa que la pagina WEB no es interferida en su funcionamiento
			 *	por la respuesta del servidor. El usuario puede continuar usando la pagina mientras el servidor
			 *	retorna una respuesta que la actualizara, usualmente, en forma parcial.
			 *	false - Sincronizado
			 */
			Conexion.open("POST",filePHP,true);

			// Añade un par etiqueta/valor a la cabecera HTTP a enviar. Si no lo colocamos, no se pasan los parametros.
			Conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");

			// Cada vez que el estado de la conexion (readyState) cambie se ejecutara el contenido de esta "funcion()"
			Conexion.onreadystatechange=function()
			{
				ContenidoHTML(idContenido);
			}

			date=new Date();
			/*
			 * Realiza la solicitud al servidor. Puede enviar una cadena de caracteres, o un objeto del tipo XML
			 * Si no deseamos enviar ningun valor, enviariamos null
			 */
			Conexion.send("idContenido="+idContenido+"&word="+Cadena+"&"+date.getTime());
		}else
			document.getElementById(idContenido).innerHTML="ERROR JS : No connected";
	}
}

/**
 * Funcion que devuelve un contenido para la web
 * Tiene que recibir:
 *	identificador donde mostrar el resultado
 *	identificador del reloj
 *	fichero php a ejecutar
 *	la cadena a buscar en la base de datos
 *	El nombre de la funcion javascript a llamar para rellenar el contenido en la pagina web
 */
function returnHTML(idContenido,idReloj,filePHP,Cadena,functionExecute)
{
	js_idReloj=idReloj;
	js_valueCadena=Cadena;
	//Eliminamos el valor de la variable js_cadena, ya que la segunda vez que pulsemos no funcionaria
	js_cadena='';
	//window.alert(functionExecute);
	if (functionExecute=="" || functionExecute==undefined)
		js_functionExecute="modifyContentHTML";
	else
		js_functionExecute=functionExecute;

	if(Conexion!=false)
	{
		//si esta en medio de una conexion, la cancelamos
		Conexion=false;
		//Conexion.abort();
		// Deshabilitamos la visualizacion del reloj
		if(document.getElementById(js_idReloj))
		{
			document.getElementById(js_idReloj).style.visibility="hidden";
			document.getElementById(js_idReloj).style.display="none";
		}
	}
	SolicitudHTML(idContenido,Cadena,filePHP);
}
//-->