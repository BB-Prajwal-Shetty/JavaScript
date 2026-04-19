let cards = document.getElementsByClassName("cards")[0]
let task = async () =>{
    let data = await fetch("https://dummyjson.com/todos")
    let fd = await data.json()
    let ele = await fd.todos
    ele.map((e)=>{
         if(e.completed === true){
            cards.innerHTML += `<div class="card1">
            <h3>ID:${e.id}</h3>
            <h3>ToDo:${e.todo}</h3>
            <h3>Completed:${e.completed}</h3>
            <h3>UserID:${e.userId}</h3>
           </div>`
         }
         else{
            cards.innerHTML += `<div class="card2">
            <h3>ID:${e.id}</h3>
            <h3>ToDo:${e.todo}</h3>
            <h3>Completed:${e.completed}</h3>
            <h3>UserID:${e.userId}</h3>
           </div>`
         }
    })
}
task()