/**
 * @author HMG
 */

/**
 *INFORMATION AND VARIABLES OF OR PERTAINING TO KEYSTROKES
 */

//Key condition. true=on, false=off
//Holds booleans for the required keystrokes
var key = 
{
	//default values
	A:false,
	S:false,
	D:false,
	W:false,
	Left:false,
	Right:false,
	Up:false,
	Down:false
};

//listen for key press
window.onkeydown = function(e){
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey){
		case 65: key.A=true;
		case 83: key.S=true;
		case 68: key.D=true;
		case 87: key.W=true;
		case 37: key.Left=true; //capitolize left and right because in lowercase they are keywords
		case 39: key.Right=true;
		case 38: key.Up=true;
		case 40: key.Down=true;
		case 13: game.mode=1;
		case 80: game.mode=2;
	}
};

//listen for key release
window.onkeyup = function(e){
	e = e || window.event;
	var getKey = e.keyCode;
	switch (getKey){
		case 65: key.A=false;
		case 83: key.S=false;
		case 68: key.D=false;
		case 87: key.W=false;
		case 37: key.Left=false;
		case 39: key.Right=false;
		case 38: key.Up=false;
		case 40: key.Down=false;
	}
};
