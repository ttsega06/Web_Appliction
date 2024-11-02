var randomNumbers = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumbers + ".png";
var folderSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", folderSource);

var randomNumer2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumer2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumbers > randomNumer2) {
  document.querySelector("h1").innerHTML = " 🚩Play 1 Wins!";
} else if (randomNumer2 > randomNumbers) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
