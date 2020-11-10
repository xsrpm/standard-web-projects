
/*

Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/

let map = new Map([
  ["ONE HUNDRED",100.00],
  ["TWENTY",20.00],
  ["TEN",10.00],
  ["FIVE",5.00],
  ["ONE",1.00],
  ["QUARTER",0.25],
  ["DIME",0.10],
  ["NICKEL",0.05],
  ["PENNY",0.01]
]);

//Version que emplea el uso de un multiplicador de ajuste para no perder precision en las operaiones con decimales.
//Ya que solo se usarán 2 posiciones decimales se multiplicará por 100 y se manejará las operaciones 
//matematicas como si fueran numeros enteros. Para imprimir se hará la division / 100 para obtener el valor verdadero.
function checkCashRegister(price, cash, cid) {
  const AJUSTE = 100;
  let rest = (cash*AJUSTE) - (price*AJUSTE);
  let change = [];
  let cant = 0;
  let denominacionNumber;
  let open=false;

  const cidr = [...cid].reverse();
  for( let denominacion of cidr){
    cant=0;
    denominacionNumber = map.get(denominacion[0]) * AJUSTE;
    while( rest > 0 && (denominacionNumber <= rest - cant) && denominacion[1]*AJUSTE - cant> 0){
      cant = cant + denominacionNumber;
    }
    if( cant > 0){
      change.push([denominacion[0],cant/AJUSTE]);
      rest = rest -cant;
    }
    if(denominacion[1] - cant > 0)
      open=true;
  }

  let objRes = {};
  if(rest > 0){
    objRes.status = "INSUFFICIENT_FUNDS";
    objRes.change = [];
  }
  else{
    if(open){
      objRes.status = "OPEN";
      objRes.change= change;
    }
    else{
      objRes.status = "CLOSED";
      objRes.change = cid;
    }
  }

  console.log(objRes);
  return objRes;
}

//Versión que emplea el uso de conversiones a Number y .toFixed(2) -> String para no perder precicion 
//en las operaciones matematicas sucesivas con numeros con parte decimal
function checkCashRegisterV2(price, cash, cid) {
  let rest = (cash - price).toFixed(2);
  let change = [];
  let cant = 0;
  let denominacionNumber;
  let open=false;

  const cidr = [...cid].reverse();
  for( let denominacion of cidr){
    cant=0;
    denominacionNumber = map.get(denominacion[0]);
    while( rest > 0 && (denominacionNumber <= rest - cant) && denominacion[1] - cant> 0){
      cant = (Number(cant) + denominacionNumber).toFixed(2);
    }
    if( cant > 0){
      change.push([denominacion[0],Number(cant)]);
      rest = (Number(rest) -Number(cant)).toFixed(2);
    }
    if(denominacion[1] - cant > 0)
      open=true;
  }

  let objRes = {};
  if(rest > 0){
    objRes.status = "INSUFFICIENT_FUNDS";
    objRes.change = [];
  }
  else{
    if(open){
      objRes.status = "OPEN";
      objRes.change= change;
    }
    else{
      objRes.status = "CLOSED";
      objRes.change = cid;
    }
  }

  console.log(objRes);
  return objRes;
}


let tests = [
  {
    ing: {
      price: 19.5, cash: 20, cid: [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
      ]
    },
    out: { status: "OPEN", change: [["QUARTER", 0.5]] }
  },
  {
    ing: {
      price: 3.26, cash: 100, cid: [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
      ]
    },
    out: { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
  },
  {
    ing: {
      price: 19.5, cash: 20, cid: [
        ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
      ]
    },
    out: { status: "INSUFFICIENT_FUNDS", change: [] }
  },
  {
    ing: {
      price: 19.5, cash: 20, cid: [
        ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
      ]
    },
    out: { status: "INSUFFICIENT_FUNDS", change: [] }
  },
  {
    ing: {
      price: 19.5, cash: 20, cid: [
        ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
      ]
    },
    out: { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }
  }
];

for (let test of tests) {
  console.log(test);
  console.assert(JSON.stringify(checkCashRegister(test.ing.price, test.ing.cash, test.ing.cid)) === JSON.stringify(test.out), `should return \"${test.out.status}\" and \"${test.out.change}\"`);
}
