<!--
var time = new Date();
randnum= (time.getTime());

function Item(){
this.length = Item.arguments.length 
for (var i = 0; i < this.length; i++)
  this[i] = Item.arguments[i]
}

function Fecha() {
var ndia = new Item('Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado')
var nmes = new Item('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre')
var ahora
var fecha = new Date()
var ano = fecha.getYear()
var mes = fecha.getMonth()
var dia = fecha.getDay()
var aux = "" + fecha

if (ano<10) {
 ano2 = "200" + eval(ano)
}
else if (ano<80) {// ano tiene 2 digitos 19xx (mas de 80)
 ano2 = "20" + ano
} 
else if (ano<=99) {// ano tiene 2 digitos 20xx (menor de 80)
 ano2 = "19" + ano
}
else if (ano<1000) {// ano tiene 3 digitos (100 es 2000)
 ano2 = eval(ano) + eval(1900)
}
else {// ano tiene 4 digitos
 ano2 = ano
}
ahora = ndia[dia] + ", " + eval(aux.substring(7, 10)) + " de " + nmes[mes] + " de " + ano2
return ahora
}

/*
 * Funcion que abre una pagina 
 * Tiene que recibir la url
 */
function down(url)
{
	window.open(url);
}

/**
 * Funcion para cargar un fichero en un iframe
 * Tiene que recibir el id del iframe y el nombre del fichero a cargar
 */
function iPrint(idiframe,file)
{
	var idFrame=document.getElementById(idiframe);
	idFrame.src=file
}
//-->
