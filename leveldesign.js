/**
 * @author HMG
 */

/**
 *INFORMTION AND VARIABLES OF OR PERTAINING TO LEVEL DESIGN 
 */

//Map position x: horizontal, y: vertical.
var map = 
{
	x:1,
	y:1,
};

//Fan position
var fan = 
{
	top: 41,
	bottom:32,
	left: 7,
	right: 9,
};

//How the floor is drawn and how it interacts with the player.
var floor = {
	high: [20,20,20,20,05,10,15,20,20,20],
	low: [01,01,01,01,01,01,01,01,01,01],
	draw: function() 			//DRAW FLOOR
	{
		
		
		/*
		 * Draws platforms. Subtracts value from screen height so that higher numbers equal higher position
		 * This makes it easier to code level design later.
		 */
		for ( var i = 0; i<10; i++)
		{
			ctx.fillStyle = "green";
			ctx.fillRect ((i*100)+1,(500-(this.high[i]*10)),99,5);		
			ctx.fillStyle = "blue";
			ctx.fillRect ((i*100)+1, (500-(this.low[i]*10)),99,5);
		};
	},

};

//EVENTS ON MAP CHANGE
function changeMap()				
{
	if (player.x > 1000)
	{
		map.x+=1;
		player.x =10;
	}
	if (player.x <0)
	{
		map.x-=1;
		player.x = 990;
	}
	if (player.y > 500)
	{
		map.y+=1;
		player.y = 10;
	}
	if (player.y <0)
	{
		map.y-=1;
		player.y = 490;
	}
}

//Level design per map. LARGE FUNCTION. RUN THIS FUNCTION ONLY WHEN NECESSARY.
function loadMap()
{
	if (map.y === 1)
	{
		if (map.x === 1)
		{
			floor.high = [20,20,20,20,05,10,15,20,20,20];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
		}
		if (map.x === 2)
		{
			floor.high = [20,25,30,35,40,40,40,40,40,40];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
		}
		if (map.x === 3)
		{
			floor.high = [40,88,35,35,40,75,35,35,40,40];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
		}
	}
}