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