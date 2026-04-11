let url = "https://dummyjson.com/products"
let data = fetch(url).then((d)=>{
    return(d.json())
}).then((d)=>{
    let data = d.products
    data.map((ele)=>{
        console.log(ele)
    })
})
