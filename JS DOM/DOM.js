let input = document.getElementsByTagName("input")
let button = document.getElementsByTagName("button")[0]
let h3 = document.getElementsByTagName("h3")
let span = document.getElementsByTagName("span")
let n = document.getElementsByClassName("n")[0]
let c = document.getElementsByClassName("c")[0]
let e = document.getElementsByClassName("e")[0]
let cards = document.getElementsByClassName("cards")[0]
button.addEventListener("click",()=>{
    let confirmation = confirm("Are you sure you want to submit the form?")
    if(confirmation === true){

        if (input[0].value.length < 1 ||input[1].value === ""||input[2].value.length != 10||input[3].value === ""|| isNaN(input[2].value)){
            alert("Please provide proper input...")
        }
        else{
            let name = input[0].value + " " + input[1].value
            let contact= input[2].value
            let email = input[3].value

            cards.innerHTML += `<div class="card" style="border: 5px solid blue; width: 450px;">
            <h3> Name    : <span class="n">${name}</span></h3>
            <h3> Conatct : <span class="c">${contact}</span></h3>
            <h3> Email   : <span class = "e">${email}</span></h3>
        </div>`
        }
    }
    else{
        alert("Cancelled")
    }
})
