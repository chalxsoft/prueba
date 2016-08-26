/**
 * Funcion para deshabilitar el boton "Enviar" una vez los datos son correctos
 * Puede recibir el id del boton a deshabilitar
 */
function disableButtonSend(id)
{
	if(id=="" || id==undefined)
	{
		id="idSend";
	}
	button=document.getElementById(id);
	button.disabled=true;
}

/**
 * Funcion para validar el formulario de comentar un curso, tema, etc...
 * Tiene que recibir:
 *	- rating [true|false]: Determina si analiza la valoracion. En la seleccion de 
 *	noticas, no hay valoracion.
 *	- comment: Determina si el comentario tiene que tener un valor obligatorio
 */
function validateForm_comment(rating,comment)
{
	var nombre=document.formComment.nombre.value;
	var id_enombre=document.getElementById("enombre");
	var correo=document.formComment.correo.value;
	var id_ecorreo=document.getElementById("ecorreo");
	if(rating)
	{
		var radio=document.formComment.valoracion;
		var id_evaloracion=document.getElementById("evaloracion");
		return_radio=validate_radio("formComment","valoracion",id_evaloracion,"Determina si tu valoraci&oacute;n en positiva o negativa");
	}else{
		return_radio=1;
	}
	if(comment)
	{
		var comentario=document.formComment.comentario.value;
		var id_ecomentario=document.getElementById("ecomentario");
		return_comentario=validate_text(comentario,id_ecomentario,"Indica un comentario");
	}else{
		return_comentario=1;
	}

	return_nombre=validate_text(nombre,id_enombre,"Indica un nombre valido");
	return_mail=validate_email(correo,id_ecorreo,1);

	if(return_nombre==1 && return_mail==1 && return_radio==1 && return_comentario)
	{
		disableButtonSend();
		return true;
	}
	return false;
}

/**
 * Funcion para validar el formulario recomendar un curso, tema, etc...
 */
function validateForm_recommend()
{
	var nombre=document.formRecommend.nombre.value;
	var id_enombre=document.getElementById("enombre");
	var correo=document.formRecommend.correo.value;
	var id_ecorreo=document.getElementById("ecorreo");
	var nombred=document.formRecommend.nombred.value;
	var id_enombred=document.getElementById("enombred");
	var correod=document.formRecommend.correod.value;
	var id_ecorreod=document.getElementById("ecorreod");

	return_nombre=validate_text(nombre,id_enombre,"Indica un nombre valido");
	return_mail=validate_email(correo,id_ecorreo,1);
	return_nombred=validate_text(nombred,id_enombred,"Indica un nombre valido");
	return_maild=validate_email(correod,id_ecorreod,1);

	if(return_nombre==1 && return_mail==1 && return_nombred==1 && return_maild==1)
	{
		disableButtonSend();
		return true;
	}
	return false;
}

/**
 * Funcion para verificar la entrada de todas en el foro
 */
function validateForm_foro(id)
{
	var nombre=document.forms["form_"+id].nombre.value;
	var id_enombre=document.getElementById("enombre_"+id);
	var correo=document.forms["form_"+id].correo.value;
	var id_ecorreo=document.getElementById("ecorreo_"+id);
	var titulo=document.forms["form_"+id].titulo.value;
	var id_etitulo=document.getElementById("etitulo_"+id);
	var texto=document.forms["form_"+id].texto.value;
	var id_etexto=document.getElementById("etexto_"+id);

	return_nombre=validate_text(nombre,id_enombre,"Indica un nombre v&aacute;lido");
	return_mail=validate_email(correo,id_ecorreo,1);
	return_titulo=validate_text(titulo,id_etitulo,"Indica un titulo para la nota");
	return_texto=validate_text(texto,id_etexto,"El texto tiene que ser como m&iacute;nimo de 10 caracteres",10);
	if(return_texto==1)
	{
		return_textMax=validate_maxLenght(texto,id_etexto,"El texto tiene que ser como m&aacute;ximo de 15.000 caracteres",15000);
	}
	
	if(return_nombre==1 && return_mail==1 && return_texto==1 && return_textMax==1)
	{
		disableButtonSend("idSend_"+id);
		return true;
	}
	return false;
}

