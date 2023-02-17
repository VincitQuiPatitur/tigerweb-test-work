import './index.css';

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let date = new Date();
let now = date.getDay();

const dateParagraph = document.querySelector('.subheader__day-of-week');
const timeParagraph = document.querySelector('.subheader__time');

dateParagraph.textContent = days[now];
timeParagraph.textContent = `${date.getHours()}:${ date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
console.log(days[now]);