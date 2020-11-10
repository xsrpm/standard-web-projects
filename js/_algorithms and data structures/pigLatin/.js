/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
*/

function translatePigLatin(str) {
  let regexConsonante = /^(?<cons>[bcdfghjklmnpqrstvwxyz]+)(?<rest>[aeiou][a-z]*)/
  let regexVocal = /^[aeiou][a-z]+/g
  let arr = []
  if(str.match(regexConsonante)!==null){//inicia consonante
  //la estructura del objeto match incluye la propiedad groups por defecto
    arr = str.match(regexConsonante);
    console.log(arr)
    return arr.groups.rest+arr.groups.cons+"ay";
  }
  else if(str.match(regexVocal)!==null){//inicia vocal
  //la estructura del objeto devuelto solo es un array de matchs cuando el regex incluye el flag g (global)
    arr = str.match(regexVocal);
    console.log(arr)
    return arr[0]+"way";
  }
  else{
    return str+"ay";
  }
}

console.log(translatePigLatin("california"))

/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/