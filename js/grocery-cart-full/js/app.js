const data = [
  {
    name: "sweet item",
    price: "5",
    img: "img/sweets-1.jpeg",
    type: "sweets",
  },
  {
    name: "cupcake item",
    price: "5",
    img: "img/cupcake-1.jpeg",
    type: "cupcakes",
  },
  { name: "cake item", price: "5", img: "img/cake-1.jpeg", type: "cakes" },
  {
    name: "doughnut item",
    price: "5",
    img: "img/doughnut-1.jpeg",
    type: "doughnuts",
  },
  {
    name: "sweet item",
    price: "10",
    img: "img/sweets-2.jpeg",
    type: "sweets",
  },
  {
    name: "cupcake item",
    price: "10",
    img: "img/cupcake-2.jpeg",
    type: "cupcakes",
  },
  { name: "cake item", price: "10", img: "img/cake-2.jpeg", type: "cakes" },
  {
    name: "doughnut item",
    price: "10",
    img: "img/doughnut-2.jpeg",
    type: "doughnuts",
  },
  {
    name: "sweet item",
    price: "15",
    img: "img/sweets-3.jpeg",
    type: "sweets",
  },
  {
    name: "cupcake item",
    price: "15",
    img: "img/cupcake-3.jpeg",
    type: "cupcakes",
  },
  { name: "cake item", price: "15", img: "img/cake-3.jpeg", type: "cakes" },
  {
    name: "doughnut item",
    price: "15",
    img: "img/doughnut-3.jpeg",
    type: "doughnuts",
  },
];
const storeItems = document.getElementById("store-items");

function load(storeItems){
  function printElement(name, price, img, type) {
    const cad = `<!-- single item -->
    <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${type}" data-item="${type}">
    <div class="card ">
      <div class="img-container">
        <img src="${img}" class="card-img-top store-img" alt="">
        <span class="store-item-icon">
          <i class="fas fa-shopping-cart"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="card-text d-flex justify-content-between text-capitalize">
          <h5 id="store-item-name">${name}</h5>
          <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${price}</strong></h5>
        </div>
      </div>
    </div>
    <!-- end of card-->
    </div>`;
    return cad;
  }
  
  let elements = "";
  data.forEach((el) => {
    elements += printElement(el.name, el.price, el.img, el.type)
  });
  storeItems.innerHTML = elements;
  
}
load(storeItems);

function filter(storeItems) {
  const btnFilters = document.getElementsByClassName("filter-btn");  
  const storeItem = storeItems.children

  Array.from(btnFilters).forEach(el=>{
    el.addEventListener("click",function(e){
      e.preventDefault();
      let filter = this.dataset.filter
      Array.from(storeItem).forEach(el=>{
        (el.dataset.item === filter || filter === "all")? el.style.display = "block":el.style.display = "none"
      })
    })
  })

  const searchItem = document.getElementById("search-item");
  searchItem.addEventListener("keyup", (e) => {
   Array.from(storeItem).forEach(el=>{
     el.dataset.item.includes(searchItem.value)? el.style.display = "block":el.style.display = "none"
   })
  });
}
filter(storeItems);

function cart() {

  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");
  const itemCount = document.getElementById("item-count");
  const itemTotal = document.getElementsByClassName("item-total")[0];
  const cartTotal = document.getElementById("cart-total");
  const cartTotalContainer = document.getElementsByClassName(
    "cart-total-container"
  )[0];

  const storeItemIcon = document.getElementsByClassName("store-item-icon");
  cartInfo.addEventListener("click", () => {
    cart.classList.toggle("show-cart");
  });
  Array.from(storeItemIcon).forEach((element) => {
    element.addEventListener("click", (e) => {
      let imgContainer = e.target;
      while (imgContainer.className !== "img-container") {
        imgContainer = imgContainer.parentElement;
      }
      let img = imgContainer.firstElementChild.getAttribute("src");
      const name =
        imgContainer.nextElementSibling.firstElementChild.children[0].innerText;
      const price =
        imgContainer.nextElementSibling.firstElementChild.children[1]
          .firstElementChild.innerText;
      img = img.slice(0, 3) + "-cart" + img.slice(3);

      const cartItem = document.createElement("div");
      cartItem.className =
        "cart-item d-flex justify-content-between text-capitalize my-3";
      cartItem.innerHTML = `<img src="${img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`;
      cartTotalContainer.before(cartItem);
      const cartItems = document.getElementsByClassName("cart-item");
      itemCount.innerText = cartItems.length;
      const cartItemsPrice = document.getElementsByClassName("cart-item-price");
      /* Modo forEach
            let total="0";
            Array.from(cartItemsPrice).forEach((element)=>{
                total= (Number(total) + Number(element.innerText)).toFixed(2);
            });
            */
      //Modo reduce
      let total = Array.from(cartItemsPrice).reduce((total, element) => {
        return (total = (Number(total) + Number(element.innerText)).toFixed(2));
      }, "0");
      itemTotal.innerText = total;
      cartTotal.innerText = total;
    });
  });
}
cart();

function modal(storeItems){
  const storeItem = storeItems.children
  const modal = document.getElementsByClassName("lightbox-container")[0];
  const cross = modal.firstElementChild.firstElementChild.firstElementChild;
  const modalImg = modal.firstElementChild.children[1];
  const leftArrow = modal.firstElementChild.children[2].firstElementChild;
  const rightArrow = modal.firstElementChild.children[3].firstElementChild;
  let selectedElement;
  /*
  for (let element of storeItem) { //Iterando con forof
    element.firstElementChild.firstElementChild.firstElementChild.addEventListener("click",(e)=>{
      selectedElement=e.target;
      modal.style.display ="block";
      modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
    });
  }*/
  Array.from(storeItem).forEach(element => { //Iterando con forEach
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
      selectedElement= storeItem[storeItem.length-1].firstElementChild.firstElementChild.firstElementChild;
    modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
  });
  rightArrow.addEventListener("click",()=>{
    const item= selectedElement.parentElement.parentElement.parentElement;
    if(item.nextElementSibling!==null)
      selectedElement= item.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
    else
      selectedElement= storeItem[0].firstElementChild.firstElementChild.firstElementChild;
    modalImg.style.backgroundImage = `url("${selectedElement.getAttribute('src')}")`;
  });
}
modal(storeItems);