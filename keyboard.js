/**
 * @author HMG
 */

/**
 *INFORMATION AND VARIABLES OF OR PERTAINING TO KEYSTROKES
 */

//Key condition. 0: off, 1: on.
var key = 
{
	a:0,
	s:0,
	d:0,
	w:0,
	left:0,
	right:0,
	up:0
};

//listen for key press
window.onkeydown = function(e){
	e = e || window.event;
	var getKey = e.keyCode;
	if (getKey === 65)
	{
		key.a = 1;
	}
	if (getKey === 68)
	{
		key.d = 1;
	}
	if (getKey === 87)
	{
		key.w = 1;
	}
	if (getKey === 37)
	{
		key.left = 1;
	}
	if (getKey === 39)
	{
		key.right = 1;
	}
	if (getKey === 13)
	{
		game.mode = 1;
	}
	if (getKey === 80)
	{
		game.mode = 2;
	}
		
};

//listen for key release
window.onkeyup = function(e){
	e = e || window.event;
	var getKey = e.keyCode;
	if (getKey === 65)
	{
		key.a = 0;
	}
	if (getKey === 68)
	{
		key.d = 0;
	}
	if (getKey === 87)
	{
		key.w = 0;
	}		
		if (getKey === 37)
	{
		key.left = 0;
	}
	if (getKey === 39)
	{
		key.right = 0;
	}
};