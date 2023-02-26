import './index.scss';

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let date = new Date();
let now = date.getDay();


//test

//const dateParagraph = document.querySelector('.subheader__day-of-week');
//const timeParagraph = document.querySelector('.subheader__time');

const timeBlock = document.querySelector('#time1');
const timeBlock2 = document.querySelector('#time');


const dateElement = document.createElement('p');
dateElement.className = 'subheader__day-of-week';

const timeElement = document.createElement('p');
timeElement.className = 'subheader__time';

dateElement.innerHTML = days[now];
timeElement.innerHTML = `${date.getHours()}:${ date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;

timeBlock2.append(dateElement, timeElement);
/*

const widgetInfo = {
    header:
}*/
