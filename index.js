if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var element1 = document.querySelector(".img1");
  var element2 = document.querySelector(".img2");
  element1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  element2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Salim is right!";
  }else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Mina is right! 🚩";
  }else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
