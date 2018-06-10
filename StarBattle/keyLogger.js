var keyLogger = new KeyLogger();

function KeyLogger(){
	
	this.keyStatus = {up:false,down:false,left:false,right:false,fire:false};
	//описываем нажатие на клавишу(удержание)
	this.keyDownListener = function(e){
		//var key = e.keyCode ? e.keyCode : e.which; //В некоторых браузерах используется keyCode, другие используют which. Поэтому проверка
		//switch(key){
		switch(e.keyCode){
		case 87://w
		case 38://стрелка вверх
		//Up
			
			keyLogger.keyStatus.up = true;
		break;
		case 83://s
		case 40://стрелка вниз
		//Down
			
			keyLogger.keyStatus.down = true;
		break;
		case 65://a
		case 37://стрелка влево
		//Left
			
			keyLogger.keyStatus.left = true;
		break;
		case 68://d
		case 39://стрелка вправо
		//Rigth
			
			keyLogger.keyStatus.right = true;
		break;
		case 32: //пробел
		//Space
	
			keyLogger.keyStatus.fire = true;
		break;
		case 80: //p - пауза
			console.log('пауза')
			playpause();
		break;
		/* непонятно для чего используется
		default:
			console.log("Key:" + key);
			return !false;*/
	}
	//return !true;
	//console.log(keyLogger.keyStatus)
	};
	//описываем отпускание клавишы
	this.keyUpListener = function(e){
		var key = e.keyCode ? e.keyCode : e.which;
		switch(key){
		
		case 87:
		case 38:
		//Up
			keyLogger.keyStatus.up = false;
		break;
		case 83:
		case 40:
		//Down
			keyLogger.keyStatus.down = false;
		break;
		case 65:
		case 37:
		//Left
			keyLogger.keyStatus.left = false;
		break;
		case 68:
		case 39:
		//Rigth
			keyLogger.keyStatus.right = false;
		break;
		case 32:
		//Space
			keyLogger.keyStatus.fire = false;
		break;
		default:
			console.log("Key:" + key);
			return !false;
	}
	return !true;
	};
	
	
	
	
}