const days = [{day:"Domingo",cite:"Día de reposo"},{day:"Lunes",cite:"A trabajar!!"},{day:"Martes",cite:"Rojo como marte"},{day:"Miercoles",cite:"Día de miercoles"},{day:"Jueves",cite:"Jueves de patas"},{day:"Viernes",cite:"Fin de Semana!!"},{day:"Sabado",cite:"Playa!!!"}];
const weekday = document.getElementById("weekday");
const phrase = document.getElementById("phrase");
const today = new Date();
weekday.innerText=days[today.getDay()].day;
phrase.innerText=days[today.getDay()].cite;