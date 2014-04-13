/**
 * @author HMG
 */
//THE MAIN GAME ENGINE 

var canvas = document.getElementById("canvas"); canvas.width = 1000; canvas.height = 500; //Get canvas element and shape canvas.
var ctx = canvas.getContext("2d");

var defaultFont = "12px Arial";	ctx.font = defaultFont; 		//Set Default Font
var release = false;
var game = { 		//OBJECT GAME: Specifies game mode
	mode:0,			//Game Mode (0: Start Menu, 1: Game, 2: Pause Menu)
	FPS:60,			//FPS
	track: document.getElementById("tangent"),
};

var particles = 5;
var menu = {
	select: 1,
	layer: 1,
	track: document.getElementById("menuMusic"),
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

function startmenu(){		//Function: Display start menu
	menu.track.play();

	if (menu.layer === 1)			//main menu
		{
		if (menu.select > 2){
			menu.select = 2;
		}
		if (menu.select < 1){
			menu.select = 1;
		}
	
		if (menu.select === 1){
			ctx.fillStyle = "green";
			if (key.enter === true && release === true){
				game.mode = 1;
				menu.track.pause();
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200,100,600,100);
	
		if (menu.select === 2){
			ctx.fillStyle = "green";
			if (key.enter === true && release === true)	{
				menu.layer = 2;
			}
		}
		else {
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200, 300, 600, 100);
	
		ctx.fillStyle = "white";
		ctx.font = "60px Arial";
		ctx.fillText ("Start Game", 360,180);
		ctx.fillText ("Settings", 400,380);
	}
	
	if (menu.layer === 2){
		if (menu.select > 3){
			menu.select = 3;
		}
		if (menu.select < 1){
			menu.select = 1;
		}
		
		if (menu.select ===1){
			ctx.fillStyle = "green";
			if (key.left === 1 && release === true && menu.track.volume > 0){
				menu.track.volume = ((menu.track.volume * 10) - 1)/10;			
			}
			if (key.right === 1 && release === true && menu.track.volume < 1){
				menu.track.volume = ((menu.track.volume * 10) + 1)/10;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		game.track.volume = menu.track.volume;
		ctx.fillRect(200,50,600,100);
		
		if (menu.select === 2){
			ctx.fillStyle = "green";
			if (key.left === 1 && release === true && jump.volume > 0){
				jump.volume = ((jump.volume * 10) - 1)/10;			
			}
			if (key.right === 1 && release === true && jump.volume < 1){
				jump.volume = ((jump.volume * 10) + 1)/10;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200,200,600,100);
		
		if (menu.select === 3){
			ctx.fillStyle = "green";
			if (key.enter === true && release === true){
				menu.select = 1;
				menu.layer = 1;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200,350,600,100);
		
		
		
		ctx.fillStyle = "white";
		ctx.font = "60px Arial";
		ctx.fillText("Music: " + game.track.volume * 10, 360, 130);
		ctx.fillText("Sound Effects: " + jump.volume * 10, 260, 280);
		ctx.fillText("Back", 440, 430);
	}	


	
	if (key.down === 1 && release === true)
	{
		menu.select += 1;
	}
	if (key.up === 1 && release === true)
	{
		menu.select -= 1;
	}
	if (key.up === 0 && key.down === 0 && key.left === 0 && key.right === 0 && key.enter === false)
	{
		release = true;
	}
	else{
		release = false;
	}

}

function pausemenu(){			//Function: Display pause menu
	clearscreen(); ctx.fillText ("Paused: Press enter to resume play", 450,250);
	
		if (menu.select > 3){
			menu.select = 3;
		}
		if (menu.select < 1){
			menu.select = 1;
		}
	
		if (menu.select ===1){
			ctx.fillStyle = "green";
			if (key.left === 1 && release === true && menu.track.volume > 0){
				menu.track.volume = ((menu.track.volume * 10) - 1)/10;			
			}
			if (key.right === 1 && release === true && menu.track.volume < 1){
				menu.track.volume = ((menu.track.volume * 10) + 1)/10;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		game.track.volume = menu.track.volume;
		ctx.fillRect(200,50,600,100);
		
		if (menu.select === 2){
			ctx.fillStyle = "green";
			if (key.left === 1 && release === true && jump.volume > 0){
				jump.volume = ((jump.volume * 10) - 1)/10;			
			}
			if (key.right === 1 && release === true && jump.volume < 1){
				jump.volume = ((jump.volume * 10) + 1)/10;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200,200,600,100);
		
		if (menu.select === 3){
			ctx.fillStyle = "green";
			if (key.enter === true && release === true){
				menu.select = 1;
				game.mode = 1;
			}
		}
		else{
			ctx.fillStyle = "grey";
		}
		ctx.fillRect(200,350,600,100);
		
		ctx.fillStyle = "white";
		ctx.font = "60px Arial";
		ctx.fillText("Music: " + game.track.volume * 10, 360, 130);
		ctx.fillText("Sound Effects: " + jump.volume * 10, 260, 280);
		ctx.fillText("Back", 440, 430);
		
	
	
	if (key.down === 1 && release === true)
	{
		menu.select += 1;
	}
	if (key.up === 1 && release === true)
	{
		menu.select -= 1;
	}
	if (key.up === 0 && key.down === 0 && key.left === 0 && key.right === 0 && key.enter === false)
	{
		release = true;
	}
	else{
		release = false;
	}
}

function tick(){			//Tick: What occurs during each game tick
	if (game.mode ===0){	//Start Menu
		clearscreen(); startmenu();
	}
	
	if (game.mode == 1){		//Game
		clearscreen(); physics(); draw();
	}
	
	if (game.mode == 2){		//Pause
		pausemenu();
	}
	ctx.font = defaultFont;
	ctx.fillStyle = "black";
	ctx.fillText ("Game Mode: " + game.mode, 10, 30); //Displays game mode for debugging purposes.
	ctx.fillText ("Map x " + map.x + "and y " + map.y, 10, 40); //Display map for debugging purposes.
	ctx.fillText ("down:" + key.down + " up:" + key.up + " p:" + key.p + " enter:" + key.enter + "layer" + menu.layer + "release: " + release, 10, 50);
	ctx.fillText ("track time: " + game.track.currentTime, 10, 60);
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
