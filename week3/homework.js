//Question 1

let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < studentMarks.length; i++) {
  sum += studentMarks[i];
}
let average = sum / studentMarks.length;
console.log(`The average marks of the students is ${average}`);

//Question 2

let items = [250, 645, 300, 900, 50];

let discountedItems = items.map((item) => {
  return 0.9 * item;
});
console.log(discountedItems);

//Question 3

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//Deleting the first item
companies.shift();
console.log(companies);

//Removing Uber and adding Ola
companies.splice(1, 1, "Ola");
console.log(companies);

//Adding Amazon at the end
companies.push("Amazon");
console.log(companies);

//Question 4

function vowelCounter(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let char of word) {
    char = char.toLowerCase();
    if (vowels.includes(char)) {
      vowelCount += 1;
    }
  }
  console.log(`The vowel count in ${word} is ${vowelCount}`);
}

vowelCounter("Apple");

//Question 5

const arrowVowelCounter = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let char of word) {
    char = char.toLowerCase();
    if (vowels.includes(char)) {
      vowelCount += 1;
    }
  }
  console.log(`The vowel count in ${word} is ${vowelCount}`);
};

arrowVowelCounter("Banana");

// For each question

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * number);
});

//Filter  homework

let studentMarksPart2 = [80, 90, 91, 95, 78, 100, 102];

let filteredMarks = studentMarksPart2.filter((value) => {
  const isOver90 = value > 90;
  return isOver90; //boolean matra return gare ni pugxa filer maa
});

console.log(filteredMarks);

// reduce

const userInput = parseInt(prompt("Please enter a number:"));
let sumNum = [];
for (let i = 1; i <= userInput; i++) {
  sumNum.push(i);
}

console.log(sumNum);

let sumOfUserInput = sumNum.reduce((total, num) => {
  return total + num;
});

let productOfUserInput = sumNum.reduce((product, num) => {
  return product * num;
});
console.log(sumOfUserInput);
console.log(productOfUserInput);
