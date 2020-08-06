let numeros=[0,1]; //valores iniciales que se usa para generar los demás números
let Num = parseInt(prompt("fibonacci hasta? : "));
for (var i = 2; i < Num; i++) {
  numeros.push(numeros[i-1]+numeros[i-2]); //la suma se agrega al vector de fibonacci
}
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // imprimo fibonacci hasta n
}
