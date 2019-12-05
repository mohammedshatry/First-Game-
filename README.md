


<!-- heading part  -->
# Project Tic-Tac-Toe Game


The project is a game of Tic Tac Toe with two players . The application can store scores of games for example how many wins .


# My Project Deployment

Deploy with github You can enjoy the game here [TIC-TAC-TOE](My Game)

* GITHUB
* Git
* Javascript
* HTML
* CSS
* jQuery
* Sweet Alert when comes your turn   
I used some css animate ANIMATE
<!-- unorder list list  -->
# wireframes and user stories.
* As a user, I need a play again button to play a new game.
* As a user, I need to kkeep track the score for each player.
* As a user, I need to know who's turn in the game.
* As a user, I need select between X or O to get started.
* As a user, I need to see a message who is the winner.
* As a user, I need hear some of sound effect to react with the game.
* As a user, I shouldn't be able to click to any button when game is starting except play again.
* As a user, I shouldn't be able to click to any index of the board if I didn't select any mark to start (X or O).
<!-- older list   -->

# The process of developing the game:
1. Starting with a simple HTML file and few CSS.
2. Simplify the problem to small steps and do them one by one.
3. Started with every time I click on the boxes put X in it.
4. Let them alternate between X and O.
Store each move in an array.
5. Get the winner by checking if any line has a matching symbol after the fifth move if it  reaches nine moves without winner it will be a tie.
7. Get the score for each player and display it underneath the board.
8. Be able to start a new game without refresh the page or lose the scores by click on New Game.
9. Add some sound effects when clicking on the boxes and if someone wins .
10. Add AI player to play against by clicking Play Against AI.


# Describe any lines in the code
side note: this function was written on the last day to replace three ones that were used before

if( $(this).children('img').length === 0) {              // to check if there are values or no 
if(player === "one") {                                  // print x
$(this).append("<img class='x' src='../images/x.jpg' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"' >");                        // width and height ='"+$(this).css("width") to be fit with the div 
player = "two";    // print o 
$(".container .playerone h2, .container .playerone img").css({"opacity":".7", "transform":"scale(.8,.8)"}); 
// slip x
$(".container .playertwo h2, .container .playertwo img").css({"opacity":"1", "transform":"scale(1,1)"});    // slip o



<!-- linkes    -->
# Challenges
How to determine the correct boxs like when boxs matched or not.

# Unsolved problems which would be fixed in future iterations.




[google](http://google.com)

<!-- images   -->

![wireframe](http://google.com)


js
let name ='shatry'