/**
 * @author HMG
 */

//INFORMTION AND VARIABLES OF OR PERTAINING TO LEVEL DESIGN 

var map ={ 			//Map position x: horizontal, y: vertical.
	x:1,
	y:1,
};


var fan ={			//Fan position
	top: 41,
	bottom:32,
	left: 7,
	right: 9,
};


var floor = {	//How the floor is drawn and how it interacts with the player.
	high: [20,20,20,20,05,10,15,20,20,20],
	low: [01,01,01,01,01,01,01,01,01,01],
	draw: function() {			//DRAW FLOOR		
		for ( var i = 0; i<10; i++)	{
			ctx.fillStyle = "green";
			ctx.fillRect ((i*100)+1,(500-(this.high[i]*10)),99,5);		//Subtracts value from scren height
			ctx.fillStyle = "blue";										//This makes it easier to code loadMap()
			ctx.fillRect ((i*100)+1, (500-(this.low[i]*10)),99,5);		//and design level concepts in head.
		};
	},

};

function changeMap(){			//EVENTS ON MAP CHANGE
	if (player.x > 1000)
	{
		map.x+=1;
		player.x =0;
	}
	if (player.x <0)
	{
		map.x-=1;
		player.x = 1000;
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


function loadMap(){//Level design per map. LARGE FUNCTION. RUN THIS FUNCTION ONLY WHEN NECESSARY.
	switch (map.y){		//Loads the first floor
		case 1:
		switch (map.x){
			case 1://FLOOR1
			floor.high = [20,20,20,20,05,10,15,20,20,20];
			floor.low = [01,01,01,01,01,01,01,01,01,01];			
			break;
			
			case 2:
			floor.high = [20,25,30,35,40,40,40,40,40,40];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 3:
			floor.high = [40,88,35,35,40,75,35,35,40,40];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 4:
			floor.high = [40,45,50,55,55,55,55,55,55,55];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 5:
			floor.high = [45,40,40,35,35,30,30,25,20,20];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 6:
			floor.high = [20,20,15,15,10,10,05,05,03,03];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 7:
			floor.high = [05,05,05,05,05,05,05,05,05,05];
			floor.low = [01,01,01,01,01,01,01,01,01,01];
			break;
			
			case 8:
			
			break;
			
			case 9:
			
			break;
			
			case 10:
			
			break;
		}
		break;
		
		case 2://FLOOR 2
		switch (map.x){
			case 1:
			
					
			break;
			
			case 2:
			
			
			break;
			
			case 3:
			
			
			break;
			
			case 4:
			floor.high = [20,20,20,20,15,10,05,10,15,20];
			floor.low = [70,10,05,70,05,05,02,03,04,05];
			break;
			
			case 5:
			
			break;
			
			case 6:
			
			break;
			
			case 7:
			
			break;
			
			case 8:
			
			break;
			
			case 9:
			
			break;
			
			case 10:
			
			break;
		}
		
		break;
		
		case 3://FLOOR 3
		switch (map.x){
			case 1:
			
						
			break;
			
			case 2:
			
			
			break;
			
			case 3:
			
			
			break;
			
			case 4:
			
			break;
			
			case 5:
			
			break;
			
			case 6:
			
			break;
			
			case 7:
			
			break;
			
			case 8:
			
			break;
			
			case 9:
			
			break;
			
			case 10:
			
			break;
		}
		break;
	}
}