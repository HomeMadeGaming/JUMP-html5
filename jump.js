/**
 * @author HMG
 */

/**
 *THE MAIN GAME ENGINE 
 */

//Get canvas element and shape canvas.
var canvas = document.getElementById("canvas");
canvas.width = 1000;
canvas.height = 500;
var ctx = canvas.getContext("2d");

var defaultFont = "12px Arial";			//Set Default Font

ctx.font = defaultFont; 

/**OBJECT GAME: Specifies game mode*/
var game = 
{
	mode:0,			//Game Mode (0: Start Menu, 1: Game, 2: Pause Menu)
	FPS:60,			//FPS
};

//Prepare game audio
var jump = document.getElementById("jump");

//Draw Function of all objects grouped together
function draw()
{
	player.draw();
	floor.draw();
}

//Physics function of all objects grouped together
function physics()
{
	player.physics();
	floor.physics();
}

//Function: Clear the entire screen
function clearscreen()
{
	ctx.clearRect (0,0,1000,500);
}

//Function: Display pause menu
function pausemenu()
{
	clearscreen();
	ctx.fillText ("Paused: Press enter to resume play", 450,250);
}

//Tick: What occurs during each game tick
function tick()
{
	if (game.mode ===0)			//Start Menu
	{
		clearscreen();
		ctx.fillText ("Press enter to begin", 450,250);
	}
	if (game.mode == 1)			//Game
	{
		clearscreen();
		physics();
		draw();

	}
	
	
	if (game.mode == 2)			//Pause
	{
		pausemenu();
	}
	ctx.fillText ("Game Mode: " + game.mode, 10, 30);
}


    var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null ;

    var recursiveAnim = function() {
        tick();
        animFrame( recursiveAnim );
    };

    // start the game tick
    animFrame( recursiveAnim );
