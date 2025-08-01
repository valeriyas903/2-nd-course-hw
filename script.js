function guessNumberGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let guess = null;

  while (guess !== secret) {
    const input = prompt("Угадайте число от 1 до 100:");
    if (input === null) {
      alert("Вы вышли из игры.");
      return;
    }
    guess = Number(input);
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

function simpleArithmeticGame() {

  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operations = ['+', '-', '*', '/'];
  const op = operations[Math.floor(Math.random() * operations.length)];

  
  let question = `${num1} ${op} ${num2}`;
  let correctAnswer;
  switch (op) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = +(num1 / num2); 
  }

  let userAnswer = prompt(`Решите пример: ${question}`);
  if (userAnswer === null) {
    alert("Вы вышли из игры.");
    return;
  }


  if (op === '/') {
    userAnswer = +(+userAnswer).toFixed(2); 
  } else {
    userAnswer = Number(userAnswer);
  }

  if (userAnswer === correctAnswer) {
    alert("Верно!");
  } else {
    alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}

function reverseText() {
  let userInput = prompt("Введите текст:");
  
  if (userInput === null) {
    alert("Вы вышли из игры.");
    return;
  }
  
  userInput = userInput.trim();
  
  if (userInput === "") {
    alert("Вы не ввели слово.");
    return;
  }
  
  const reversed = userInput.split("").reverse().join("");
  
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = `Результат: ${reversed}`;
  } else {
    
    alert(`Результат: ${reversed}\n`);
  } 
}


function simpleQuiz() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    
    
    let questionText = `${currentQuestion.question}\n`;
    questionText += currentQuestion.options.join('\n');
    
  
    const userAnswer = prompt(questionText);
    
    
    if (userAnswer === null) {
      alert("Вы вышли из игры. Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
      return;
    }
    
    
    if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
      score++;
      alert("Правильно!");
    } else {
      alert("Неправильно! Правильный ответ: " + currentQuestion.correctAnswer);
    }
  }

  
  alert(`Викторина завершена!\nВы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}

