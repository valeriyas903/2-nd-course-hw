let arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  if (arr1[i] === 10) {
    break;
  }
}



let arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));



let arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));



let matrix = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(1);
  }
  matrix.push(row);
}

console.log(matrix);



let arr4 = [1, 1, 1];

arr4.push(2, 2, 2);

console.log(arr4);


let arr5 = [9, 8, 7, 'a', 6, 5];

arr5 = arr5.sort().filter(item => typeof item === 'number');

console.log(arr5);


let arr6 = [9, 8, 7, 6, 5];

let userInput = prompt("Угадайте число из массива:");
if (arr6.includes(Number(userInput))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


let str = 'abcdef';

console.log(str.split('').reverse().join(''));


const arr7 = [[1, 2, 3], [4, 5, 6]];
const flatArr = [...arr[0], ...arr[1]];
console.log(flatArr);



const arr = [3, 7, 1, 9, 4, 6]; 

for (let i = 0; i < arr.length - 1; i++) {
  const sum = arr[i] + arr[i + 1];
  console.log(`Сумма элементов ${arr[i]} и ${arr[i + 1]}: ${sum}`);
}


function getSquares(arr) {
  return arr.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares); 


function getWordLengths(words) {
  return words.map(word => word.length);
}

const strings = ["apple", "banana", "kiwi"];
const lengths = getWordLengths(strings);
console.log(lengths);


function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}

const num = [3, -1, 0, -7, 5, -2];
const negatives = getNegativeNumbers(numbers);
console.log(negatives); 


const originalArray = [];
for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 11); 
  originalArray.push(randomNum);
}

const evenArray = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Чётные значения:", evenArray);




const numb = [];
for (let i = 0; i < 6; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1; // 1–10 включительно
  numbers.push(randomNum);
}

const sum = numbers.reduce((acc, num) => acc + num, 0);

const average = sum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Среднее арифметическое:", average);