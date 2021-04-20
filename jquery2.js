$(document).ready(function(){
	/*$('#meni li:first a').css('background','rgba(18, 97, 195, 0.61)');*/
	$('#meni li a').click(function(){$(this).css('background','rgba(18, 97, 195, 0.61)');});
	var i=2;
	setInterval(function(){
			
			$('#slajder img').fadeOut('slow', function(){
			$(this).attr('src',"slike/"+i+".jpg").fadeIn('slow');
			})
			if(i==1){ $('#forma fieldset').css('border','4px solid blue');}
			if(i==2){ $('#forma fieldset').css('border','4px solid yellow');}
			if(i==3){ $('#forma fieldset').css('border','4px solid cyan');}
			if(i==4){ $('#forma fieldset').css('border','4px solid black');}
			if(i==5){ $('#forma fieldset').css('border','4px solid #822E2E');}
			if(i==6){ $('#forma fieldset').css('border','4px solid #842E3E');}
			if(i==7){ $('#forma fieldset').css('border','4px solid #767676');}
			if(i==8){ $('#forma fieldset').css('border','4px solid #00F');}
			if(i==9){ $('#forma fieldset').css('border','4px solid #167AC6');}
			if(i==10){ $('#forma fieldset').css('border','4px solid rgba(235, 235, 48, 0.89)');}
			if(i==11){ $('#forma fieldset').css('border','4px solid rgba(235, 21, 185, 0.87)');}
			if(i==12){ $('#forma fieldset').css('border','4px solid #7624F1');}
			if(i==13){ $('#forma fieldset').css('border','4px solid #999');}
			i++;
			if(i==14) i=1;
	}, 5000);
});
