let container = document.getElementById("container")
let fn = document.getElementById("fn")
let ln = document.getElementById("ln")
let em = document.getElementById("em")
let no = document.getElementById("no")
let ps = document.getElementById("ps")
let cp = document.getElementById("cp")
let btn = document.getElementById("btn")
let cards = document.getElementById("cards")
let alrt = document.getElementById("alert")
let pass = document.getElementById("pass")

btn.addEventListener("click",()=>{
    if(fn.value === "" || ln.value === "" || em.value ==="" || no.value.length != 10 || ps.value ==="" || cp.value === "" ){
        alrt.innerHTML = "<h4 style='color: red; margin-bottom: 30px;'>Please Provide Proper Input...</h4>"
    }
    if(ps.value != cp.value){
        alrt.innerHTML = "<h4 style='color: red; margin-bottom: 30px;'>Password are not matching...</h4>"
    }
    if(ps.value.length === 14 || "@" in ps.value ||"@".includes(ps.value)|| "1234567890".includes(ps.value)){
        alrt.innerHTML = ""
    }
    // else{
    //     alrt.innerHTML = "<h4 style='color: red; margin-bottom: 30px;'>Password should contain special character and number ...</h4>"
    // }
         
})