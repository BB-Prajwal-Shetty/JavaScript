let del = document.getElementById("del")
let ac = document.getElementById("ac")
let dot = document.getElementById("dot")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let eq = document.getElementById("eq")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let zerozero = document.getElementById("zerozero")
let inp = document.getElementById("inp")

one.addEventListener("click", ()=>{
    inp.value += 1
})
two.addEventListener("click", ()=>{
    inp.value += 2
})
three.addEventListener("click", ()=>{
    inp.value += 3
})
four.addEventListener("click", ()=>{
    inp.value += 4
})
five.addEventListener("click", ()=>{
    inp.value += 5
})
six.addEventListener("click", ()=>{
    inp.value += 6
})
seven.addEventListener("click", ()=>{
    inp.value += 7
})
eight.addEventListener("click", ()=>{
    inp.value += 8
})
nine.addEventListener("click", ()=>{
    inp.value += 9
})
zero.addEventListener("click", ()=>{
    inp.value += 0
})
zerozero.addEventListener("click", ()=>{
    inp.value += "00"
})   
dot.addEventListener("click", ()=>{
    inp.value += "."
})
add.addEventListener("click", ()=>{
    inp.value += "+"
})
sub.addEventListener("click", ()=>{
    inp.value += "-"
})
mul.addEventListener("click", ()=>{
    inp.value += "*"
})
div.addEventListener("click", ()=>{
    inp.value += "/"
})
ac.addEventListener("click", ()=>{
    inp.value = ""
})
del.addEventListener("click", ()=>{
    inp.value = inp.value.slice(0, -1)
})
eq.addEventListener("click", ()=>{
    inp.value = eval(inp.value)
})   
one.addEventListener("mouseenter", ()=>{
    one.style.backgroundColor = "pink"
})
one.addEventListener("mouseleave", ()=>{
    one.style.backgroundColor = ""
})
two.addEventListener("mouseenter", ()=>{
     two.style.backgroundColor = "pink"
})
three.addEventListener("mouseenter", ()=>{
     three.style.backgroundColor = "pink"
})
four.addEventListener("mouseenter", ()=>{
    four.style.backgroundColor = "pink" 
})
five.addEventListener("mouseenter", ()=>{
    five.style.backgroundColor = "pink"
})
six.addEventListener("mouseenter", ()=>{
    six.style.backgroundColor = "pink"
})
seven.addEventListener("mouseenter", ()=>{
    seven.style.backgroundColor = "pink"
})
eight.addEventListener("mouseenter", ()=>{
    eight.style.backgroundColor = "pink"
})
nine.addEventListener("mouseenter", ()=>{
    nine.style.backgroundColor = "pink"
})
zero.addEventListener("mouseenter", ()=>{
    zero.style.backgroundColor = "pink"
})
zerozero.addEventListener("mouseenter", ()=>{
    zerozero.style.backgroundColor = "pink"
})   
dot.addEventListener("mouseenter", ()=>{
    dot.style.backgroundColor = "pink"
})
add.addEventListener("mouseenter", ()=>{
    add.style.backgroundColor = "pink"
})
sub.addEventListener("mouseenter", ()=>{
    sub.style.backgroundColor = "pink"
})
mul.addEventListener("mouseenter", ()=>{
    mul.style.backgroundColor = "pink"
})
div.addEventListener("mouseenter", ()=>{
    div.style.backgroundColor = "pink"
})
ac.addEventListener("mouseenter", ()=>{
    ac.style.backgroundColor = "pink"
})
del.addEventListener("mouseenter", ()=>{
    del.style.backgroundColor = "pink"
})
eq.addEventListener("mouseenter", ()=>{
    eq.style.backgroundColor = "pink"
}) 
two.addEventListener("mouseleave", ()=>{
    two.style.backgroundColor = ""
})  
three.addEventListener("mouseleave", ()=>{   
     three.style.backgroundColor = ""
})  
four.addEventListener("mouseleave", ()=>{
    four.style.backgroundColor = "" 
})
five.addEventListener("mouseleave", ()=>{
    five.style.backgroundColor = ""
})  
six.addEventListener("mouseleave", ()=>{
    six.style.backgroundColor = ""
})
seven.addEventListener("mouseleave", ()=>{
    seven.style.backgroundColor = ""
})
eight.addEventListener("mouseleave", ()=>{
    eight.style.backgroundColor = ""
})
nine.addEventListener("mouseleave", ()=>{
    nine.style.backgroundColor = ""
})
zero.addEventListener("mouseleave", ()=>{
    zero.style.backgroundColor = ""
})
zerozero.addEventListener("mouseleave", ()=>{
    zerozero.style.backgroundColor = ""
})
dot.addEventListener("mouseleave", ()=>{
    dot.style.backgroundColor = ""
})
add.addEventListener("mouseleave", ()=>{
    add.style.backgroundColor = ""
})
sub.addEventListener("mouseleave", ()=>{
    sub.style.backgroundColor = ""
})
mul.addEventListener("mouseleave", ()=>{
    mul.style.backgroundColor = ""  
})      
div.addEventListener("mouseleave", ()=>{
    div.style.backgroundColor = ""
})
ac.addEventListener("mouseleave", ()=>{
    ac.style.backgroundColor = ""
})
del.addEventListener("mouseleave", ()=>{
    del.style.backgroundColor = ""
})
eq.addEventListener("mouseleave", ()=>{
    eq.style.backgroundColor = ""
})

