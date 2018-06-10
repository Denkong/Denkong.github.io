var player = new Player();
/*
x - текущее положение по x
y - текущее положение по y
lastFillTime - для убавления каждую секунду
NowPosFill - текущее положение топлива
timerSec - подсчет времени
score - подсчет очков
fire - для одиночного выстрела
render - выполняется постоянно
getMinInfo - принимает параматре вызывающего эту функцию, но в ней используется только x и у 
и передает дистанцию до обьекта и обьек в нашем случае сам корабль
*/
function Player(){
	this.x = 0;
	this.y = 0;
	this.lastFillTime = 0;
	this.NowPosFill=48;
	this.timerSec=0;
	this.score = 0;
	this.fire=true;

	
	this.render = function(ctx){
		// если нажата "вверх"
		if(keyLogger.keyStatus.up){
		this.y -= 5;
		}
		// если нажата "вниз"
		if(keyLogger.keyStatus.down){
			this.y += 5;
		}
			
		// если нажата "влево"
		if(keyLogger.keyStatus.left){
			this.x -= 5;

		}
		// если нажата "вправо"
		if(keyLogger.keyStatus.right){
			this.x += 5;
		}
		

		// выстрелы
		if(keyLogger.keyStatus.fire&& this.fire==true){
			shootsound.pause();
			shootsound.currentTime=0.0;
			shootsound.play();
			bullets.push({
				x:this.x,
				y:this.y, 
			});
			this.fire=false;
		}
		if (!keyLogger.keyStatus.fire) {this.fire=true;}
		
		// проверка на расстояние от пули врага до игрока
			var info = bulletsenemy.getMinInfo(this);	
			if(info.dist <= 35){     
				info.object.remove = true;
				if (this.NowPosFill<=45) {this.NowPosFill=0} else {this.NowPosFill -= 45;}
			}

		time = getTime();
	
		// работа с топливом
			if (this.NowPosFill<=0) {
				this.NowPosFill=0;
				clearInterval(StartGame);
				backgraundsound.pause();
				endgame.style.display = 'flex'; 
			}
			// каждую секунду убавляеи на 3
		if (time-this.lastFillTime>=1000) {	
			this.timerSec+=1;
			this.NowPosFill-=3;
			if (this.NowPosFill>=90) {this.NowPosFill=90;}
			this.lastFillTime=time;
		}
		// #f0f0f0
		ctx.fillStyle = "#ffffff";
		ctx.strokeStyle = "#f0f0f0";
		ctx.fillRect(60, 10, this.NowPosFill, 15);
		ctx.strokeRect(60, 10, 90, 15);
		ctx.strokeText(this.NowPosFill/3, 160, 20);
		ctx.strokeText("Время: "+this.timerSec, 180, 20);
		ctx.strokeText("Очки: "+this.score, 250, 20);
		// ограничение границ
		if (this.x>width) {this.x=width}
		if (this.y>height) {this.y=height}
		if (this.x<0) {this.x=0}
		if (this.y<0) {this.y=0}

			ctx.drawImage(PlayerShipPNG,this.x-PlayerShipPNG.width/2,this.y-PlayerShipPNG.height/2)
	};

	this.getMinInfo = function(o){
		
		//расстояние от двух точек в плоскости корень((Xb-Xa)^2 + (Yb-Ya)^2) 
		var d = Math.sqrt(
				(o.x - this.x)*(o.x - this.x)+
				(o.y - this.y)*(o.y - this.y)
			);

		return {dist:d-20,object:this};
	};
	
}