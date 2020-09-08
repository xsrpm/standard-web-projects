/*Metodo: Insertando html como String dentro del JS
- localStorage (salvando y recuperando un array de objetos)
- change css classes
- add events to dinamicaly created elements
- polifill to ChildNode.remove() (para soportar ie explorer )
*/

(function(){
    const itemForm = document.getElementById("itemForm");
    const itemInput = document.getElementById("itemInput");
    const clearList = document.getElementById("clear-list");
    const itemList = document.getElementsByClassName("item-list my-5")[0];
    let arrData;
    function listStorage(){
        let json = JSON.parse(localStorage.getItem('data'));
        arrData = json!==null?json:[];
        arrData.forEach((item)=>{
            addItem(item);
        });
    }
    listStorage();
    function ItemString(item){
        const cad =`
        <!-- single item -->
        <div class="item my-3">
      <h5 class="item-name text-capitalize ${item.completed?"completed":""}">${item.value}</h5>
      <div class="item-icons">
       <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
       <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
       <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
     </div>
     <!-- end of single item -->`;
     return cad;
    }
    function saveItemstoLocalStorage(){
        arrData = [];
        const itemName = document.getElementsByClassName("item-name");
        Array.from(itemName).forEach((ele)=>{
            arrData.push({value:ele.innerText,completed:ele.classList.contains("completed")});
        })
        localStorage.setItem('data', JSON.stringify(arrData));
    }
    function addItem(item){
        itemList.insertAdjacentHTML("beforeend",ItemString(item));
        const itemIcons = itemList.lastElementChild.lastElementChild;
        itemIcons.children[0].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            console.log(anchor);
            anchor.classList.toggle("visibility");
            anchor.parentElement.previousElementSibling.classList.toggle("completed");
            saveItemstoLocalStorage();
        })
        itemIcons.children[1].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            itemInput.value= anchor.parentElement.previousElementSibling.innerText;
            anchor.parentElement.parentElement.remove();
            saveItemstoLocalStorage();
        })
        itemIcons.children[2].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            anchor.parentElement.parentElement.remove();
            saveItemstoLocalStorage();
        })
    }
    itemForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        arrData.push({value:itemInput.value,completed:false});
        localStorage.setItem('data', JSON.stringify(arrData));
        addItem({value:itemInput.value,completed:false});
        itemInput.value="";
    });
    clearList.addEventListener("click",()=>{
        itemList.innerHTML="";
        localStorage.setItem('data', JSON.stringify([]));
    });
})();


/*
Notas:

Usar itemList.innerHTML+=ItemString(itemInput.value);  al agregar un item al todo-list
Recrea todo el DOM cada vez y se pierde la referencia a los eventos creados a estos en subsiguientes ingresos de items a la lista

*/

//polifill para remove() en IE explorer browsers 
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);