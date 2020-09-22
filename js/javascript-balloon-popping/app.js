const balloon = document.querySelectorAll(".balloon");
const yayNoBalloons = document.getElementById("yay-no-balloons")
console.log(balloon)
let cnt=balloon.length
function popBalloon(e){
    e.target.style.backgroundColor= "rgb(237, 237, 237)"
    e.target.innerText="POP!"
    cnt--
    console.log(cnt)
    e.target.removeEventListener("mouseenter",popBalloon)
    if(cnt===0){
        e.target.parentNode.style.display="none"  
        yayNoBalloons.style.display="block"
    }
}
balloon.forEach((b)=>{
    b.addEventListener("mouseenter",popBalloon)
})