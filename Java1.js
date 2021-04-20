/* drop-down meni */
$(document).ready(function(){
	$('#futer1 ul li:last').css('paddingTop','3px');
	$('#d1').hide();
	$('#podmeni1').hide();
	$('#podmeni2').hide();
	$('#polje').hide();
	$('#pod1').hover(function(){
		$('#podmeni1').stop(true,true).slideDown();
	},
	function(){
		$('#podmeni1').stop(true,true).hide();
	});
	$('#pod2').hover(function(){
		$('#podmeni2').stop(true,true).slideDown();
	},
	function(){
		$('#podmeni2').stop(true,true).hide();
	});
	$('#d').hover(function(){
		$('#d1').stop(true,true).slideDown();
	},
	function(){
		$('#d1').stop(true,true).hide();
	});
	
})
/* forma na pocetnoj */
var k=0;
function dodaj(){
    var e = document.forma.e;
	var c = document.forma.c;
	var b = document.forma.b;
	var a=0;
	
	for(var i=0; i< e.length; i++){
		if(e[i].checked)
			a++;
	}
	for(var i=0; i< c.length; i++){
		if(c[i].checked)
			a++;
	}
	for(var i=0; i< b.length; i++){
		if(b[i].checked)
			a++;
	}
	if(a>2)
	{
	k++;
	if(k==1){

		$('#polje').slideDown();
		setTimeout(function(){
		$('#polje').slideUp();
		}, 3000);
		document.forma.reset();
	}
	else{
		alert("Morate ucitati ponovo stranu da bi glasali.");
		document.forma.reset();
	}	
	}
	else
	{alert("Morate selektovati ponudjeno iz ankete.");}
}
/* forma o autoru */
function dodaj1(){
	var good = document.getElementById("Good");
	var bed = document.getElementById("Bed");
	var vrednost1 = good.innerHTML;
	var vrednost2 = bed.innerHTML;
	if(!good.checked && !bed.checked)
		alert("Morate selektovati jedno od ponudjenih.");
	if(good.checked){
		document.getElementById("Good1").innerHTML = vrednost1 + 1;
		$('#polje1').slideDown();
		setTimeout(function(){
		$('#polje1').slideUp();
		}, 3000);
		forma.reset();
	}
	if(bed.checked){
		document.getElementById("Bed1").innerHTML = vrednost2 + 1;
		$('#polje1').slideDown();
		setTimeout(function(){
		$('#polje1').slideUp();
		}, 3000);
		forma.reset();
	}
	document.getElementById("glasaj").disabled = true;
}
/* Registracija */
function provera3(){
var regIme = /^[A-Z]{1}[a-z]{2,14}$/;
var regPrezime = /^[A-Z]{1}[a-z]{3,17}$/;
var regEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;  /*/^([A-z]{1})*([a-z][0-9])+@[a-z]+\.([a-z]+)*\.[a-z]{2,}$/;*/
var regKIme = /^[A-z]{3,}([A-z]|[0-9])*$/;
var regLozinka = /^[A-z]{1}([A-z]|[0-9])*$/;

var ime = document.getElementById('tbIme');
var prezime = document.getElementById('tbPrezime');
var email = document.getElementById('tbEmail');
var datumRodjenja = document.getElementById('datumRodjenja');
var lozinka = document.getElementById('tbLozinka');
var lozinka1 = document.getElementById('tbLozinka1');
var KIme = document.getElementById('tbKorisnickoIme');
var k = 0;
if(!ime.value.match(regIme)){
	ime.style.border = "1px solid red";
	document.getElementById('ime').style.display = "block";
}
else
{
	ime.style.border = "none";
	document.getElementById('ime').style.display = "none";
	k++;
}
if(!prezime.value.match(regPrezime)){
	prezime.style.border = "1px solid red";
	document.getElementById('prezime').style.display = "block";
}
else
{
	prezime.style.border = "none";
	document.getElementById('prezime').style.display = "none";
	k++;
}
if(!email.value.match(regEmail)){
	email.style.border = "1px solid red";
	document.getElementById('email').style.display = "block";
}
else
{
	email.style.border = "none";
	document.getElementById('email').style.display = "none";
	k++;
}
if(!lozinka.value.match(regLozinka)){
	lozinka.style.border = "1px solid red";
	document.getElementById('lozinka').style.display = "block";
}
else
{
	lozinka.style.border = "none";
	document.getElementById('lozinka').style.display = "none";
	k++;
}
if(!KIme.value.match(regKIme)){
	KIme.style.border = "1px solid red";
	document.getElementById('kime').style.display = "block";
}
else
{
	KIme.style.border = "none";
	document.getElementById('kime').style.display = "none";
	k++;
}
if(lozinka.value!=lozinka1.value){
	lozinka1.style.border = "1px solid red";
	document.getElementById('lozinka1').style.display = "block";
}
else
{
	lozinka1.style.border = "none";
	document.getElementById('lozinka1').style.display = "none";
	k++;
}
if(k>5){
	$('#ispis').slideDown();
		setTimeout(function(){
		$('#ispis').slideUp();
		}, 3000);
		form2.reset();
}
}
/* Prijavljivanje */
function provera4(){
var regKIme = /^[A-z]{3,}([A-z]|[0-9])*$/;
var regLozinka = /^[A-z]{1}([A-z]|[0-9])*$/;

var lozinka2 = document.getElementById('tbLozinka2');
var KIme2 = document.getElementById('tbKorisnickoIme2');
var k = 0;

if(!lozinka2.value.match(regLozinka)){
	lozinka2.style.border = "1px solid red";
	document.getElementById('lozinka2').style.display = "block";
}
else
{
	lozinka2.style.border = "none";
	document.getElementById('lozinka2').style.display = "none";
	k++;
}
if(!KIme2.value.match(regKIme)){
	KIme2.style.border = "1px solid red";
	document.getElementById('kime2').style.display = "block";
}
else
{
	KIme2.style.border = "none";
	document.getElementById('kime2').style.display = "none";
	k++;
}
if(k>1){
	$('#ispis2').slideDown();
		setTimeout(function(){
		$('#ispis2').slideUp();
		}, 3000);
		form3.reset();
}
}