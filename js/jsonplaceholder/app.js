/*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
*/
const usersList = document.getElementById("usersList");
const itemTemplate = document.getElementById("itemTemplate");
function listUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      //console.log(json)
      for (const el of json) {
        /**
         * @type {HTMLElement}
         */
        const item = itemTemplate.content.cloneNode(true).firstElementChild;
        item.innerText = `${el.name} (${el.username})`;
        usersList.appendChild(item);
      }
    });
}
listUsers();
