const balloon = document.querySelectorAll(".balloon");
const yayNoBalloons = document.getElementById("yay-no-balloons")
console.log(balloon)
let cnt=balloon.length
balloon.forEach((b)=>{
    b.addEventListener("mouseenter",(e)=>{
        b.style.backgroundColor= "rgb(237, 237, 237)"
        b.innerText="POP!"
        cnt--
        if(cnt===0){
            b.parentNode.style.display="none"  
            yayNoBalloons.style.display="block"
        }
    })
})