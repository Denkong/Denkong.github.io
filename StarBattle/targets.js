var targets = new Targets();
/*
objects - массив обьектов
maxID - макс кол-во элементов
push - вызывается в update
getSize - получение количетсва обьектов если количество элементов меньше 5 в нашем случае
update(dt) - выполняется постоянно
render - выполняется постоянно
*/
function Targets(){
	this.objects = [];
	this.maxID = 20;



	this.push = function(target){
		var i = -1;
		while(this.objects[++i] != undefined);
		this.objects[i] = target;
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
			if (obj.imageID==1) {		
				ctx.drawImage(EnemyShipPNG1,obj.x-40,obj.y-40,80,80)
			};
			if (obj.imageID==2) {		
				ctx.drawImage(EnemyShipPNG2,obj.x-40,obj.y-40,80,80)
			};
			if (obj.imageID==3) {		
				ctx.drawImage(EnemyShipPNG3,obj.x-40,obj.y-40,80,80)
			};
			if (obj.imageID==4) {		
				ctx.drawImage(EnemyShipPNG4,obj.x-40,obj.y-40,80,80)
			};
			
			// проверка на расстояние от пули до обьека и удаление
			var info = bullets.getMinInfo(obj);	
			if(info.dist <= obj.size){
				player.score+=5;     
				info.object.remove = true;
				delete this.objects[i];
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

			// ОГОНЬ
			if (Math.random()<=0.002) {
				bulletsenemy.push({
					x:obj.x,
					y:obj.y
				});
			}
		
		}
		
		if(this.getSize() < 3){
			this.push({
				x:Math.random()*500+width,
				y:Math.random()*height,
				size:50, //указываем размер при задевании пулей будет действие
				imageID:Math.floor(Math.random()*(5-1)+1)
			});
		}

	};
}