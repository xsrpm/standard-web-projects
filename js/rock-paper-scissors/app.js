(function(){
    const button = document.getElementsByTagName("button")
    const score = document.querySelector(".score")
    const message = document.querySelector(".message")
    const dic = [{valor:"Rock",vence:"Scissors"},{valor:"Scissors",vence:"Paper"},{valor:"Paper",vence:"Rock"}] 
    function tictactoe(e){
        const rand = parseInt(Math.random()*dic.length)
        const pc = dic[rand]
        const player = e.target.innerText
        score.innerHTML=`Player: <em>${player}</em>  Computer: <em>${pc.valor}</em>`
        if(pc.valor === player)
            message.innerText=`Draw. It's a tie!`
        else if(pc.vence===player)
            message.innerText=`Computer wins!`
        else
            message.innerText=`Player wins!`
    }
    Array.from(button).forEach((element)=>{
        element.addEventListener("click",tictactoe);
    })
})()
