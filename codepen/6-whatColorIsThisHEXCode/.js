let correctColor;
const divFirst = document.getElementById("first");
const divSecond = document.getElementById("second");
const hexCode = document.getElementById("hexCode");

function hexColorGenerator() {
  let generatedColor = "";
  for (i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * 255);
    if (randomNumber < 16) {
      generatedColor = generatedColor + "0" + randomNumber.toString(16);
    } else {
      generatedColor = generatedColor + randomNumber.toString(16);
    }
  }
  return "#" + generatedColor;
}

divFirst.addEventListener("click", ()=> {
  if (correctColor === 1) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
});
divSecond.addEventListener("click", ()=>{
  if (correctColor === 1) {
    alert("Incorrect!");
  } else {
    alert("Correct!");
  }
});

function fNewHEX() {
  let correctRandomHex = hexColorGenerator();
  let incorrectRandomHex = hexColorGenerator();
  hexCode.innerHTML = correctRandomHex;
  correctColor = Math.floor(Math.random() * 2);

  if (correctColor === 1) {
    divFirst.style.backgroundColor = correctRandomHex;
    divSecond.style.backgroundColor = incorrectRandomHex;
  } else {
    divSecond.style.backgroundColor = correctRandomHex;
    divFirst.style.backgroundColor = incorrectRandomHex;
  }
}
fNewHEX();

const nuevoHEX = document.getElementById("newHEX");
newHEX.addEventListener("click", fNewHEX);
