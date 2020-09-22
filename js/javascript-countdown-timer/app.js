const countdownFrom = document.getElementById("countdown-from");
const root = document.getElementById("root");
const datefrom = new Date(2020,08,21,19,26,00,0);
countdownFrom.innerText=datefrom.toDateString();
console.log(datefrom.toDateString())
console.log(datefrom.toTimeString())
console.log(datefrom.toString())

var nIntervId = window.setInterval( ()=>{
    console.clear()
    const today= new Date();
    let tmp = (datefrom-today)/1000;
    const dias = Math.round(tmp/86400)
    tmp = tmp%86400
    const horas = Math.round(tmp/3600)
    tmp = tmp%3600
    const mins = Math.round(tmp/60)
    tmp = Math.round(tmp%60)
    console.log(dias)
    console.log(horas)
    console.log(mins)
    console.log(tmp)
    if(tmp>=0)
        root.innerText = `${dias}d ${horas}h ${mins}m ${tmp}s`
    else{
        root.innerText = "Timer Expired"
        window.clearInterval(nIntervId);
    }
} ,1000);