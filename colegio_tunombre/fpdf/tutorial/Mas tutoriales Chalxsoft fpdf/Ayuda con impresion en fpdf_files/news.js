/**
 * Scripts para la gestion de los foros de la web del programador
 * http://www.lawebdelprogramador.com
 */
var idlast=0;
var idlastSelect=0;
var ids=new Array();

/** funcion para mostrar o ocultar el formulario */
function showForm(id,path)
{
	if(document.getElementById("idshowForm_"+id).style.display=='table' || document.getElementById("idshowForm_"+id).style.display=='inline')
	{
		/** Si este formulario ya estava abierto lo cerramos */
		document.getElementById("idshowForm_"+id).style.display='none';
	}else{
		/** Si el ultimo id que intentamos abrir, no se ha abierto, porque todavia
		no disponemos del formulario lo cerramos */
		if(idlast!=0 && !document.forms["form_"+idlast])
		{
			document.getElementById(idlast).style.display='none';
		}
		idlast=id;
		/** Si este formulario estava cerrado lo abrimos */
		document.getElementById("idshowForm_"+id).style.display='table';
		/** Si no existe el formulario, lo cargamos */
		if(!document.forms["form_"+id])
		{
			/** Mostramos un reloj mientras no carga... */
			document.getElementById("idshowForm_"+id).innerHTML="<div style='text-align:center;' class='form'><img src='/img/ajaxActivity.gif' border='0' /></div>";
			/** Cogemos el titulo para enviarlo hacia el php para que lo ponga como titulo */
			var title=document.getElementById("idT"+id).innerHTML;
			/** Reemplazamos algunos de los caracteres html */
			var title=title.replace(/&lt;/g,"<");
			var title=title.replace(/&gt;/g,">");

			returnHTML("idshowForm_"+id, '', '/'+path+'/ajax_showForm.php', id+"#"+title, 'showFormAjax');
		}
		// Seleccionamos el recuadro
		selectNew(id);
		// Ponemos el foco en el primer campo
		setfocusForm("form_"+id);
	}
}

/**
 * Funcion que es llamada por showForm, la cual muestra el contenido del ajax, y
 * pone el foco en la casilla del nombre
 */
function showFormAjax(idContenido)
{
	//si recibimos algun valor a mostrar...
	if(Conexion.responseText)
	{
		document.getElementById(idContenido).style.display=js_display;
		document.getElementById(idContenido).innerHTML=Conexion.responseText;
		if(document.getElementById("form_nombre_"+idlast))
			document.getElementById("form_nombre_"+idlast).focus();
	}else{
		document.getElementById(idContenido).style.display=js_display;
		document.getElementById(idContenido).innerHTML="";
	}
}

/** funcion para esconder los formularios visibles */
function closeForms()
{
	for(i=0;i<ids.length;i++)
	{
		document.getElementById(ids[i]).style.display='none';
	}
}

/** Funcion para desmarcar el marco de un mensaje */
function selectNew(id)
{
	// Desmarcamos
	if(idlastSelect>0)
	{
		document.getElementById("div"+idlastSelect).style.borderColor='#c8c6c6';
		document.getElementById("div"+idlastSelect).style.borderStyle='dotted';
	}
	// Marcamos
	if(id)
	{
		document.getElementById("div"+id).style.borderColor='#5877ac';
		document.getElementById("div"+id).style.borderStyle='solid';
		idlastSelect=id;
	}
}
