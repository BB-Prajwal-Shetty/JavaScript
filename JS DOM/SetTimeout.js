let span = document.getElementsByTagName("span")[0]
// let arr = ["Prajwal","Shetty","Ravi","Shastry","Mrunal","Thakur"]
setInterval(() =>{
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    span.innerText = ` ${hrs} Hrs ${min} Min ${sec} Sec`
},1000) 