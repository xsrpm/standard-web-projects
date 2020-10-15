const first = document.getElementById("first")
const last = document.getElementById("last")
const street = document.getElementById("street")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const photo = document.getElementById("photo")
const btn = document.getElementById("btn")

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", (e)=>{
  console.log(e.target.response);
  const person = JSON.parse(e.target.response).results[0]
  first.innerText = person.name.first
  last.innerText = person.name.last
  street.innerText = person.location.state+" "+person.location.city
  phone.innerText = person.phone
  email.innerText = person.email
  photo.setAttribute("src",person.picture.large)
});
btn.onclick= ()=>{
  oReq.open("GET", "https://randomuser.me/api/");
  oReq.send();
}
