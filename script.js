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