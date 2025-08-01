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



function rockPaperScissors() {
  const choices = ["камень", "ножницы", "бумага"];
  

  const userChoice = prompt("Выберите: камень, ножницы или бумага?\n(Нажмите Отмена для выхода)");
  

  if (userChoice === null) {
    alert("Вы вышли из игры.");
    return;
  }
  
  const normalizedChoice = userChoice.toLowerCase().trim();
  
  
  if (!choices.includes(normalizedChoice)) {
    alert("Некорректный ввод! Пожалуйста, выберите камень, ножницы или бумагу.");
    return rockPaperScissors(); 
  }
  
 
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  

  let result;
  
  if (normalizedChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (normalizedChoice === "камень" && computerChoice === "ножницы") ||
    (normalizedChoice === "ножницы" && computerChoice === "бумага") ||
    (normalizedChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Компьютер победил!";
  }
  
  
  alert(`
    Ваш выбор: ${normalizedChoice}
    Выбор компьютера: ${computerChoice}
    Результат: ${result}
  `);
  
 
  if (confirm("Хотите сыграть ещё?")) {
    rockPaperScissors();
  }
}

