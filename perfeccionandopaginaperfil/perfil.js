
function resta () {

}
let counter=0
let result=document.getElementById ("result")
function addConection () {
    counter++
    result.innerText=counter
}
let requestCounter=2
let request=document.getElementById ("requestCount")
function eraseRequest (element) {
        requestCounter--
        request.innerText=requestCounter;
        document.getElementById (element).remove()
}

function changeName() {
    document.getElementById ("nombre").innerText="James Doe"
}




