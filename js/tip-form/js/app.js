(function(){
    const inputBill = document.getElementById("input-bill");
    const inputUsers = document.getElementById("input-users");
    const inputService = document.getElementById("input-service");
    const tipForm = document.getElementById("tip-form");
    const loader= document.getElementsByClassName("loader text-center")[0];
    const results= document.getElementsByClassName("results text-center my-3")[0];
    const tipAmount = document.getElementById("tip-amount");
    const totalAmount = document.getElementById("total-amount");
    const personAmount = document.getElementById("person-amount");
    const feedback= document.getElementsByClassName("feedback text-center alert text-capitalize p-1")[0];
    
    const options = [];
    options.push(document.createElement("option"));
    options[0].value = 20;
    options[0].innerText="great - 20%";
    options.push(document.createElement("option"));
    options[1].value = 10;
    options[1].innerText="good - 10%";
    options.push(document.createElement("option"));
    options[2].value = 2;
    options[2].innerText="bad - 2%";
    inputService.append(...options);
    function feedbackArray(){
        let cad = [];
        inputBill.value===""?cad.push("Bill amount cannot be blank"):"";
        inputUsers.value===""?cad.push("Number of users must be greater than zero"):"";
        inputService.value==="0"?cad.push("You must select a Service"):"";
        return cad;
    }
    tipForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const feed = feedbackArray();
        if(feed.length>0){
            for(let a of feed){
                let elem = document.createElement("p");
                elem.innerText = a;
                feedback.appendChild(elem);
            }
            feedback.className ="feedback text-center alert text-capitalize p-1 showItem alert-danger";
            feedback.style.display="block";
            setTimeout(()=>{
                feedback.style.display="none";
                feedback.className = "feedback text-center alert text-capitalize p-1";
            },7000);
        }
        else{
            loader.style.display ="block";
            setTimeout(()=>{
                loader.style.display ="none";
                tipAmount.innerText= (inputBill.value*inputService.value/100).toFixed(2);
                totalAmount.innerText = (Number(inputBill.value)+Number(tipAmount.innerText)).toFixed(2);
                personAmount.innerText = (Number(totalAmount.innerText)/Number(inputUsers.value)).toFixed(2);
                results.style.display="block";
            },2000);
            setTimeout(()=>{
                results.style.display="none";
            },5000);
        }
    })
})()