const alp = new Map([
  ['A','N'],['B','O'],['C','P'],['D','Q'],['E','R'],['F','S'],['G','T'],['H','U'],['I','V'],['J','W'],
  ['K','X'],['L','Y'],['M','Z'],['N','A'],['O','B'],['P','C'],['Q','D'],['R','E'],['S','F'],['T','G'],
  ['U','H'],['V','I'],['W','J'],['X','K'],['Y','L'],['Z','M']
]);

function rot13(str) {
  console.log(str);
  let res = "";
  for( let s of str){
    let v = alp.get(s);
    if(alp.get(s) === undefined){
      res = res +s;
    }
    else{
      res = res + v;
    }
  }
  return res;
}

rot13("SERR PBQR PNZC");

const test= new Map([
  ['SERR PBQR PNZC','FREE CODE CAMP'],
  ['SERR CVMMN!','FREE PIZZA!'],
  ['SERR YBIR?','FREE LOVE?'],
  ['GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.','THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.']
]);

for (let [key, value] of test) {
  console.assert(rot13(key) === value, `should return \"${value}\"`);
}