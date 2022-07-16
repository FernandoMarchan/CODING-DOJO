document.getElementById('submit').onclick = function() {
    var e = document.getElementById("pets");
    var text = e.options[e.selectedIndex].text;
    document.getElementById("container").innerHTML = 'The selected text is ' + text;
}