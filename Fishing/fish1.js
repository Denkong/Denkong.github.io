var fish1 = new Fish1();

function Fish1(){

	


	

	this.push = function(target){
		var i = -1;
		while(objects[++i] != undefined);
		objects[i] = target;
	};
	

	this.render = function(ctx,mouse){
		for(var i = 0;i < maxID;i++){
			if(objects[i] == undefined) continue;
			if(objects[i].name != 'second') continue;
			var obj = objects[i];


			
			if (obj.theway['x']==-1) {obj.x-=obj.speed;ctx.drawImage(SecondFishPng,obj.x-FirstFishPng1.width/2,obj.y-FirstFishPng1.height/2);}
			if (obj.theway['x']==1) {obj.x+=obj.speed;ctx.drawImage(SecondFishPng1,obj.x-FirstFishPng.width/2,obj.y-FirstFishPng.height/2);}
			if (obj.theway['y']==-1) {obj.y-=obj.speed}
			if (obj.theway['y']==1) {obj.y+=obj.speed}
				
			if (obj.x < 0) {obj.theway['x']=1}
			if (obj.y < 0) {obj.theway['y']=1}
			if (obj.y > height) {obj.theway['y']=-1}
			if (obj.x > width) {obj.theway['x']=-1}

//ЩЕЛЧКИ МЫШИ
			if (mouse.x>=obj.x-FirstFishPng1.width/2 &&
				    	mouse.x<=obj.x+FirstFishPng1.width/2 &&
				    	mouse.y>=obj.y-FirstFishPng1.height/2 &&
				    	mouse.y<=obj.y+FirstFishPng1.height/2 &&
				    	mouse.x!=false && mouse.y!=false
				    	) {
									//console.log('x='+mouse.x+'y='+mouse.y);
									//console.log(">="+obj.x*3+"<="+(obj.x*3+FirstFishPng.width*3));
								//console.log(">="+obj.y*4+"<="+(obj.y*4+FirstFishPng.height*4));
				    	delete objects[i];
				    mouse.x=false;mouse.y=false;
				    score+=20;
				  }
			
			// УПЛЫВАЕТ ЕСЛИ ПРОШЛО 10сек
				  var date=new Date().getTime();
				  if(obj.oldtime!=date && date-1000>=obj.oldtime){
				  	obj.oldtime=date;
				  	obj.time+=1;
				  }
				  if (obj.time>=10) {
				  	if (obj.x<=width/2) {
				  	obj.theway['x']=-1;
				  	obj.x-=1;
				  	}else{
				  		obj.theway['x']=1;
				  		obj.x+=1;
				  	}
				  	if (obj.x>width || obj.x<0 ){delete objects[i];}
				  }

		}
				

	};


};

