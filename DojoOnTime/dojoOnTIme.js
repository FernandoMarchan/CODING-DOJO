function gone() {
    let join = document.getElementsByClassName("banner")[0];
    join.style = "display: none;";
}


//function choice(select){
//let high = document.getElementsByClassName("high")
//let low = document.getElementByClassName("low")
//    alert(select.options[select.selectedIndex].text);
//    low.innerText=15
//    high.innerText=47
//}

document.getElementById('submit').onclick = function() {
    var e = document.getElementById("pets");
    var text = e.options[e.selectedIndex].text;
    document.getElementById("container").innerHTML = 'The selected text is ' + text;
}