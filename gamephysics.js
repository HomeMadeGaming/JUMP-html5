/**
 * @author HMG
 */

/*
 * THE PHYSICS ENGINE
 */


player.physics = function()		//PLAYER GRAVITY AND MECHANICS
	{
		if (this.vy < -4.5)		//Terminal Velocity
		{
			this.vy = -4.5;
		}
		if (this.planted > 0 && key.d === 1)		//Jump only when feet are "planted" to the ground
		{
			this.vy = 3.2;
			jump.pause();
			jump.currentTime = 0;
			jump.play();
		};
		this.friction = -this.vx*0.02;				//Friction, a variable that is related to player velocity.
		if (key.left + key.right ===0 && this.planted > 0)
		{
			this.friction = -this.vx*0.1;			//Adjusting Friction to reduce when releasing left and right keys.
		}
		this.ax = (key.right - key.left)/25;		//Acceleration: when left or right is pressed.
		this.vx+=this.ax + this.friction;			//Velocity: Acceleration and Friction combined.
		this.x+=this.vx;
		this.vy+=this.ay;
		this.y+=this.vy;
		if (this.x < 0 || this.x >1000 || this.y<0 || this.y>500)			//Change map if the player walks off scren.
		{
			changeMap();
			loadMap();
		}
	};


floor.physics = function() 		//LEVEL INTERACTION WITH THE PLAYER
	{
		player.planted = 0;
		for (var i = 0; i<10; i++)
		{
			if (player.x+5 > (i*100) +1 && player.x -5 < (i*100)+99 && player.vy < 0)
			{
				if (player.y < this.high[i]*10 && player.y > (this.high[i]*10)-5)
				{
					player.vy = 0;
					player.y = this.high[i]*10;
					player.planted = 2;
				}
				if (player.y < this.low[i]*10 && player.y > (this.low[i]*10)-5)
				{
					player.vy = 0;
					player.y = this.low[i]*10;
					player.planted = 2;
				}
			}
		}
	};