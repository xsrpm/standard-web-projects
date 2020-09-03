//Wrap code in an IIFE
(function(){
  const btnGrey = document.getElementsByClassName("btn btn-grey");
  const btnYellow = document.getElementsByClassName("btn-yellow");
  const btnEqual = document.getElementsByClassName("btn-equal")[0];
  const btnClear = document.getElementsByClassName("btn-clear")[0];
  const screen = document.getElementsByClassName("screen")[0];
  let existPoint=false;
  let operator="";
  let tmpNum="";
  let newNum=false;
  screen.value="0";
  function calculo(){
    let sig=1;
    switch(operator){
      case "+": screen.value=Number(screen.value)+Number(tmpNum);break;
      case "-": screen.value=Number(screen.value)-Number(tmpNum); break;
      case "*": screen.value=Number(screen.value)*Number(tmpNum);break;
      case "/": screen.value=Number(screen.value)/Number(tmpNum);break;
    }
  }
  Array.from(btnGrey).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      if(e.target.dataset.num==="."){
        if(!existPoint){
          screen.value+=e.target.dataset.num;
          existPoint=true;
          newNum=false;
        }
      }
      else{
        if(screen.value==="0" || newNum){
          screen.value=e.target.dataset.num;
          newNum=false;
        }         
        else
          screen.value+=e.target.dataset.num;
      }    
    });
  })
  Array.from(btnYellow).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      if(operator!==""){
        calculo();
      }
      tmpNum=screen.value;
      newNum=true;
      operator=e.target.dataset.num;
      existPoint=false;
    });
  });
  btnClear.addEventListener("click",()=>{
    screen.value = "0";
    existPoint=false;
    operator="";
    newNum=false;
  });
  btnEqual.addEventListener("click",()=>{
    calculo();
    operator="";
  })
})(); //end IIFE
