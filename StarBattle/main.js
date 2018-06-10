

//запускается при клике начать игру
function init(){
	// setTimeout для ожидания завершения анимации кнопки
	setTimeout(function(){
	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');

	gamezone=document.getElementById('gamezone');
	gamezone.style.display = "flex";
	
	startdiv=document.getElementById("startdiv")
	startdiv.style.display = 'none'; 

	$('#results').css('display', 'none');

	//Пауза
	playpausebutton=document.getElementById('pauseplay');
	playpausebutton.onclick = playpause;//в utils

	//МузыкаВКЛ/ВЫКЛ
	soundbutton=document.getElementById('soundONOFF');
	soundbutton.onclick = soundONOFF;//в utils
	backgraundsound.play();
	backgraundsound.loop="true";

	// проигрыш
	endgame=document.getElementById('endgame');


	window.onkeydown = keyLogger.keyDownListener;
	window.onkeyup = keyLogger.keyUpListener;

	//установка позиций игрока в зависимости от размера канваса
	player.x = width/2;
	player.y = height/2;
	

	StartGame=setInterval(function(){
	renderGame();	
	},10);

	},500);

}

function renderGame(){
	// постоянное поддержание фона
	// ctx.fillStyle = "#c6c6c6";
	// ctx.fillRect(0,0,width,height);
	ctx.drawImage(backgraundPNG,0,0)
	ctx.strokeText("Топливо:", 10, 20);
	

	planet.render(ctx);
	bullets.render(ctx);
	player.render(ctx); 
	bulletsenemy.render(ctx);
	targets.render(ctx);
	friendship.render(ctx);
	asteroid.render(ctx);
	fuel.render(ctx);
}


