const btn = document.getElementById("generate-btn");
const quote = document.getElementById("quote");
const author = document.getElementsByClassName("quote-author")[0];
const quotes = [
  {quote:"El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.",autor:"Ralph Waldo Emerson"},
  {quote:"A menudo, el verdadero valor de algo no es el que tiene en sí mismo, sino que lo es la actividad que lo creó",autor:"Dave Thomas"},
  {quote:"Ninguna regla es tan general, que no admita alguna excepción",autor:"Monty Python"},
  {quote:"El ser humano no nace ser humano del todo ni nunca llega a serlo si los demás no le ayudan",autor:"Fernando Savater"},
  {quote:"Lo que el público te reprocha, cultívalo. Eso eres tú.",autor:"Jean Cocteau"},
  {quote:"Nadie puede ser esclavo de su identidad: cuando surge una posibilidad de cambio, hay que cambiar.",autor:"Elliot Gould "},
  {quote:"No se debe usar el desprecio sino con gran economía, debido al gran número de necesitados.",autor:"René de Chateaubriand"},
  {quote:"Amigos. Nadie más. El resto es selva.",autor:"Jorge Guillén"},
  {quote:"La salud es la unidad que da valor a todos los ceros de la vida.",autor:"Bernard Le Bouvier de Fontenelle "},
  {quote:"La política es el arte de impedir que la gente se entrometa en lo que le atañe.",autor:"Paul Valéry"},
  {quote:"La más noble función de un escritor es dar testimonio, como acta notarial y como fiel cronista, del tiempo que le ha tocado vivir.",autor:"Camilo José Cela"},
  {quote:"Intenta comprender, no eres un personaje de tragedia.",autor:"Ernest Hemingway"}
];
btn.onclick = ()=>{
  const q=quotes[Math.floor(Math.random()*quotes.length)];
  author.innerHTML=q.autor;
  quote.innerText =q.quote; 
};