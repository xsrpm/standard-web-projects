const clock = document.getElementById("clock")
window.setInterval(()=>{
    let fecha = new Date()
    clock.innerText=fecha.getHours().toString().padStart(2,"0")+":"+fecha.getMinutes().toString().padStart(2,"0")+":"+fecha.getSeconds().toString().padStart(2,"0")
},1000)