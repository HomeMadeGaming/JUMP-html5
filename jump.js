/**
 * @author HMG
 */
//THE MAIN GAME ENGINE 

var canvas = document.getElementById("canvas"); canvas.width = 1000; canvas.height = 500; //Get canvas element and shape canvas.
var ctx = canvas.getContext("2d");

var defaultFont = "12px Arial";	ctx.font = defaultFont; 		//Set Default Font

var game = { 		//OBJECT GAME: Specifies game mode
	mode:0,			//Game Mode (0: Start Menu, 1: Game, 2: Pause Menu)
	FPS:60,			//FPS
};

var jump = document.getElementById("jump"); //Prepare game audio

function draw(){		//Draw Function of all objects grouped together
	player.draw(); floor.draw();
}

function physics(){ 	//Physics function of all objects grouped together
	player.physics(); floor.physics();
}

function clearscreen(){			//Function: Clear the entire screen
	ctx.clearRect (0,0,1000,500);
}

function pausemenu(){			//Function: Display pause menu
	clearscreen(); ctx.fillText ("Paused: Press enter to resume play", 450,250);
}

function tick(){			//Tick: What occurs during each game tick
	if (game.mode ===0){	//Start Menu
		clearscreen(); ctx.fillText ("Press enter to begin", 450,250);
	}
	
	if (game.mode == 1){		//Game
		clearscreen(); physics(); draw();
	}
	
	if (game.mode == 2){		//Pause
		pausemenu();
	}
	
	ctx.fillText ("Game Mode: " + game.mode, 10, 30); //Displays game mode for debugging purposes.
}

var animFrame = window.requestAnimationFrame || 	//sets up animation frame, an alternative to setInterval
	window.webkitRequestAnimationFrame || 			//browsers never seem to agree
	window.mozRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	window.msRequestAnimationFrame ||
    null ;

    var recursiveAnim = function() { 		//set up animation loop
        tick(); animFrame( recursiveAnim );
    };

animFrame( recursiveAnim ); // start the game tick
