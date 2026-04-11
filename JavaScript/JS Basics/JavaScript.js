//STRINGS

//String Methods

// let a = "Prajwal";
// let x = "Aishwarya";
// let y = "Rai";
// let address = "bangalore";
// let company = "dheecodinglab";
// console.log(a.length) //7
// console.log(a.charAt(4)) //w
// console.log(a.concat(" ").concat("weds").concat(" ").concat(x).concat(" ").concat(y)) //Prajwal weds Aishwarya Rai
// console.log(a.endsWith("al")) //true
// console.log(a.includes("P")) //true
// console.log(a.indexOf("a")) //2
// console.log(a.lastIndexOf("a")) //5
// console.log(a.padEnd(10,"X")) //636XXXXXXX
// console.log(a.padStart(12,"X")) //XXXXXPrajwal
// console.log(a.repeat(3)) //PrajwalPrajwalPrajwal
// console.log(a.split("").reverse().join("")) //lawjarP
// console.log(a.substring(0)) //Prajwal
// console.log(a.slice(3,a.length)) //Slices the string according to given values o/p ===> jwal
// console.log(a.trim())  //removes unwanted space
// console.log(a.trimStart())  //removes unwanted space in start o/p ===> Prajwal
// console.log(a.trimEnd())  //removes unwanted space at end  o/p ===>           Prajwal

//NUMBERS

// let n = 100
// // console.log(n.toFixed(10)) //100.0000000000
// console.log(n.toPrecision(10)) //100.0000

//MATH

// console.log(Math.abs(-121))  //121
// console.log(Math.cbrt(125)) // 5   gives cube root
// console.log(Math.ceil(100.1)) // 101
// console.log(Math.floor(100.1)) // 100
// console.log(Math.max(1,2,3,4,5,6,7,8,9,10)) // 10
// console.log(Math.min(1,2,3,4,5,6,7,8,9,10)) // 1
// console.log(Math.floor(Math.random()*10)) // random in 0 to 9

                                       //Date Methods

// let date = new Date();
// // console.log(date)// todays date == Tue Feb 24 2026 08:48:09 GMT+0530 (India Standard Time)
// // console.log(date.getDate()) // todays date ==> 14
// console.log(date.getDay()) // day starts from 1 mon = 1 total 7
// console.log(date.getMonth()) // month starts from 0 jan = 0 total 11
// console.log(date.getFullYear()) // 2026
// console.log(date.getHours()) // only present hour == 8 == 8AM
// console.log(date.getMinutes()) //only present minutes == 47min now
// console.log(date.getSeconds()) //only present seconds
// // console.log(date.getMilliseconds()) // present miliseconds
// // console.log(date.toDateString()) // full date in strings == Tue Feb 24 2026

                                        //Operators

                    //Arithmetic

// let a = 10 // or true or null or undefined
// let b = 20 // or true or null or undefined
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

//Increment or Decrement

// let a = 100
// console.log(a++) //100 post incrementation
// console.log(++a) //102 pre incrementation

//Assignment

// let a = 10;
// let b = 5;
// console.log(a = b) // 5
// console.log(a += b) // 15
// console.log(a -= b) // 5
// console.log(a *= b) // 50
// console.log(a /= b) // 2
// console.log(a %= b) // 0
// console.log(a **= b)

//Comparision

// let a = 200
// let b = 100
// console.log(a < b) // false
// console.log(a > b) // true
// console.log(a <= b) // false
// console.log(a >= b) // true
// console.log(a != b) // true
// console.log(a == b) // false
// console.log(a === b) // false (checks the datatype)

                                       //ARRAY

// let array = [1,2,3,4,"prajwal","shetty",'a','b',true,false,null,undefined,Symbol(),BigInt(143),[1,2,3,4,5],{name: "prajwal"}]
// console.log(array)
// console.log(typeof(array)) // object

// let names = ["prajwal","shetty","aishwarya","rai","athin","nitish","deepika","ekant"]
// // console.log(names[4]) // 4
// console.log(`hello this is ${names[0]} ${names[1]} who weds ${names[2]}`)

//Assignment

