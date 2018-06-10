//фон
var backgraundPNG = new Image();
backgraundPNG.src = "images/backgraund/background-1.jpg";

//корабль игрока
var PlayerShipPNG = new Image();
PlayerShipPNG.src = "images/ship.png";

// выстрелы
var bulletsPNG = new Image();
bulletsPNG.src = "images/bullets.png";

// вражеский корабль
var EnemyShipPNG1 = new Image();
EnemyShipPNG1.src = "images/ENEMY_1.png";
var EnemyShipPNG2 = new Image();
EnemyShipPNG2.src = "images/ENEMY_2.png";
var EnemyShipPNG3 = new Image();
EnemyShipPNG3.src = "images/ENEMY_3.png";
var EnemyShipPNG4 = new Image();
EnemyShipPNG4.src = "images/ENEMY_4.png";

// дружеский корабль
var friendShipPNG = new Image();
friendShipPNG.src = "images/friendship.png";

// планеты
var PlanetPNG1 = new Image();
PlanetPNG1.src = "images/Planet/planet (1).png";
var PlanetPNG2 = new Image();
PlanetPNG2.src = "images/Planet/planet (2).png";
var PlanetPNG3 = new Image();
PlanetPNG3.src = "images/Planet/planet (3).png";
var PlanetPNG4 = new Image();
PlanetPNG4.src = "images/Planet/planet (4).png";
var PlanetPNG5 = new Image();
PlanetPNG5.src = "images/Planet/planet (5).png";

// топливо
var FuelPNG = new Image();
FuelPNG.src = "images/fuel1.png";

//астероиды
var AsteroidPNG1 = new Image();
AsteroidPNG1.src = "images/asteroid-1.png";
var AsteroidPNG2 = new Image();
AsteroidPNG2.src = "images/asteroid-2.png";
var AsteroidPNG3 = new Image();
AsteroidPNG3.src = "images/asteroid-3.png";
var AsteroidPNG4 = new Image();
AsteroidPNG4.src = "images/asteroid-4.png";

// backgraund sound
var backgraundsound=new Audio();
backgraundsound.src="sound/backgraund.mp3";


// destroy sound
var destoysound=new Audio();
destoysound.src="sound/destroy.mp3";
destoysound.stop=function(){
	this.pause();
	this.currentTime=0.0;
}

// shoot sound
var shootsound=new Audio();
shootsound.src="sound/shoot.mp3";


//функция паузы
function playpause() {
		if (playpausebutton.style.backgroundImage == 'url("images/play.png")') {
			StartGame=setInterval(function(){
			renderGame();	
			},10);
			playpausebutton.style.backgroundImage = "url(images/pause.png)";
			backgraundsound.play();
		}else{
	    clearInterval(StartGame);
	    playpausebutton.style.backgroundImage = "url(images/play.png)";
	    backgraundsound.pause();
	    destoysound.pause();
	    shootsound.pause();
		}
	};

//функция ВКЛ/ВЫКЛ звука
function soundONOFF() {
		if (soundbutton.style.backgroundImage == 'url("images/soundOFF.png")') {
			soundbutton.style.backgroundImage = "url(images/soundON.png)";
			backgraundsound.volume=1;
			destoysound.volume=1;
	    shootsound.volume=1;
		}else{
	    soundbutton.style.backgroundImage = "url(images/soundOFF.png)";
	    backgraundsound.volume=0;
	    destoysound.volume=0;
	    shootsound.volume=0;
		}
	};

// функция открытия доступа к кнопке 
function change(){
	console.log(document.getElementById('name').value);
	if (document.getElementById('name').value!='') {
		document.getElementById('ok').disabled=false;
	}else{
		document.getElementById('ok').disabled=true;
	}
}

// Сохранение
function getDate(){	
			$.ajax({
				url:"register.php",
				//dataType: 'json',
				type:"POST",
				data:({
					name:$("#name").val(),
					time:player.timerSec,
					score:player.score
				}),

				success: function(data){
					console.log(data)
					if (data=='true') {
						location.reload(); 
					}
				}	//функция успешна обработала все данные, пришел ответ
			})
};

// Получение
function getLead(){	
	if ($('#results').css('display')=='block') {
		$('#results').css('display', 'none');
	}else{
		$('#results').empty();
			$.ajax({
				url:"show_result.php",
				//dataType: 'json',
				type:"GET",
				data:({
					name:$("#name").val(),
					time:player.timerSec,
					score:player.score
				})
			})
			.done(function(data){
					var obj = jQuery.parseJSON( data);
					console.log(data)
					$('#results').append('<tr><td>Name</td><td>Score</td></tr>');
					for (var i = 0; i < obj.length; i++) {
							$('#results').append('<tr>')
							$('#results').append('<td>'+obj[i]['name']+'</td>');
							$('#results').append('<td>'+obj[i]['score']+'</td>');
							$('#results').append('</tr>')
					}
					$('#results').append('');
					$('#results').css('display', 'block');
				}	);//функция успешна обработала все данные, пришел ответ)
	}

};

// Получение времени
function getTime(){
	return new Date().getTime();
};
	