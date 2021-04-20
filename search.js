$(document).ready(function(){
	$('#pretraga1').click(function(){
		var text = document.getElementById("text1").value;
		if(text == "")
		{
			alert("Morate uneti nesto u polje za pretragu.");
		}
		else
		{
			pretraga();
			$('#rezultat').slideDown('slow');
		}
	});
	$('#kraj').click(function(){
		$('#rezultat').slideUp('slow');
		document.getElementById('text1').value = "";
	});
});
function pretraga(){
	if(window.XMLHttpRequest){
		var xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","search.xml",false);
	xmlhttp.send();
	var xmlDoc=xmlhttp.responseXML;
	
	prikaz(xmlDoc);
}
function prikaz(xmlDoc){
	stavke = xmlDoc.getElementsByTagName('stavka');
	vrednost = document.getElementById('text1').value;
	var k=0;
	var b=0;
	for(var i=0; i<stavke.length;i++){
		var ulaz = vrednost.toLowerCase();
		var stavka = stavke[i].getElementsByTagName('naziv')[0].childNodes[0].nodeValue.toLowerCase();
		if(ulaz==stavka){
			var n = stavke[i].getElementsByTagName('naziv')[0].childNodes[0].nodeValue;
			var o = stavke[i].getElementsByTagName('opis')[0].childNodes[0].nodeValue;
			var l = stavke[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;
			k++;
			break;
		}
		else{
			b++;
			if(b==stavke.length){
				break;
			}
		}
		
	}
	if(k==1){
		document.getElementById('naslovId').innerHTML = n;
		document.getElementById('opisId').innerHTML = o;
		document.getElementById('linkId').innerHTML = "<a href='"+l+"'>Kliknite ovde za više</a>";
	}
	else
	{
		document.getElementById('naslovId').innerHTML = "Greška!";
		document.getElementById('opisId').innerHTML = "Nema rezultata za ovu pretragu:"+vrednost+".";
	}
}