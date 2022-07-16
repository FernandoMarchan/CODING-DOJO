let botones=document.querySelectorAll(".btn");
let valor=document.querySelector("#valor, #valor1, #valor2");
let contador=0;
let contadoruno=0;
let contadordos=0;

console.log (botones)
function sumauno() {
    contador++;
    valor.innerText=contador;
}

console.log (botones)
function sumauno1(){
    contadoruno++;
    valor1.innerText=contadoruno;
}

console.log (botones)
function sumauno2(){
    contadordos++;
    valor2.innerText=contadordos;
}