// let movies = ["KGF","KGF 2","Katera","Dhurandhar","Hit 3","Bahubali 1","Kanthara 2","Pushpa 2"]
// let heroes = ["Yash","DBoss","Ranveer Singh","Nani","Prabhas","Rishab","Allu Arjun"]
// let heroines = ["Shrinidhi","Ananya","Sara","Anushka","Tamanna","Ruku","Rashmika"]
// let yor = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026]
// console.log(`The movie ${movies[0]} has a hero ${heroes[0]} and heroine ${heroines[0]} which was released in ${yor[3]}`)
// console.log(`The movie ${movies[1]} has a hero ${heroes[0]} and heroine ${heroines[1]} which was released in ${yor[7]}`)
// console.log(`The movie ${movies[2]} has a hero ${heroes[1]} and heroine ${heroines[1]} which was released in ${yor[8]}`)
// console.log(`The movie ${movies[3]} has a hero ${heroes[2]} and heroine ${heroines[2]} which was released in ${yor[10]}`)
// console.log(`The movie ${movies[4]} has a hero ${heroes[3]} and heroine ${heroines[0]} which was released in ${yor[10]}`)
// console.log(`The movie ${movies[5]} has a hero ${heroes[4]} and heroines ${heroines[3]} and ${heroines[4]} which was released in ${yor[0]}`)
// console.log(`The movie ${movies[6]} has a hero ${heroes[5]} and heroine ${heroines[5]} which was released in ${yor[10]}`)
// console.log(`The movie ${movies[7]} has a hero ${heroes[6]} and heroine ${heroines[6]} which was released in ${yor[9]}`)

//Array Methods

// let array = ["prajwal","shetty","mrunal","thakur","ravi","sagar","ravi","shastry"]

// let no = [[[[[[[[[[[1],2],3],4],5],6],7],8],9],10]]
// console.log(array.concat(no.flat(Infinity)))
// console.log(no.flat(Infinity))
// console.log(array.includes("shetty","gjdasghbj"))  // true ==> checks only 1st one at a time
// console.log(array.indexOf("ravi")) // 4 ==> starts from 0

// let a = "Hello my name is prajwal"
// let b = (a.split())
// console.log(b.join(""))

// console.log(array.lastIndexOf("ravi")) // 6

// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop()) // undefined
// console.log(array)

// console.log(array.push("sunny")) // 9
// console.log(array.push("munny")) // 10
// console.log(array)

// console.log(array.reverse())
// console.log(array)

//  console.log(array.shift())  // Removes the first element from an array and returns it. If the array is empty,
//                              //  undefined is returned and the array is not modified.
// console.log(array)

// console.log(array.unshift("Hello")) //opposite to push inserts new elements at the starting of array
// console.log(array)

// let a = array.slice(0,4).reverse()
// let b = array.slice(4,8).reverse()
// console.log(a.concat(b))

// console.log(array.splice(5))
// console.log(array)

// let x = [1,2,3,4,5,"ravi","hello","hi",6,7,"shastry",8,9,10]
// let num = x.splice(0,4)
// let hh = x.splice(1,4)
// let num2 = x.splice(1,3)
// // let ravi = x.splice(0).toString().toUpperCase().split().reverse().join()
// console.log(x)

// OBJECT {}

// let emp = {
//         emp_id : 75,
//         emp_name : "prajwal",
//         emp_contact : 6363238988,
//         address : "bangalore"
// }
// console.log(emp)

// let student = {
//         name : "Prajwal",
//         rollno : 23,
//         class : 10,
//         kannada : 80,
//         english : 80,
//         kannada : 80,
//         kannada : 80,
//         kannada : 80
// }

// let person = {
//         name : "Prajwal",
//         contact : 6363238988 ,
//         address : "Bangalore",
//         qualification : "BE",
//         Hobbies : ["Playing Cricket", "Reading Books",  "Watching Movies"]
// }
// console.log(`The person ${person.name}'s contact number is ${person.contact} and he lives in ${person.address}. His qualification is ${person.qualification} and his hobbies are ${person.Hobbies}.`)

// let P = {
//         name : "Prajwal",
//         contact : 6363238988,
//         address : "Bangalore",
//         qualification : ["SSLC","PUC","BE"],
//         profession : "Student",
//         hobbies : ["Playing Cricket", "Reading Books",  "Watching Movies"],
//         mobile : {
//                 name :
//         }
// }
// console.log(`Hello I am ${P.name}. My contact number is ${P.contact} and I lives on ${P.address}. My qualifications are ${P.qualification[0]}, ${P.qualification[1]} and ${P.qualification[2]}. Currently I am a ${P.profession}. My Hobbies are ${P.hobbies[0]}, ${P.hobbies[1]} and ${P.hobbies[2]}`)