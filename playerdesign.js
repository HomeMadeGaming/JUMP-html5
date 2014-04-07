/**
 * @author HMG
 */


/**
 *INFORMATION OF OR PERTAINING TO PLAYER DESIGN AND PHYSICS 
 */

var player =
{
	x:20,			//REMEMBER: "x" should be the center of the player's body.
	y:100,			//REMEMBER: "y" should be the player's feet.
	vx: 0,
	vy: 0,
	ax: 0,
	ay: -0.1,
	gold:0,
	silver:0,
	friction:0,
	planted:0,
	draw: function() 			//PLAYER GRAPHICS --- needs some work.
		/*
		 * Subtracts true value from canvas height to make conceptualizing easier.
		 */
	{
		ctx.fillStyle = "red";
		ctx.fillRect (this.x-5,(500-this.y)-10,10,10);
		ctx.fillStyle = "blue";
		ctx.fillRect (this.x -2, (500-this.y)-8, 2,2);
		ctx.fillRect (this.x +2, (500-this.y)-8, 2, 2);
		ctx.fillRect (this.x, (500-this.y)-3, 4,2);
		ctx.fillStyle = "gold";
		ctx.fillText ("Gold: " + this.gold, 10, 10);
		ctx.fillStyle = "silver";
		ctx.fillText ("Silver: " + this.silver, 10, 20);
		
	},

};