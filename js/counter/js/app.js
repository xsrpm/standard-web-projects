(function(){
 const prevBtn = document.getElementsByClassName("prevBtn")[0];
 const nextBtn = document.getElementsByClassName("nextBtn")[0];
 const h1 = document.getElementById("counter");
 let count=0;
 function printCount(){
   count === 0 ? h1.style.color = "black"
   : count > 0 ? h1.style.color = "green"
   : h1.style.color = "red";
   h1.innerText=count;
 }
 prevBtn.onclick = () => {
  count--;
  printCount();
 }
 nextBtn.onclick = () => {
  count++;
  printCount();
}
})()