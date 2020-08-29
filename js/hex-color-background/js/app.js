const span=document.getElementById("hex-value");
const btn=document.getElementById("btn");
document.body.style.backgroundColor="#FFFFFF";
span.innerText="#FFFFFF";
function generateHexText(){//16777215 = (256 x 256 x 256) -1
    let str=Math.floor(Math.random()*16777215).toString(16);
    return "#"+str.padStart(6,"0"); //padStar to always generate a 6 character string
}
btn.onclick=()=>{
    document.body.style.backgroundColor = generateHexText();
    span.innerText=generateHexText();
}