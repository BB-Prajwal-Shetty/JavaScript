let cards = document.getElementsByClassName("cards")[0]
console.log(cards)
let url = "https://fakestoreapiserver.reactbd.org/api/products"
let data = fetch(url).then((d)=>{
    return(d.json())
}).then((fd)=>{
    let data = fd.data
    data.map((ele)=>{
        let {_id,title,image,description,category,brand,price} = ele
        cards.innerHTML += `
        <div class="card">
        <br>
        <h4>${_id}</h4>
        <br>
        <h1>${title}</h1>
        <br>
        <img src="${image}" alt="img loading...">
        <br>
        <p>${description}</p>
        <br>
        <h3>${category}</h3>
        <br>
        <h3>${brand}</h3>
        <br>
        <h4>${price}$</h4>
        </div>`
    })
})