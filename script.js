function guessNumberGame() {
  const secret = 15;
  let guess = null;

  while (guess !== secret) {
    guess = Number(prompt("Угадайте число от 1 до 100:"));
    if (isNaN(guess)) {
      alert("Пожалуйста, введите число!");
      continue;
    }
    if (guess > secret) {
      alert("Меньше!");
    } else if (guess < secret) {
      alert("Больше!");
    } else {
      alert("Поздравляем! Вы угадали!");
    }
  }
}

function min(a, b) {
  return a < b ? a : b;
}


console.log(min(8, 4)); 
console.log(min(6, 6)); 

function checkEvenOdd(n) {
  return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}


console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7)); 


function printSquare(n) {
  console.log(n * n);
}

function getSquare(n) {
  return n * n;
}

printSquare(12); 

let result = getSquare(12);
console.log(result);

function checkAge() {
  let age = Number(prompt("Сколько вам лет?"));
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

checkAge();

function multNum(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return 'Одно или оба значения не являются числом';
  }
  return Number(a) * Number(b);
}


console.log(multNum(3, 5));       
console.log(multNum('a', 4));    

function cubeNumber() {
  let input = prompt("Введите число:");
  let n = Number(input);

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  } else {
    return `${n} в кубе равняется ${n ** 3}`;
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(cubeNumber(i));
}

alert(cubeNumber());

const circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};


console.log(circle1.getArea());      
console.log(circle1.getPerimeter()); 

console.log(circle2.getArea());      
console.log(circle2.getPerimeter()); 