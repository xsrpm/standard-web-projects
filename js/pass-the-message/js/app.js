(function(){
const form = document.getElementById("message-form");
form.onsubmit = (e)=>{
    e.preventDefault();
    const message =  document.getElementById("message");
    const promp = document.getElementsByClassName("message-content")[0];
    if(message.value !== ""){
        promp.innerHTML=message.value;
        message.value="";
    }
}
})()