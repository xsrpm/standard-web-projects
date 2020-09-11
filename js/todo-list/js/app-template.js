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
    function saveItemsToLocalStorage(){
        arrData = [];
        const itemName = document.getElementsByClassName("item-name");
        Array.from(itemName).forEach((ele)=>{
            arrData.push({value:ele.innerText,completed:ele.classList.contains("completed")});
        })
        localStorage.setItem('data', JSON.stringify(arrData));
    }
    function addItem(item){
        const itemDOM = itemTemplate.content.cloneNode(true).firstElementChild;
        itemDOM.querySelector('.item-name').innerText=item.value;
        item.completed?itemDOM.querySelector('.item-name').classList.toggle("completed"):"";
        item.completed?itemDOM.querySelector('.complete-item').classList.toggle("visibility"):"";
        itemDOM.querySelector('.complete-item').addEventListener("click",(e)=>{
            itemDOM.querySelector('.complete-item').classList.toggle("visibility");
            itemDOM.querySelector('.item-name').classList.toggle("completed");
            saveItemsToLocalStorage();
        });      
        itemDOM.querySelector('.edit-item').addEventListener("click",(e)=>{
            itemInput.value= item.value;
            itemDOM.remove();
            saveItemsToLocalStorage();
        });   
        itemDOM.querySelector('.delete-item').addEventListener("click",(e)=>{
            itemDOM.remove();
            saveItemsToLocalStorage();
        });
        itemList.appendChild(itemDOM);
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
