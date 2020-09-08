/**
 * Version mejorada a la de app.js, usando html templates
 * 
 */

(function(){
    const itemForm = document.getElementById("itemForm");
    const itemInput = document.getElementById("itemInput");
    const clearList = document.getElementById("clear-list");
    const itemList = document.getElementsByClassName("item-list my-5")[0];
    const itemTemplate = document.getElementById("itemTemplate");
    let arrData;
    function listStorage(){
        let json = JSON.parse(localStorage.getItem('data'));
        arrData = json!==null?json:[];
        arrData.forEach((item)=>{
            addItem(item);
        });
    }
    listStorage();
    function saveItemstoLocalStorage(){
        arrData = [];
        const itemName = document.getElementsByClassName("item-name");
        Array.from(itemName).forEach((ele)=>{
            arrData.push({value:ele.innerText,completed:ele.classList.contains("completed")});
        })
        localStorage.setItem('data', JSON.stringify(arrData));
    }
    function addItem(item){
        const itemmy3 = itemTemplate.content.cloneNode(true).firstElementChild;
        itemmy3.children[0].innerText=item.value;
        if(item.completed){
            itemmy3.children[0].classList.add("completed");
            itemmy3.children[1].children[0].classList.add("visibility");
        }
        itemmy3.children[1].children[0].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            console.log(anchor);
            anchor.classList.toggle("visibility");
            anchor.parentElement.previousElementSibling.classList.toggle("completed");
            saveItemstoLocalStorage();
        });      
        itemmy3.children[1].children[1].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            itemInput.value= anchor.parentElement.previousElementSibling.innerText;
            anchor.parentElement.parentElement.remove();
            saveItemstoLocalStorage();
        });   
        itemmy3.children[1].children[2].addEventListener("click",(e)=>{
            let anchor=e.target;
            while(anchor.tagName!=="A"){
                anchor=anchor.parentElement;
            }
            anchor.parentElement.parentElement.remove();
            saveItemstoLocalStorage();
        });
        itemList.appendChild(itemmy3);
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
})()


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