//wap to print the numbers range from 1 to 10

// for(let i = 1;i <= 10; i++){
//     console.log(i)
// }

//wap to print the numbers range from 1 to 100

// for(let i = 1;i <= 100; i++){
//     console.log(i)
// }

// //wap to print the numbers range from 50 to 75

// for(let i = 50;i <= 75; i++){
//     console.log(i)
// }

//wap to print the numbers range from 1 to 100 multiple of 2

// for(let i = 1;i <= 100; i+=2){
//     console.log(i)
// }

//wap to print the numbers range from 1 to 100 multiple of 5

//wap to print the numbers range from 1 to 1000 multiple of 10

//wap to print the numbers range from a and b given by the user

// let a = Number(prompt("Enter Number a:"));
// let b = Number(prompt("Enter Number b:"));
// if (isNaN(a) || isNaN(b) || a > b) {
//   alert("invalid input");
// } else {
//   for (i = a; i <= b; i++) {
//     console.log(i);
//   }
// }

// wap to print multiplication table as per user choice

// let a = Number(prompt("Enter the no:"))
// if(isNaN(a) || a < 0){
//     alert("Please provide proper input.")
// }
// else{
//     for( i = a ; i <= a*10 ; i += a){
//             console.log(`${a} X ${} = ${i}`)
//     }
// }

// wap to print a multiplication table of user choice range from a to b as per user giveb

// let no = Number(prompt("Enter the numbeer:"))
// let a = Number(prompt("Enter value of a:"))
// let b = Number(prompt("Enter value of b:"))
// if(isNaN(no) || isNaN(a) || isNaN(b) || a > b || a < 1){
//     alert("Please provide proper number:")
// }
// else{
//     for(let i = a; i <= b; i++)
//         console.log(`${no} X ${i} = ${no * i}`)
// }

//wap to write the names of foods 10 elements in an array amd print fruits in capital letter

// let fruits = ["apple","banana","orange","mango","butterfruit","gauva","watermelon","strawberry","pineapple","papaya"]
// for(let i = 0;i < fruits.length; i++){
//      console.log(fruits[i].toUpperCase())
// }

//wap to print  a names of 10 students in a array if your name is present make your name capital letter

// let students = ["athin","samprita","prajwal","rakshita","dhanush","ranjita","smita","shashank","yashwanth","harsha"]
// for(let i = 0;i<students.length;i++){
//     if(students[i]==="prajwal"){
//         console.log(students[i].toUpperCase())
//     }
//     else{
//         console.log(students[i])
//     }
// }

// wap 10 names 1st and last letter capital

// let name = ["athin","samprita","prajwal","rakshita","dhanush","ranjita","smita","shashank","yashwanth","harsha"]

// for(let i = 0;i < name.length; i++){
//     if(name === )
// }

// wap 10 names in array each name make it capital and return it inside new array

// let name = ["athin","samprita","prajwal","rakshita","dhanush","ranjita","smita","shashank","yashwanth","harsha"]
// let newArr = []
// for(i = 0;i<name.length;i++){
//     newArr.push(name[i].toUpperCase())
// }
// console.log(newArr.reverse())

// ravi and shastry capital in array

// let names = ["athin","samprita","prajwal","rakshita","ravi","dhanush","ranjita","smita","shashank","shastry","yashwanth","harsha"]
// arr = []
// for(let i = 0;i<names.length;i++){
//     if(names[i]=== "ravi" || names[i]=== "shastry"){
//         arr.push(names[i].toUpperCase())
//     }
//     else{
//         arr.push(names[i])
//     }
// }
// console.log(arr)

// wap to calculate sum of even numberr range from 0 to 100

// for(let i = 0; i <=100; i+=2){

//     console.log(i)
// }

// wap to prime or not
// given string is palindrome or not
// wap given number is palindrome or not
// odd number print 0 to 100

// for(i=1;i<=100;i+=2){
//     console.log(i)
// }

// let n = Number(prompt("enter n"))
// for(i=0;i<=n;i++){
//     if(i%n == 0){
//         console.log("it is prime")
//     }
//     else{
//         console.log("it is not prime")
//     }
// }

// let str = prompt("enter string")
// let rev_str = str.split("").reverse().join("")
// if(str == rev_str){
//     console.log("p")
// }
// else{
//     console.log("np")
// }

// wap to calculate the prime

// let a = Number(prompt("Enter the Number:"))
// let prime = true
// for(let i = 2 ; i <= Math.floor(Math.sqrt(a)) ; i++){
//     if(a % i === 0){
//         console.log(i)
//         prime = false
//         break
//     }
// }
// if(prime){
//     console.log("Prime Number")
// }
// else{
//     console.log("Not a Prime Number")
// }

// 100 - 1

// for(i=100;i>=1;i--){
//     console.log(i)
// }

// 50 to 25

// for(i=50;i>=25;i--){
//     console.log(i)
// }

// multiples of 5 range from 100 to 0

// for(i = 100; i > 0 ; i--){
//     if(i%5==0){
//         console.log(i)
//     }
// }

