// Work to get the filter buttons working
(function(){
const btnFilters = document.getElementsByClassName("filter-btn");
const searchItem = document.getElementById("search-item");
const storeItems = document.getElementById("store-items");
const data = [
   {name:"sweet item",price:"5",img:"img/sweets-1.jpeg",type:"sweets"},
   {name:"cupcake item",price:"5",img:"img/cupcake-1.jpeg",type:"cupcakes"},
   {name:"cake item",price:"5",img:"img/cake-1.jpeg",type:"cakes"},
   {name:"dougnut item",price:"5",img:"img/doughnut-1.jpeg",type:"dougnuts"},
   {name:"sweet item",price:"10",img:"img/sweets-2.jpeg",type:"sweets"},
   {name:"cupcake item",price:"10",img:"img/cupcake-2.jpeg",type:"cupcakes"},
   {name:"cake item",price:"10",img:"img/cake-2.jpeg",type:"cakes"},
   {name:"dougnut item",price:"10",img:"img/doughnut-2.jpeg",type:"dougnuts"},
   {name:"sweet item",price:"15",img:"img/sweets-3.jpeg",type:"sweets"},
   {name:"cupcake item",price:"15",img:"img/cupcake-3.jpeg",type:"cupcakes"},
   {name:"cake item",price:"15",img:"img/cake-3.jpeg",type:"cakes"},
   {name:"dougnut item",price:"15",img:"img/doughnut-3.jpeg",type:"dougnuts"},
];
function printElement(name,price,img,type){
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
const filts = ["all","cakes","cupcakes","sweets","dougnuts"];
filts.forEach((fil,i)=>{
    btnFilters[i].addEventListener("click",
    (e)=>{ 
        e.preventDefault();
        let elements="";
        data.forEach((el)=>{
            (el.type===fil || fil==="all")?elements+=printElement(el.name,el.price,el.img,el.type):"";
        });
        storeItems.innerHTML=elements;
    });
});
searchItem.addEventListener("keyup",
    (e)=>{
        let elements="";
        data.forEach((el)=>{
            (el.name.includes(searchItem.value))?elements+=printElement(el.name,el.price,el.img,el.type):"";
        });
        storeItems.innerHTML=elements;
    }
);
})();


