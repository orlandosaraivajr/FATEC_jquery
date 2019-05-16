function addBola(){
	var x = Math.random()*1000;
	var y = Math.random()*500;
	var cor = Math.floor(Math.random()*8);

	var bola = $('<div class="bola"></div>');
	bola.css('left', x+'px');
	bola.css('top', y+'px');

	switch(cor){
		case 0:
			bola.css('background-image', 'url(img/squirtle.png)');
			break;
		case 1:
			bola.css('background-image', 'url(img/charmander.png)');
			break;
		case 2:
			bola.css('background-image', 'url(img/bulbasaur.png)');
			break;
		case 3:
			bola.css('background-image', 'url(img/pichu.png)');
			break;
		case 4:
			bola.css('background-image', 'url(img/oddish.png)');
			break;	
		case 5:
			bola.css('background-image', 'url(img/eevee.png)');
			break;	
		case 6:
			bola.css('background-image', 'url(img/magikarp.png)');
			break;
		case 7:
			bola.css('background-image', 'url(img/gastly.png)');
			break;
	}

	bola.bind('click', function(){
		$(this).fadeOut('fast');
		placar++;
		updatePlacar();
	})
	$(document.body).append(bola);
}

function updatePlacar(){
	$('#placar').html(placar);
}

var placar = 0;
$(function(){
	$('#comecar').bind('click', function(){
		setInterval(addBola, 700);
	});	
});