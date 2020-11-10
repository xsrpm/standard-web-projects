/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

/*
String.fromCharCode()
String.fromCodePoint()
String.prototype.charCodeAt()
String.prototype.codePointAt()
*/ 

function fearNotLetter(str) {
  let count=str.charCodeAt(0)
  let newStr=str.slice(1)
  for(let s of newStr){
    count++;
    if(s.charCodeAt()!==count)
     return String.fromCharCode(count)
  }
  return undefined;
}

fearNotLetter("abce");




/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/