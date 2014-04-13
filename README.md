JUMP-html5
==========
An HTML5 Web based platformer. Based on an old game I created 10 years ago on a graphing calculator.

The goal of the game is to venture through the expansive map and locate all of the treasure. There are several areas each containing 1 gold and 1 silver. The adventurer must try to find as many gold and silver as he/she can.

Control 

-----------------------------------
To-Do List


1.) Design a 10x3 level design. Each section should have 1 gold and 1 silver that players must figure out how to grab.


2.) Create an function for displaying gold and silver, and keeping record of which gold and silver has been collected already.


3.) Create a few traps. One idea, which was from the older versions of the game, is to have a strong wind current carry players to certain platforms or prevent them from reaching others.


4.) Add more in-game tracks. Ideally the first, second, and third level should have their own tracks, but potentially their could be more tracks.


5.) Add more in-game sound effects. This includes ambient sounds and the sounds made when stepping or stomping the ground.


6.) Add better character graphics and character animation. This could prove to be challenging since I am not a great drawer.


7.) Opening cutscene and story.

Open Invitation to join

1.) An artist.

2.) A coder.




Change-Log

v. 0.1.2[04/13/14]
Added game menu and pause menu.
Added in game track. Music from ametuer artists i-miss-you (http://www.newgrounds.com/audio/listen/518631) and neon-bard (http://www.newgrounds.com/audio/listen/505753).


v. 0.1.1[04/10/14]
Prevent player from walking infinitely off the horizon.
Added map for debugging purposes.
Replaced if-then statements for key press and key release with switches.
Made the jump button a boolean instead of an integer.
Made changing from one map to another smoother.
Replaced the if-then statement in loadMap() with switches.

v. 0.1.0
Added level design engine
Levels can be designed by assigning an array to the floor object. Number between 1 and 100 represent platform height on the screen.
Current Level design engine allows for multiple floors and multiple sections on each floor
Added physics engine
Added Jump Sound