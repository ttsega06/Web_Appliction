var randomeNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomeNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomeNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomeNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomeNumber1 > randomeNumber2) {
  document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
} else if (randomeNumber2 > randomeNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
  S;
}
