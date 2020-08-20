function palindrome(str) {
  console.log(str);
  let cad = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let max = cad.length;
  let cent = Math.round(max/2);
  let par= max%2 === 0;
  for(let i=0;i<cent;i++){
    if(i===cent-1){
      if(par){
        if(cad.charAt(i)!==cad.charAt(max-i-1)){
          return false;
        }
        else{
          return true;
        }
      }
      else{
        return true;
      }
    }
    else{
      if(cad.charAt(i)!==cad.charAt(max-i-1)){
        return false;
      }
    }
  }
  return true;
}

console.assert(typeof(palindrome("eye")) === 'boolean' ,`should return boolean`);

let map = new Map(
  [
    ["eye", true], ["_eye", true], ["race car", true], ["not a palindrome", false], ["A man, a plan, a canal. Panama", true], ["never odd or even", true], ["nope", false], ["almostomla", false], ["My age is 0, 0 si ega ym.", true], ["1 eye for of 1 eye.", false], ["0_0 (: /-\ :) 0-0", true], ["five|\_/|four", false]
  ]);

for (let [key, value] of map) {
  console.assert(palindrome(key) === value, `should return \"${value}\"`);
}