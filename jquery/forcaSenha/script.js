$(function(){
	$('#senha').bind('keyup', function(){
		var txt = $(this).val();
		// $('#forca').html(txt);
		var forca = 0;

		// letras, números, caracteres especiais, mínimo de caracteres

		if(txt.length > 6){
			forca +=1;
		}

		var reg = new RegExp(/[a-z]/i);
		if(reg.test(txt)){
			forca +=1;
		}

		var reg = new RegExp(/[0-9]/i);
		if(reg.test(txt)){
			forca +=1;
		}

		/*var reg = new RegExp(/^[a-z0-9]/i);
		if(reg.test(txt)){
			forca +=1;
		}*/
		$('#forca').html("Força: " +forca);
	});
	
});