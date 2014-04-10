JUMP-html5
==========
An HTML5 Web based platformer. Based on an old game I created 10 years ago on a graphing calculator.

The goal of the game is to venture through the expansive map and locate all of the treasure. There are several areas each containing 1 gold and 1 silver. The adventurer must try to find as many gold and silver as he/she can.

Control 

-----------------------------------
v. 0.1.1[04/10/14]
Prevent player from walking infinitely off the horizon.
Added map for debugging purposes.
Replaced if-then statements for key press and key release with switches.
Made the jump button a boolean instead of an integer.
Made changing from one map to another smoother.
Replaced the if-then statement in loadMap() with switches.

Issues: still missing some maps.
still missing some gold and silver to collect.
still missing some traps.


v. 0.1.0
Added level design engine
	Levels can be designed by assigning an array to the floor object. Number between 1 and 100 represent platform height on the screen.
	Current Level design engine allows for multiple floors and multiple sections on each floor
Added physics engine
Added Jump Sound


**Issues
When walking off to an area with no level designed for it the game will simply reload the last level you were on.
No support for silver and gold....yet
Background looks dull
Player graphics are dull, hoping to support walking animation...and actual feet.
There ought to be some traps and special platforms
Only 3 levels at the moment, and they are all dull. Hoping to make 30 levels, 10x3. That's 30 gold and 30 silver.
Created a "fan" object which has no use, will eventually create air currents that can lift the player or slow descent, and in some cases increase fall speed. This will be part of trying to maneuver the map.
Would like to get around to making particles for air currents and landing on the ground. Just as soon as I get over my irrational hatred for "for" loops.
