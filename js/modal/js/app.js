//Use an IIFE to avoid contanminating global namespce
(function(){
  const items = document.getElementsByClassName("store-item");
  const modal = document.getElementsByClassName("lightbox-container")[0];
  const cross = modal.firstElementChild.firstElementChild.firstElementChild;
  const modalImg = modal.firstElementChild.children[1];
  const leftArrow = modal.firstElementChild.children[2].firstElementChild;
  const rightArrow = modal.firstElementChild.children[3].firstElementChild;
  let selectedElement;
  /*
  for (let element of items) { //Iterando con forof
    element.firstElementChild.firstElementChild.firstElementChild.addEventListener("click",(e)=>{
      selectedElement=e.target;
      modal.style.display ="block";
      modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
    });
  }*/
  Array.from(items).forEach(element => { //Iterando con forEach
    element.firstElementChild.firstElementChild.firstElementChild.addEventListener("click",(e)=>{
      selectedElement=e.target;
      modal.style.display ="block";
      modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
    });
  });
  cross.addEventListener("click",()=>{
    modal.style.display ="none";
  });
  leftArrow.addEventListener("click",()=>{
    const item= selectedElement.parentElement.parentElement.parentElement;
    if(item.previousElementSibling!==null)
      selectedElement= item.previousElementSibling.firstElementChild.firstElementChild.firstElementChild;
    else
      selectedElement= items[items.length-1].firstElementChild.firstElementChild.firstElementChild;
    modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
  });
  rightArrow.addEventListener("click",()=>{
    const item= selectedElement.parentElement.parentElement.parentElement;
    if(item.nextElementSibling!==null)
      selectedElement= item.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
    else
      selectedElement= items[0].firstElementChild.firstElementChild.firstElementChild;
    modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
  });
})();