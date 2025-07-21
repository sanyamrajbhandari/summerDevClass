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

const number = 60
let guess = prompt("Guess the mystery number:")

while(guess!=number){

    if(guess<number){
        guess = prompt("Wrong!: Guess higher:")
    }else if(guess>number){
        guess = prompt("Wrong!Guess lower")
    }
    
    if (guess== number){
        break;
    }
}

alert("You guessed the correct nubmer!")
