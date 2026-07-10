const paras = document.querySelectorAll(".para");
const refresh = document.getElementById("refresh");

const cross = document.getElementById("cross");
const circle = document.getElementById("circle");
let currentPlayer = "X";


// let Select="";
// if(currentPlayer==="X") select= currentPlayer;
// else{

//     select ="O"; 
// }

paras.forEach(para=>{
    cross.addEventListener('click',()=>{
        if(currentPlayer==="X"){

            para.innerText=currentPlayer;
            // currentPlayer = "o";
        }
    })

    circle.addEventListener('click',()=>{
        if(currentPlayer==="O"){

            para.innerText=currentPlayer;
        }
    })
    // para.innerText="X";
})


