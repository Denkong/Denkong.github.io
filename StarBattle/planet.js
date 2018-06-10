var planet = new Planet();
/*

objects - массив обьектов
maxID - макс кол-во элементов
push - вызывается в update
getSize - получение количетсва обьектов если количество элементов меньше 5 в нашем случае
update(dt) - выполняется постоянно
render - выполняется постоянно
*/
function Planet(){
	this.objects = [];
	this.maxID = 20;
	
	this.push = function(target){	
		var i = -1;
		while(this.objects[++i] != undefined);
		this.objects[i] = target;
	};

	this.push({
				x:450,
				y:10,
				WidthHeight:50,
			});
	this.push({
					x:500,
					y:60,
					WidthHeight:100,
				});
	this.push({
					x:650,
					y:150,
					WidthHeight:150,
				});
	this.push({
					x:850,
					y:250,
					WidthHeight:200,
				});
	this.push({
					x:1050,
					y:350,
					WidthHeight:250,
				});

	
	this.render = function(ctx){
		for(var i = 0;i <= this.maxID;i++){
			if(this.objects[i] == undefined) continue;
			var obj = this.objects[i];
			if (obj.WidthHeight==50){
				obj.x -=0.01;
				ctx.drawImage(PlanetPNG1,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight,obj.WidthHeight);
			}
			if (obj.WidthHeight==100){
				obj.x -=0.01;
				ctx.drawImage(PlanetPNG2,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight,obj.WidthHeight);
			}
			if (obj.WidthHeight==150){
				obj.x -=0.015;
				ctx.drawImage(PlanetPNG3,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight,obj.WidthHeight);
			}
			if (obj.WidthHeight==200){
				obj.x -=0.02;
				ctx.drawImage(PlanetPNG4,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight+50,obj.WidthHeight);
			}
			if (obj.WidthHeight==250){
				obj.x -=0.025;
				ctx.drawImage(PlanetPNG5,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight,obj.WidthHeight);
			}
			// ctx.drawImage(PlanetPNG,obj.x-obj.WidthHeight/2,obj.y-obj.WidthHeight/2,obj.WidthHeight,obj.WidthHeight);

			//Удаление если вне экрана
			if(obj.x < 0 || obj.y < 0 || obj.y > height)
				delete this.objects[i];
			}

	};
	
	
	
	
	
}