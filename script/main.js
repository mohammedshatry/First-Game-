
// const backgroundSound = new Audio("tic-tac.mp3")
// const audio = new Audio('#')



// backgroundSound.play()
let score_one = 0;
let score_two = 0;
let player = "one";
function oneWinner() {
	
	if( $(".game div div.top-left, .game div div.top-center,.game div div.top-right").children(".x").length === 3 ){
			console.log("Palyer One Won");
			score_one++;
			$(".disable").removeClass("disable"); // to open play 
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-left, .game div div.top-center,.game div div.top-right").children(".x").css("transform","scale(1.1,1.1)");
		}else if( $(".game div div.center-left, .game div div.center-center,.game div div.center-right").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.center-left, .game div div.center-center,.game div div.center-right").children(".x").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.bottom-left, .game div div.bottom-center,.game div div.bottom-right").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.bottom-left, .game div div.bottom-center,.game div div.bottom-right").children(".x").css("transform","scale(1.1,1.1)");

		} else if( $(".game div div.top-left, .game div div.center-left,.game div div.bottom-left").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-left, .game div div.center-left,.game div div.bottom-left").children(".x").css("transform","scale(1.1,1.1)");

		} else if( $(".game div div.top-center, .game div div.center-center,.game div div.bottom-center").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-center, .game div div.center-center,.game div div.bottom-center").children(".x").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-right, .game div div.center-right,.game div div.bottom-right").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-right, .game div div.center-right,.game div div.bottom-right").children(".x").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-left, .game div div.center-center,.game div div.bottom-right").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-left, .game div div.center-center,.game div div.bottom-right").children(".x").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-right, .game div div.center-center,.game div div.bottom-left").children(".x").length === 3 ){
			console.log("Palyer One Won");score_one++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playerone h4").css("display","block");

			$(".game div div.top-right, .game div div.center-center,.game div div.bottom-left").children(".x").css("transform","scale(1.1,1.1)");

		}
		$(".container .playerone .score-one").text(score_one);
}

function twoWinner() {
	if( $(".game div div.top-left, .game div div.top-center,.game div div.top-right").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-left, .game div div.top-center,.game div div.top-right").children(".o").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.center-left, .game div div.center-center,.game div div.center-right").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.center-left, .game div div.center-center,.game div div.center-right").children(".o").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.bottom-left, .game div div.bottom-center,.game div div.bottom-right").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.bottom-left, .game div div.bottom-center,.game div div.bottom-right").children(".o").css("transform","scale(1.1,1.1)");

		} else if( $(".game div div.top-left, .game div div.center-left,.game div div.bottom-left").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-left, .game div div.center-left,.game div div.bottom-left").children(".o").css("transform","scale(1.1,1.1)");

		} else if( $(".game div div.top-center, .game div div.center-center,.game div div.bottom-center").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-center, .game div div.center-center,.game div div.bottom-center").children(".o").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-right, .game div div.center-right,.game div div.bottom-right").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-right, .game div div.center-right,.game div div.bottom-right").children(".o").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-left, .game div div.center-center,.game div div.bottom-right").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-left, .game div div.center-center,.game div div.bottom-right").children(".o").css("transform","scale(1.1,1.1)");

		}else if( $(".game div div.top-right, .game div div.center-center,.game div div.bottom-left").children(".o").length === 3 ){
			console.log("Palyer Two Won");score_two++;
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
			$(".container, .game div div").css("cursor","not-allowed");
			$(".container .playertwo h4").css("display","block");

			$(".game div div.top-right, .game div div.center-center,.game div div.bottom-left").children(".o").css("transform","scale(1.1,1.1)");

		}
		$(".container .playertwo .score-two").text(score_two);
}


function restart() {

	score_one = 0;
	score_two = 0;

	$(".container .playerone .score-one").text("0");
	$(".container .playertwo .score-two").text("0");

	$(".container .game div div").children("img").remove();

	player = "one";
	$(".container .playerone h2, .container .playerone img").css({"opacity":"1", "transform":"scale(1,1)"});
	$(".container .playertwo h2, .container .playertwo img").css({"opacity":".7", "transform":"scale(.8,.8)"});

	$(".game div div").css("cursor","pointer");
	$(".container").css("cursor","unset");

	$(".container .playerone h4").css("display","none"); // remove x and o from table 
	$(".container .playertwo h4").css("display","none");
}

function playAgain() {

	$(".container .game div div").children("img").remove();

	player = "one";
	$(".container .playerone h2, .container .playerone img").css({"opacity":"1", "transform":"scale(1,1)"});
	$(".container .playertwo h2, .container .playertwo img").css({"opacity":".7", "transform":"scale(.8,.8)"});

	$(".game div div").css("cursor","pointer");
	$(".container").css("cursor","unset");

	$(".container .playerone h4").css("display","none");
	$(".container .playertwo h4").css("display","none");

	$("body h1").css("display","none");
}

$(function() {

	
	$(".container .playertwo h2, .container .playertwo img").css({"opacity":".7", "transform":"scale(.8,.8)"}); // transform min scale like zoom in or out  
	$(".game div div").click(function() {
		// audio.play()
		if( $(".container").css("cursor") === "not-allowed") {

			alert("The Game is Over"); // 

		} else {
			if( $(this).children('img').length === 0) { // to check if there is value or no 
						if(player === "one") { // print x
							$(this).append("<img class='x' src='script/../images/x.jpg' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"' >"); // width and height ='"+$(this).css("width") to be fit with the div 
							player = "two";    // print o 
							$(".container .playerone h2, .container .playerone img").css({"opacity":".7", "transform":"scale(.8,.8)"}); // slip 
							$(".container .playertwo h2, .container .playertwo img").css({"opacity":"1", "transform":"scale(1,1)"});    // slip 

							oneWinner();



						}else {
							$(this).append("<img class='o' src='script/../images/o.jpg' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"' >"); // to show img with click in table 
							player = "one";
							$(".container .playerone h2, .container .playerone img").css({"opacity":"1", "transform":"scale(1,1)"});
							$(".container .playertwo h2, .container .playertwo img").css({"opacity":".7", "transform":"scale(.8,.8)"});

							twoWinner();
						}
					}
		}

		if ( $(".game div div").children("img").length === 9 && $(".container .playerone h4").css("display") === "none" && $(".container .playertwo h4").css("display") === "none") {
			$("body h1").fadeIn(500);
			$(".disable").removeClass("disable");
			$(".again").prop("disabled", false);
		}

	});

	$(".restart").click(function() {

		restart();

	});

	$(".again").click(function() {

		playAgain();

	});


});