/**
 * Funcion para validar el máximo de un campo
 * Tiene que recibir:
 *	El objeto (Ej. document.formName.companyname)
 *	El objeto del identificador para el error (Ej. document.getElementById("ecompanyname"))
 *	El texto del error
 *	La longitud maxima del campo
 * Devuelve:
 * 	1-Todo correcto
 * 	0-Incorrecto
 */
function validate_maxLenght(text,id_eobj,error,charLenght)
{
	if(text.length>charLenght)
	{
		id_eobj.innerHTML=error;
		id_eobj.style.display="block";
		return 0;
	}else{
		id_eobj.innerHTML="";
		id_eobj.style.display="none";
		return 1;
	}
}

/**
 * Funcion para validar un campo de texto
 * Unicamente valida que no este el campo vacio
 * Tiene que recibir:
 *	El objeto (Ej. document.formName.companyname)
 *	El objeto del identificador para el error (Ej. document.getElementById("ecompanyname"))
 *	El texto del error
 *	La longitud minima del campo. Si no se especifica es 0
 * Devuelve:
 * 	1-Todo correcto
 * 	0-Incorrecto
 */
function validate_text(text,id_eobj,error,charLenght)
{
	if(charLenght==undefined)
		charLenght=0;
	if(text=="" || (charLenght>0 && text.length<charLenght))
	{
		id_eobj.innerHTML=error;
		id_eobj.style.display="block";
		return 0;
	}else{
		id_eobj.innerHTML="";
		id_eobj.style.display="none";
		return 1;
	}
}

/**
 * Funcion para validar la direccio de correo.
 * Tiene que recibir:
 * 	El objeto del correo (Ej. document.formName.mail)
 *	El objeto del identificador para el error del correo (Ej. document.getElementById("email"))
 *	Si es obligatorio. 1-No permite estar vacio|0-permite estar vacio
 * Devuelve:
 * 	1-Todo correcto
 * 	0-Incorrecto
 */
function validate_email(mail,id_eobj,obligatory)
{
	/* Si no hay valor, lo damos por ok */ 
	if(mail=="" && obligatory==0)
	{
		id_eobj.innerHTML="";
		id_eobj.style.display="none";
		return 1;
	}

	var patron=new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\-])+\.)+([a-zA-Z0-9]{2,4})$/);
	if(patron.test(mail))
	{
		id_eobj.innerHTML="";
		id_eobj.style.display="none";
		return 1;
	}
	id_eobj.innerHTML="Indica una direcci&oacute;n de correo v&aacute;lida";
	id_eobj.style.display="block";
	return 0;
}

/**
 * Funcion que devuelve true o false dependiendo de si hay una opcion selecciada del radio
 * Tiene que recibir:
 * 	El nombre del formulario
 *	El nombre de la variable radio
 *	El objeto del identificador para el error (Ej. document.getElementById("efecha"))
 *	Texto del mensaje de error
 * Devuelve:
 * 	1-Todo correcto
 * 	0-Incorrecto
 */
function validate_radio(nameForm,name,id_eobj,error)
{
	var i;
	for(i=0;i<eval("document."+nameForm+"."+name+".length");i++)
	{
		if (eval("document."+nameForm+"."+name+"[i].checked"))
		{
			id_eobj.innerHTML="";
			id_eobj.style.display="none";
			return 1;
		}
	} 
	id_eobj.innerHTML=error;
	id_eobj.style.display="block";
	return 0;
}

/**
 * Funcion que recibiendo un campo del formulario, le da el foco.
 * Colocar en el final de la pagina web: 
 *	<script type="text/JavaScript">
 *	<!--
 *	window.onload=setfocusForm("formName","campo");
 * 	// -->
 *	</script>
 * Si no recibe el campo, selecciona el primer campo no oculto
 */
function setfocusForm(formularioNombre,campo) {
	if(!formularioNombre)
		formularioNombre=0;
	if(campo)
		document.forms[formularioNombre].elements[campo].focus();
	else{
		//Si existe algun formulario...
		if(document.forms[formularioNombre])
		{
			// Recorremos todos los campos del formulario
			for(i=0; i < document.forms[formularioNombre].length; i++)
			{
				if (document.forms[formularioNombre][i].type!="hidden" && document.forms[formularioNombre][i].name!=undefined)
				{
					document.forms[formularioNombre].elements[i].focus();
					break;
				}
			}
		}
	}
}
