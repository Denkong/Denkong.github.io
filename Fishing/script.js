$(document).ready(function() {

	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext("2d");
	// определяем переменные для обьектов
	mouseXY={'x':false,'y':false};
	objects = [];
	mass=[-1,1];
	maxID=10;
	time=10;
	oldtime=0;
	score=0;
	getSize = function(){
		var size = 0;
		for(var i = 0;i < this.maxID;i++){
			if(objects[i] == undefined) continue;
			size++;
		}
		return size;
	};

$('#canvas').click(function(e){
						var x=e.pageX - $(this).offset().left;
				    var y=e.pageY - $(this).offset().top;
				    mouseXY={'x':x,
				    	'y':y}
				    console.log(mouseXY);
				  });


	GemeGo=setInterval(function(){
		
		ctx.drawImage(fonJPG,0,0,width,height);

		var rand=Math.floor(Math.random()*3);
		var deway=Math.floor(Math.random()*2);
		var speedrand=Math.random()*0.5+0.1;
		// console.log(rand)
		if(getSize() < maxID){
			switch(rand){
				case(0):
						fish.push({
							x:Math.random()*width,
							y:Math.random()*height,
							theway:{'x':mass[deway],'y':mass[deway]},
							time:0,
							oldtime:0,
							name:'first',
							speed:speedrand+0.1
						});
						
				break;
				case(1):
					fish1.push({
						x:Math.random()*width,
						y:Math.random()*height,
						theway:{'x':mass[deway],'y':mass[deway]},
						time:0,
						oldtime:0,
						name:'second',
						speed:speedrand+1
					});
						
				break;
				case(2):
				fish2.push({
						x:Math.random()*width,
						y:Math.random()*height,
						theway:{'x':mass[deway],'y':mass[deway]},
						time:0,
						oldtime:0,
						name:'four',
						speed:speedrand
					});
					
				break;
			}
			

		}

		fish.render(ctx,mouseXY);
		fish1.render(ctx,mouseXY);
		fish2.render(ctx,mouseXY);

		if (mouseXY.x!=false && mouseXY.y!=false) {mouseXY.x=false;mouseXY.y=false;}
	},10);


	
});