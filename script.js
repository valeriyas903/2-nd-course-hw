for (let i = 0; i < 2; i++) {
  console.log("Привет");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

let obj = {
  "Коля": "200",
  "Вася": "300",
  "Петя": "400"
};

for (let name in obj) {
  console.log(`${name}:${obj[name]}`);
}

let firstFriday = 11; 

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}