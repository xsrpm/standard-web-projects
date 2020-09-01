(function(){
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");
    const itemCount = document.getElementById("item-count");
    const itemTotal = document.getElementsByClassName("item-total")[0];
    const cartTotal = document.getElementById("cart-total");
    const cartTotalContainer = document.getElementsByClassName("cart-total-container")[0];
    const storeItem = document.getElementsByClassName("store-item-icon");
    cartInfo.addEventListener("click",()=>{
        cart.classList.toggle('show-cart');
    })
    Array.from(storeItem).forEach((element)=>{
        element.addEventListener("click",(e)=>{
            let imgContainer = e.target;
            while(imgContainer.className!=="img-container"){
                imgContainer=imgContainer.parentElement;
            }
            let img = imgContainer.firstElementChild.getAttribute("src");
            const name = imgContainer.nextElementSibling.firstElementChild.children[0].innerText;
            const price = imgContainer.nextElementSibling.firstElementChild.children[1].firstElementChild.innerText;
            img=img.slice(0,3)+"-cart"+img.slice(3);
            const cartItem= document.createElement("div");
            cartItem.className="cart-item d-flex justify-content-between text-capitalize my-3";
            cartItem.innerHTML=`<img src="${img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`;
            cartTotalContainer.before(cartItem);
            const cartItems =document.getElementsByClassName("cart-item");
            itemCount.innerText=cartItems.length;
            const cartItemsPrice = document.getElementsByClassName("cart-item-price");
            /* Modo forEach
            let total="0";
            Array.from(cartItemsPrice).forEach((element)=>{
                total= (Number(total) + Number(element.innerText)).toFixed(2);
            });
            */
           //Modo reduce
            let total = Array.from(cartItemsPrice).reduce((total,element)=>{
                return total= (Number(total) + Number(element.innerText)).toFixed(2);
            },"0");
            itemTotal.innerText=total;
            cartTotal.innerText=total;
        })
    });

})()