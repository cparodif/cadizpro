
function S(s){
	document.write(s);
}
function MARGEN() {
	S(" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ");
}
function LN(fun_description, fun_url) {
	cuenta+=1;
	S('<a href="'+fun_url+'" target="_blank"> <b>'+fun_description+'</b></a><br>');
}
function L(fun_url, fun_description) {
	MARGEN();
	S('<a href="'+fun_url+'" target="_blank">'+fun_description+'</a><br>');
}
function TEL(fun_tel) {
  MARGEN();
	S('<a href="tel:'+fun_tel+'" >Tel: <b>'+fun_tel+'</b></a><br>');
}

function I(fun_txt,fun_img){
	if (fun_img !=""){
		S("<td align='center'  valign='top' width='300' height='250'>");
		S("<img src='images/images400"+fun_img);
		S("' width='300' border='1'><br>Imagen: "+fun_txt+"</td>");
	}else{
		S("<td align='center'  valign='top' width='300' height='250'>");
		S("<img src='images/mercadocentral.jpg");
		S("' width='300' border='1'><br>Mercado Central de Cádiz </td>");
  }
}
function I9(fun_txt,fun_img){
	if (fun_img !=""){
		S("<td align='center'  valign='top' width='900' colspan='3'>");
		S("<img src='images/images900"+fun_img);
		S("' width='900' border='1'><br>Imagen: "+fun_txt+"</td>");
	}
}

function E6(fun_txt,fun_img){
	if (fun_img !=""){
		S("<br><img src='images/images600"+fun_img);
		S("' width='600' border='1'><br>Imagen: "+fun_txt);
	}
}


function IP(fun_puesto){
	var f = new Date();
	var m = f.getMonth() + 1;
  var mes = (m < 10) ? '0' + m : m;
  var_dia = f.getDate() + "/" + mes + "/" + f.getFullYear();
	var_diai = f.getFullYear() + "" + mes + "" + f.getDate();
	var var_diamilisegundo = var_diai + ""+f.getHours()+"" +f.getMinutes()+""+f.getMilliseconds();
  if (fun_puesto !=""){
		S("<td align='center' width='300' height='250' valign='bottom' style='background-image: url(images/fondomercadocentral.png); background-repeat: no-repeat; '>");
    //S("<a href='"+urlDestino+"fotojpg.php?fotojpg="+fun_puesto+var_diamilisegundo+"' target='_blank'>");
		S("<img src='"+urlDestino+"fotojpg.php?fotojpg="+fun_puesto+var_diamilisegundo);
		//S("' alt='Esperamos que los propietarios de este puesto nos faciliten los precios. ' width='300' border='0'></a><br>" + var_dia +" puesto nº "+fun_puesto+ ".</td>");
		S("' alt='Esperamos que este puesto facilite los precios de hoy. ' width='300' border='0'><br>" + var_dia +" puesto nº "+fun_puesto+ ".</td>");
	}else{
		S("<td align='center'>-</td>");
	}
}
function P(fun_txt){
  MARGEN();
 	S(fun_txt+"<br>");
}
function V(par_dia,par_puesto){
	var f = new Date();
	var var_diamilisegundo = par_dia + ""+f.getHours()+"" +f.getMinutes()+""+f.getMilliseconds();
	if (par_puesto !=""){
    S("<video controls width='300'>");
    //S("<source src='"+urlDestino+"videomp4.php?videomp4="+fun_puesto+var_diamilisegundo);
		S("<source src='"+urlDestino+"videos/"+par_puesto+".mp4"+"' type='video/mp4' >");
		//S("<source src='http://localhost/123abc.es/precios/videos/"+par_puesto+".mp4"+"' type='video/mp4' >");
    S("Este navegador no implementa la etiqueta video.");
    S("</video>"+"<br>Video:" + par_dia +" puesto nº "+par_puesto+ ".");
  }else{
	  S("<td align='center'>-</td>");
  }
}
function VTD(fun_dia,fun_puesto){
  S("<td align='center' width='300' height='250' valign='top' style='background-image: url(images/fondomercadocentral.png); background-repeat: no-repeat; '>");
  V(fun_dia,fun_puesto);
	S("</td>");
}
function TI(){
	P("Los precios que aparecen en estas fotos pueden no estar actualizados. Cambian diaríamente. Fíjese en las fechas de las imágenes.");
  P("Puestos abiertos al público de lunes a viernes de 9:00 a 14:00 horas y sábados de 9:00 a 15:00.");
	S("<table>");
	S("<tr >");
}
function TL(){
	S("</tr><tr>");
}
function TX($parNumFilas,contenidoPrecios){
	S("<td rowspan='"+$parNumFilas+"' width='300' height='250' align='left'  valign='top'>");
	S(unescape(contenidoPrecios));
	S("</td> ");
}
function TF(){
	S("</tr><tr><td><hr></td> <td><hr></td> <td><hr></td> </tr></table><br>");
}