// wap to print a no multiples of 10 range from 100  to 0

// for(i = 100; i > 0 ; i--){
//     if(i%10==0){
//         console.log(i)
//     }
// }

// wap to print a no range from a to b given by user

// let a = Number(prompt("Enter a:"))
// let b = Number(prompt("Enter b:"))
// if(isNaN(a) || isNaN(b) || a < b){
//     alert("invalid input")
// }
// else{
//     for(i = a; i >=b ; i--){
//         console.log(i)
//     }
// }

// wap to print a no divisible by 3 range from 100 to 0 and sum of these no

// let sum = 0
// for(i = 100; i >= 0 ; i--){
//     if(i%3==0){
//         console.log(i)
//         sum += i
//     }
// }
// console.log(sum)

// wap to print a no divisible by 10 range from a and b given by user and sum of these no

// let a = Number(prompt("Enter a:"))
// let b = Number(prompt("Enter b:"))
// let sum = 0
// if(isNaN(a) || isNaN(b) || a < b){
//     alert("invalid input")
// }
// else{
//     for(i = a; i >=b ; i--){
//         if(i%10==0){
//             console.log(i)
//             sum+= i
//         }
//     }
// }
// console.log(sum)

// wap to find the factorial of given no using reversing no order

// let a = Number(prompt("enter n0:"))
// let fact = 1
// for(let i = a ; i >= 1 ; i--){
//     fact *= i
// }
// console.log(fact)

// wap to find the sum of factorial of given no

// let a = Number(prompt("enter n0:"))
// let fact = 1
// let sum = 0
// for(let i = a ; i >= 1 ; i--){
//     fact *= i
//     sum += fact
// }
// console.log(fact)
// console.log(sum)

// wap to print a no which is divisible by 3 range from 100 to 0 and find a sum of even numbers

//wap to print the sum of no given by user

// wap to reverse the array of  ["Apple","Mnago","Banana","Grapes","Pineapple","Orange"]

// let a = ["Apple","Mnago","Banana","Grapes","Pineapple","Orange"]
// for(i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }

// wap to reverse the elements in the of ravi and shastry

// let arr = ["Apple","Mnago","ravi","Banana","Grapes","shastry","Pineapple","Orange"]
// let new_arr = []
// for(i=arr.length-1;i>=0;i--){
//     if(arr[i]==="ravi"){
//         new_arr.push(arr[i].toUpperCase())
//     }
//     if(arr[i]==="shastry"){
//         new_arr.push(arr[i].toUpperCase())
//     }
//     else{
//         new_arr.push(arr[i])
//     }
// }
// console.log(new_arr)

// let arr = ["Apple","Mnago","ravi","Banana","Grapes","shastry","Pineapple","Orange"]
// let new_arr = []
// for(i=arr.length-1;i>=0;i--){
//     if(arr[i]==="ravi"){
//         new_arr.push(arr[i].toUpperCase().split('').reverse().join(''))
//     }
//     else if(arr[i]==="shastry"){
//         new_arr.push(arr[i].toUpperCase().split('').reverse().join(''))
//     }
//     else{
//         new_arr.push(arr[i])
//     }
// }
// console.log(new_arr)


// let arr = ["apple","mango","ravi","banana","grapes","shastry","pineapple"]
// let revarr = []
// for(i=0;i<arr.length;i++){
//     if(arr[i]==="ravi" || arr[i]==="shastry"){
//         let x = ""
//         for(j = arr[i].length-1;j>=0;j--){
//             if(j % 2 === 0){
//                 x += arr[i][j].toUpperCase()
//             }
//             else{
//                 x += arr[i][j]
//             }
//         }
//         revarr.push(x)
//     }
//     else{
//         revarr.push(arr[i])
//     }
// }  
// console.log(revarr)

                          // interview amithi

// let arr = ["Ravi","Shastry","Mrunal","Thakur",'a','b','c','d',1,2,3,4,'$','#','%','@']
// let words = []
// let ch = []
// let no = []
// let spcl = []
// for(i=0;i<arr.length;i++){
//     if(arr[i].length>1){
//         words.push(arr[i])
//     }
//     else{
//         if(!isNaN(arr[i])){
//             no.push(arr[i])
//         }
//         else{
//             if("!@#$%^&*()_}{><".includes(arr[i])){
//                spcl.push(arr[i])
//             }
//             else{
//                 ch.push(arr[i])
//             }
//         }
//     }   
// }
// console.log(words)
// console.log(ch)
// console.log(no)
// console.log(spcl)

                              // new for loop

// let arr = ["apple","mango","banana","grapes","pineapple"]  
// for(elements of arr){
//     if(elements === "apple"){
//         console.log(elements.toUpperCase())
//     }
//     else{
//         console.log(elements)
//     }      
// }   

                              // forEach

// let arr = ["apple","mango","banana","grapes","pineapple"] 
// arr.forEach((data,index,array)=>{
//       console.log(data.toUpperCase())
//       console.log(index)
//       console.log(array)
// })