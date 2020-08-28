const imgContainer = document.getElementsByClassName("img-container")[0];
const btnLeft = document.getElementsByClassName("btn-left")[0];
const btnRight = document.getElementsByClassName("btn-right")[0];

let count= 0;
let urlImagen;

btnLeft.onclick = ()=>{
    count === 0? count =4: count--;
    imgContainer.style.backgroundImage = `url("img/contBcg-${count}.jpeg")`;
}
btnRight.onclick = ()=>{
    count === 4? count =0: count++;
    imgContainer.style.backgroundImage = `url("img/contBcg-${count}.jpeg")`;
}