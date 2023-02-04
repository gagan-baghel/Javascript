var listl1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


var player1 = Math.floor( Math.random()*6+1);
var player2 = Math.floor( Math.random()*6+1);

// by ID------>
document.getElementById("img1").src = listl1[player1-1];
document.getElementById("img2").src = listl1[player2-1];


// <-----------by class name------->
// images = document.getElementsByClassName("img");
// images[0].setAttribute("src", listl1[player1-1]);
// images[1].setAttribute("src", listl1[player2-1]);




if(player1 > player2){
	document.getElementById("result").innerHTML = "🚩 Player 1 WON";
}
else if(player1 < player2){
	document.getElementById("result").innerHTML = "🚩 Player 2 WON";
}
else{
	document.getElementById("result").innerHTML = "its a DRAW";
}




