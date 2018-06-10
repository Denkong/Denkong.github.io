var asteroid = new Asteroid();
/*
objects - массив обьектов
maxID - макс кол-во элементов
push - вызывается в render
getSize - получение количетсва обьектов если количество элементов меньше 5 в нашем случае
render - выполняется постоянно
*/
function Asteroid(){
	this.objects = [];
	this.maxID = 20;
	

	this.push = function(target){
		var i = -1;
		while(this.objects[++i] != undefined);
		this.objects[i] = target;
		this.objects[i].deathshoot=0;
	};

	this.getSize = function(){
		var size = 0;
		for(var i = 0;i < this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			size++;
		}
		return size;
	};
	


	this.render = function(ctx){
		for(var i = 0;i < this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			var obj = this.objects[i];
		
			obj.x -=1;
			// ctx.drawImage(AsteroidPNG,obj.x-AsteroidPNG.width/2,obj.y-AsteroidPNG.height/2)
			if (obj.imageID==1) {		
				ctx.drawImage(AsteroidPNG1,obj.x-25,obj.y-25,50,50)
			};
			if (obj.imageID==2) {		
				ctx.drawImage(AsteroidPNG2,obj.x-25,obj.y-25,50,50)
			};
			if (obj.imageID==3) {		
				ctx.drawImage(AsteroidPNG3,obj.x-25,obj.y-25,50,50)
			};
			if (obj.imageID==4) {		
				ctx.drawImage(AsteroidPNG4,obj.x-25,obj.y-25,50,50)
			};

			// проверка на расстояние от пули до обьека и удаление
			var info = bullets.getMinInfo(obj);	
			if(info.dist <= obj.size){
					info.object.remove = true;
					obj.deathshoot+=1;			
			}
			if (obj.deathshoot>=2) {
					player.score+=10;     
					delete this.objects[i];
					obj.deathshoot=0;
					destoysound.stop();
					destoysound.play();
			}
			// проверка на расстояние от игрока до обьека и удаление
			var infoplayer = player.getMinInfo(obj);	
			if(infoplayer.dist <= obj.size){     
				if (player.NowPosFill<=45) {player.NowPosFill=0} else {player.NowPosFill -= 45;}
				delete this.objects[i];
				destoysound.stop();
				destoysound.play();
			}
			
			//Удаление если вне экрана
			if(
				obj.x < 0 || obj.y < 0 ||
				 obj.y > height
				)
			delete this.objects[i];
		}
		
		if(this.getSize() < 3){
			this.push({
				x:Math.random()*500+width,
				y:Math.random()*height,
				size:25, //указываем размер при задевании пулей будет действие
				imageID:Math.floor(Math.random()*(5-1)+1)
			});
		}


	};
	
	
	
	
	
}