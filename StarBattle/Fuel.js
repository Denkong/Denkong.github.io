var fuel = new Fuel();
/*
objects - массив обьектов
maxID - макс кол-во элементов
push - вызывается в render
getSize - получение количетсва обьектов если количество элементов меньше 5 в нашем случае
render - выполняется постоянно
*/
function Fuel(){
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
		
			obj.y+=1;
			ctx.drawImage(FuelPNG,obj.x-25,obj.y-25,50,50)

			// проверка на расстояние от пули до обьека и удаление
			var info = player.getMinInfo(obj);	
			if(info.dist <= obj.size){     
				delete this.objects[i];
				if (player.NowPosFill>=45) {player.NowPosFill=90;}
				else{player.NowPosFill+=45;}
			}
			
			//Удаление если вне экрана
			if(
				obj.x < 0 ||
				obj.x > width || obj.y > height
				)
			delete this.objects[i];
		
		}
		
		if(this.getSize() < 2){
			this.push({
				x:Math.random()*width,
				y:Math.random()*-500,
				size:25, //указываем размер при задевании пулей будет действие
			});
		}

	};
	
	
	
	
	
}