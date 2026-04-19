let cards = document.getElementById("cards");
let span = document.getElementById("span");
let task = async () => {
  let data = await fetch("https://dummyjson.com/carts");
  let fd = await data.json();
  let ele = await fd.carts;
  ele.map((e) => {
    cards.innerHTML += `<div class="card">
                <h1>User ID : ${e.id} </h1> <br>
                <div id="span">
                ${e.products.map((p) => {
                  return `<span>
                    <h4>Product ID: ${p.id}</h4>
                    <h4>Product Title: ${p.title}</h4>
                    <h4>Price: ${p.price}</h4>
                    <h4>Quantity: ${p.quantity} </h4>
                    <h4>Total: ${p.total}</h4>
                    <h4>Discounted Total: ${p.discountedTotal}</h4>
                    <img src="${p.thumbnail}" alt="">
                    </span>`;
                })}
                </div>
                <div class="bottom">
                <h2>Total : ${e.total}</h2>
                <h2>Discounted Total : ${e.discountedTotal} </h2>
                <h2>User ID :${e.userId} </h2>
                <h2>Total Products : ${e.totalProducts}</h2>
                <h2>Total Quantity :${e.totalQuantity}</h2>
                </div>
            </div>`;
  });
};
task();
