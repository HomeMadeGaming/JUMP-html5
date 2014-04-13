/**
 * @author HMG
 */

/**
 *INFORMATION AND VARIABLES OF OR PERTAINING TO KEYSTROKES
 */

//Key condition. 0: off, 1: on.
var key = {
	d:false,
	left:0,
	right:0,
	up: 0,
	down: 0,
	enter: false,
	p: false,
};

window.onkeydown = function(e){			//listen for key press
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey){		
		case 68:
		key.d = true;
		break;
		
		case 37:
		key.left = 1;
		break;
		
		case 38:
		key.up = 1;
		break;
		
		case 39:
		key.right = 1;
		break;
		
		case 40:
		key.down = 1;
		break;
		
		case 13://START
		key.enter = true;
		break;
		
		case 80://PAUSE
		key.p = true;
		break;
	}
};


window.onkeyup = function(e){ 			//listen for key release
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey)	{
		case 68:
		key.d = false;
		break;
		
		case 37:
		key.left = 0;
		break;
		
		case 38:
		key.up = 0;
		break;
		
		case 39:
		key.right = 0;
		break;
		
		case 40:
		key.down = 0;
		break;
		
		case 13://START
		key.enter = false;
		break;
		
		case 80://PAUSE
		key.p = false;
		break;
	}
};