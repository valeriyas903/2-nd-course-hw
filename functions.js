const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);



function filterStringsByPrefix(arr, prefix) {
 
  const lowerPrefix = prefix.toLowerCase();
  
  
  return arr.filter(str => {
    
  return str.toLowerCase().startsWith(lowerPrefix);
  });
}

const fruits = ['Apple', 'Banana', 'apricot', 'orange', 'Avocado'];
const result = filterStringsByPrefix(fruits, 'ap');
console.log(result); 




const num = 32.58884;

console.log("До меньшего целого:", Math.floor(num)); 
console.log("До большего целого:", Math.ceil(num));  
console.log("До ближайшего целого:", Math.round(num));



const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Минимальное значение:", minValue); 
console.log("Максимальное значение:", maxValue);


function getRandomNum() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}

getRandomNum();


const getRandomArray = num => 
  Array.from({ length: Math.floor(num / 2) }, () => Math.random() * num);



const getRandomInRange = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;


console.log(new Date());



const currentDate = new Date();

const futureDate = new Date(currentDate);

futureDate.setDate(futureDate.getDate() + 73);


console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


function formatDate(date) {
  const options = { 
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  const parts = new Intl.DateTimeFormat('ru-RU', options).formatToParts(date);
  
  const day = parts.find(p => p.type === 'day').value;
  const month = parts.find(p => p.type === 'month').value;
  const year = parts.find(p => p.type === 'year').value;
  const weekday = parts.find(p => p.type === 'weekday').value;
  const time = `${parts.find(p => p.type === 'hour').value}:` +
               `${parts.find(p => p.type === 'minute').value}:` +
               `${parts.find(p => p.type === 'second').value}`;

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${time}`;
}

console.log(formatDate(new Date()));