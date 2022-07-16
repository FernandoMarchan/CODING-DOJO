function add(){
    let button = document.getElementById("btn_counter");
    let count = 0;
    button.onclick = function() {
    count += 1;
    document.querySelector("#result").innerHTML =  count;
    alert('Ninja was liked');
    };
}

function add2(){
    let button= document.getElementById("btn_counter2");
    let count = 0;
    button.onclick = function() {
    count += 1;
    document.querySelector("#result2").innerHTML =  count;
    alert('Ninja was liked');
    };
}

function gone() {
    let join = document.getElementsByClassName("goneButton")[0];
    join.style = "display: none;";
}

function FbotonLogin() {
    var uno = document.getElementById('botonOn');
    if (uno.innerHTML == 'Log Out') 
        uno.innerHTML = 'Login';
    else uno.innerHTML = 'Log Out'; 
  }
