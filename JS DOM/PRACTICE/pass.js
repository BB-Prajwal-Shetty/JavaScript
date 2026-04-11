let button = document.getElementsByTagName("button")[0]
let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lowercase = uppercase.toLowerCase()
let num = "1234567890"
let spcl_char = "@#$&"
let all = uppercase + lowercase + num + spcl_char
let pass = document.getElementById("fail")
const generate = () => {
    let password = ""
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += spcl_char[Math.floor(Math.random()*spcl_char.length)]
    if(password.length != 14){
        while(14 > password.length){
            password += all[Math.floor(Math.random()*all.length)]
        }
    }
    pass.value = password
}

let copy = () => {
    let con = confirm("Do you want to copy.")
    if(con === true){ 
        pass.select()
        document.execCommand("copy")
        alert("password copied")
    }
    else{
        alert("Did not Copied.")
    }
}