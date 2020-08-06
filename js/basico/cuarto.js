let MagicIn;
const magia=parseInt(Math.random()*100);
while(1){
   MagicIn=prompt('Adivina adivinador:');
  if(MagicIn<magia){
    console.log('el número es mas arriba');
  }else if(MagicIn>magia){
    console.log('el número es mas abajo');
  }
  else{
    console.log('Adivino!!');
    break;
  }
}