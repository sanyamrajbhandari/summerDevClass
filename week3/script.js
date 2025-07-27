// let temperature = 45;

// if(temperature>30){
//     console.log("The temperature is above 30 degrees!")
// }else if(temperature<30){
//     console.log("The temperature is below 30")
// }

// let isRaining = true

// if (isRaining===true){
//     console.log("Take an umbrella")
// }else{
//     console.log("NO need for an umbrella!")
// }

// let number = prompt("Enter a number:");

// if(number>0){
//     console.log("The number is positive")
// }else if(number<0){
//     console.log("The number is negative")
// }else{
//     console.log("The number is 0")
// }

//Object type shi

// let attendance = {
//   name: "Sanyam Rajbhandari",
//   gorup: "Group3",
//   isPresent: false,
//   presentDays: 9,
//   absentDays: 0,
//   studentNumber: "np03cs4a240197@gmail.com",
// };

// console.log(
//   attendance.isPresent
//     ? attendance.name + " is present"
//     : attendance.name + " is absent"
// );

// let string1 = "TunTung";
// let string2 = "BunTung";

// if(string1 === string2){
//     console.log("the strings are equal")
// }else{
//     console.log("The strings are not equal")
// }

// let age = 19

// if(age>65){
//     console.log("This person is a senior")
// }else if(age>=18){
//     console.log("This person is an adult")
// }else if(age>=13){
//     console.log("This person is a teenager")
// }else if(age>0){
//     console.log("This is a child!!!")
// }else{
//     console.log("The age cannot be negative or zero!")
// }

// const number = 60
// let guess = prompt("Guess the mystery number:")

// while(guess!=number){

//     if(guess<number){
//         guess = prompt("Wrong!: Guess higher:")
//     }else if(guess>number){
//         guess = prompt("Wrong!Guess lower")
//     }
    
//     if (guess== number){
//         break;
//     }
// }

// alert("You guessed the correct nubmer!")




// string1 = "Sanyam Rajbhandariii   "
// string2 = "Sanyam Rajbhandari"

// console.log(string1.trim())
// console.log(string2.toUpperCase())
// console.log(string2.toLowerCase())
// console.log(string1.length)


// console.log(`hiiii My name is ${string1}`)

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<=arr.length;i++){
//     console.log(i);
// }


// For of is a method to iterate an array in JS
// for (let num of arr){
//     console.log(`Hol up BIyaaaatchhh ${num}`)
// }

// let names = ["Sanyam", "Resha", "Wawa", "Pimbahal", "Mari"]
// for(let name of names){
//     console.log(name)
// }


// let laptop = {
//     name: "Acer Aspire 5",
//     os:"Linux Mint",
//     processor:"Intel i5 1137g",
//     ram:"8gb",
// }

// for (let specs in laptop){
//     console.log(`${specs}:${laptop.specs}`)
// }




//Array Methods

let arr1 = [1,100,200,300,400]

// Add a new element at the end of an array

arr1.push(90)

//Remove an element from the end position of an array
// Also returns which element it Removed
console.log(arr1.pop())
console.log(arr1)

// To change the data type of an array to a string

let arr2 = arr1.toString()
console.log(typeof(arr2[2]))


//shift-> First element lai delete garera tyo element lai return garxa
//unshift-> Adds an element to the first position

//slice(startIndex,endIndex) -> TO print the part of an array, the end index is optional

//splice(add,remove,replace) -> Changes the original array

//add-> Kun index baata start garne
//remove -> kati ota elements remove garne from that index
//remove gareko thaun maaa kun kun elements feri haalne


// let name = "sanyam";
// let nameArray = [];

// for(char of name){
//     nameArray.push(char)
// };

// nameArray.unshift("a")
// nameArray.push(12)


// let marvelHeroes = ["Captain America","Hulk","Ironman","Thor"];

// marvelHeroes.push("Ant Man");
// console.log(marvelHeroes)

// marvelHeroes.shift();
// console.log(marvelHeroes)

// marvelHeroes.unshift("Superman");
// console.log(marvelHeroes)

// marvelHeroes.splice(2,1,"Ironman2");
// console.log(marvelHeroes)



// function sumNum(a,b){
//     return a+b
// }

// const arrowSumNum = (a,b)=> {
//     return a+b 
// }
// console.log(sumNum(1,2))
// console.log(arrowSumNum(5,4))



//Higher order functions
// THose functions which pass other functions as parameters or returns other functions as output