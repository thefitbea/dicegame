var numberRandom1 = Math.floor((Math.random()*6)+1);
var diceImageRandom = "images/dice" + numberRandom1 + ".png";
var image1 = document.querySelectorAll("img")[0];

if(numberRandom1 === 1){
  image1.setAttribute("src","images/dice1.png");
}
else if (numberRandom1 === 2) {
  image1.setAttribute("src","images/dice2.png");
}
else if (numberRandom1 === 3) {
  image1.setAttribute("src","images/dice3.png");
}
else if (numberRandom1 === 4) {
  image1.setAttribute("src","images/dice4.png");
}
else if (numberRandom1 === 5) {
  image1.setAttribute("src","images/dice5.png");
}
else {
  image1.setAttribute("src","images/dice6.png");
}
