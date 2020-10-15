const displayJoke = document.getElementById("display-joke")
const getJoke= document.getElementById("get-joke")
var oReq = new XMLHttpRequest();

oReq.addEventListener("load", (e)=> {
    console.table(e.target.response);
    displayJoke.innerText=JSON.parse(e.target.response).value
});

getJoke.addEventListener("click",()=>{
    oReq.open("GET", "https://api.chucknorris.io/jokes/random");
    oReq.send()
})
