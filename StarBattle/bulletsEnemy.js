var bulletsenemy = new BulletsEnemy();
/*
objects[] - массив обьектов-пуль
maxID -максимальное количесво пуль на экране
---функции---
push - вызывается в player при нажатии на пробел
render - постоянно выполняется
getMinInfo - возвращает растояние до пули и саму пулю как обьект
*/
function BulletsEnemy(){
	this.objects = [];
	this.maxID = 20;

	this.push = function(bullet){
		var id = -1;
		//увеличивает значение на 1 если сдедующий объект неопределен и затем работает с ней
		while(this.objects[++id] != undefined);
		this.objects[id] = bullet;
	};
	
	this.render = function(ctx){
		for(var i = 0;i <= this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			var obj = this.objects[i];
			obj.x -= 2 ;
			ctx.drawImage(bulletsPNG,obj.x-bulletsPNG.width/2,obj.y-bulletsPNG.height/2);
			
			//удаление усли вне поля или если поступилла remove, те задела что либо
			if(
				obj.x < 0 || obj.y < 0 ||
				 obj.y > height ||
				obj.remove)
			delete this.objects[i];
		}
	};
	
	
	this.getMinInfo = function(o){
		var dist = 99999;
		var obj;
		for(var i = 0;i <= this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			var d = Math.sqrt(
				(o.x - this.objects[i].x)*(o.x - this.objects[i].x)+
				(o.y - this.objects[i].y)*(o.y - this.objects[i].y)
			);
			if(d < dist){
				dist = d;
				obj = this.objects[i];
			}
		}
		return {dist:dist,object:obj};
	};
	
}

