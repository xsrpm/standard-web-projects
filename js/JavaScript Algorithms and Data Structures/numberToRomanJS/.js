
let romValues = new Map([
  [1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M'],[5000,'V']
]);

function convertToRoman(num) {
  let res;
  let cnt = 0;
  res = "";
  if(num<4000)
  while (num > 0) {
    let rest = num % Math.pow(10, cnt + 1);
    let tmpKey = 0;
    if (rest > 0) {
      for (let [key, value] of romValues) {
        if (rest === key) {
          res = value + res;
          break;
        }
        else if (rest > key) {
          tmpKey = key;
        }
        else {
          let car = romValues.get(Math.pow(10, cnt));
          let cant = rest / Math.pow(10, cnt);
          let tmpacum = "";
          if (cant === 9 || cant === 4)
            tmpacum = car + value;
          else {
            if (cant > 5) {
              tmpacum = tmpacum + romValues.get(tmpKey);
              cant = cant - 5;
            }
            for (let i = 0; i < cant; i++) {
              tmpacum = tmpacum + car;
            }
          }
          res = tmpacum + res;
          break;
        }
      }
      num = num - rest;
    }
    cnt++;
  }
  console.log(res);
  return res;
}


let map = new Map(
  [
    [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [9, "IX"], [12, "XII"], [16, "XVI"], [29, "XXIX"], [44, "XLIV"], [45, "XLV"], [68, "LXVIII"], [83, "LXXXIII"], [97, "XCVII"], [99, "XCIX"], [400, "CD"], [500, "D"], [501, "DI"], [649, "DCXLIX"], [798, "DCCXCVIII"], [891, "DCCCXCI"], [1000, "M"], [1004, "MIV"], [1006, "MVI"], [1023, "MXXIII"], [2014, "MMXIV"], [3999, "MMMCMXCIX"]
  ]);

for (let [key, value] of map) {
  console.assert(convertToRoman(key) === value, `should return \"${value}\"`);
}
