function LogOut(Login) {
    Login.innerText = "Log Out";
}

function hide(AddDefinition) {
    AddDefinition.remove();
}

let botones=document.querySelectorAll(".btn1");
let valor=document.querySelector("#valor");
let contador=0;

for(let incremento=0; incremento<botones.length;incremen++){
    botones[incremento].addEventListener("click", ()=> { 
    if(botones[incremento].classList.contains("Like"))
    {contador++;}
        valor.innerText=contador;
    })
}