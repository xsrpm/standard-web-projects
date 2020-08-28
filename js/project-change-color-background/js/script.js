const btn= document.getElementsByClassName('btn')[0];
function randomColor(){
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}
document.body.style.backgroundColor=randomColor();
btn.onclick = ()=>{
    document.body.style.backgroundColor = randomColor();
}