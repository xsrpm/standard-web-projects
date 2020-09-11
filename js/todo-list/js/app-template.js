/**
 * Version mejorada a la de app.js, usando:
 * - html templates
 * - event propagation (mejora)
 */

(function(){
    const itemForm = document.getElementById("itemForm");
    const itemInput = document.getElementById("itemInput");
    const clearList = document.getElementById("clear-list");
    const itemList = document.querySelector(".item-list");
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
        itemList.appendChild(itemDOM);
    }

    itemList.addEventListener("click",(e)=>{
        if(e.target.parentElement.classList.contains("complete-item")){
            e.target.parentElement.classList.toggle("visibility");
            e.target.parentElement.parentElement.previousElementSibling.classList.toggle("completed");
            saveItemsToLocalStorage();
        }
        if(e.target.parentElement.classList.contains("edit-item")){
            itemInput.value= e.target.parentElement.parentElement.previousElementSibling.innerText;
            itemList.removeChild(e.target.parentElement.parentElement.parentElement);
            saveItemsToLocalStorage();
        }
        if(e.target.parentElement.classList.contains("delete-item")){
            itemList.removeChild(e.target.parentElement.parentElement.parentElement);
            saveItemsToLocalStorage();
        }
    });
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
