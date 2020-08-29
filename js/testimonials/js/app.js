(function(){
    const prevBtn = document.getElementsByClassName("prevBtn")[0];
    const nextBtn = document.getElementsByClassName("nextBtn")[0];
    const customerImg = document.getElementById("customer-img");
    const customerName = document.getElementById("customer-name");
    const customerText = document.getElementById("customer-text");
    const arr = [
        {name:"John",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"},
        {name:"Sandy",text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"},
        {name:"Amy",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."},
        {name:"Tyrell",text:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."},
        {name:"Wanda",text:"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ];
    let num = 0;
    prevBtn.onclick= ()=>{
        num==0?num=arr.length-1:num--;
        customerImg.src = `img/customer-${num}.jpg`;
        customerName.innerText= arr[num].name;
        customerText.innerText= arr[num].text;
    }
    nextBtn.onclick= ()=>{
        num==arr.length-1?num=0:num++;
        customerImg.src = `img/customer-${num}.jpg`;
        customerName.innerText= arr[num].name;
        customerText.innerText= arr[num].text;
    }
})()