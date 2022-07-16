function gone() {
    let join = document.getElementsByClassName("goneButton")[0];
    join.style = "display: none;";
}

function choice(select){
    alert(select.options[select.selectedIndex].text);
}


function add(){
    let button = document.getElementById("btn_counter");
    let count = 0;
    button.onclick = function() {
      count += 1;
      document.querySelector("#result").innerHTML =  count;
    };
}

function add2(){
    let button= document.getElementById("btn_counter2");
    let count = 0;
    button.onclick = function() {
      count += 1;
      document.querySelector("#result2").innerHTML =  count;
    };
}

function add3(){
    let button = document.getElementById("btn_counter3");
    let count = 0;
    button.onclick = function() {
      count += 1;
      document.querySelector("#result3").innerHTML =  count;
    };
}