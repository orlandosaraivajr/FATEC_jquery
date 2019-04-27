$(

function() {
	$('button').bind('click', function() {
		var altura = $('#altura').val().replace(',','.');
		var peso = $('#peso').val().replace(',','.');
			
		var imc = peso / ( altura * altura);

		$('#resultado').html("Seu IMC é: " + imc + " Kg/m2");

	});
}


);