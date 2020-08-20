const calc = document.getElementById("calc");
calc.value = 0;
let newNumber = true;
let beforeOperation = false;
let tmpOperation = "";
let operationEq = false;
let num1 = 0;
let num2 = 0;

function addNumber(number) {
  if (calc.value === "0" || newNumber) {
    calc.value = number;
    newNumber = false;
  } else {
      calc.value = calc.value * 10 + number;
  }
  if (beforeOperation) {
    num2 = calc.value;
  } else {
    num1 = calc.value;
  }
}
function addOperation(operation) {
  if (beforeOperation && operation==="=") {
    if (operationEq === false) {
      calc.value = num1;
    }
    switch (tmpOperation) {
      case "/":
        calc.value = parseInt(calc.value) / parseInt(num2);
        break;
      case "*":
        calc.value = parseInt(calc.value) * parseInt(num2);
        break;
      case "+":
        calc.value = parseInt(calc.value) + parseInt(num2);
        break;
      case "-":
        calc.value = parseInt(calc.value) - parseInt(num2);
        break;
    }
    if (operation === "=") {
      operationEq = true;
    }
  }
  if (operation !== "="){
    tmpOperation = operation;
    beforeOperation = true;
  }
  newNumber = true;
}

C.onclick = () => {
  calc.value = 0;
  num1=0;
  num2=0;
  beforeOperation = false;
  newNumber = true;
  tmpOperation="";
  operationEq=false;
};
v0.onclick = () => addNumber(0);
v1.onclick = () => addNumber(1);
v2.onclick = () => addNumber(2);
v3.onclick = () => addNumber(3);
v4.onclick = () => addNumber(4);
v5.onclick = () => addNumber(5);
v6.onclick = () => addNumber(6);
v7.onclick = () => addNumber(7);
v8.onclick = () => addNumber(8);
v9.onclick = () => addNumber(9);
div.onclick = () => addOperation("/");
mul.onclick = () => addOperation("*");
sub.onclick = () => addOperation("-");
add.onclick = () => addOperation("+");
equ.onclick = () => addOperation("=");