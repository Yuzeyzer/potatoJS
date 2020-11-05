import { colorGray } from '../header/const.js';

export const imgWrapper = document.createElement('div');
imgWrapper.style.padding = '0 40px';
imgWrapper.style.boxSizing = 'border-box';
imgWrapper.style.margin = '100px 0';

export const imageGenerator = (parent, times, width) => {
  for (let i = 0; i < times; i++) {
    let randomizer = Math.floor(Math.random() * 100);
    var img = document.createElement('img');
    img.src = `https://source.unsplash.com/collection/${randomizer}/450x450`;
    img.style.width = width;
    img.style.padding = '3px';
    img.style.boxSizing = 'border-box';
    parent.appendChild(img);
  }
  return '';
};

export const time = document.createElement('ul');
time.style.fontSize = '16px';
time.style.listStyle = 'none';
time.style.display = 'flex';
time.style.color = colorGray;
time.style.position = 'fixed';
time.style.bottom = '50px';
time.style.left = '50%';
time.style.padding = '0';
time.style.background = '#fff';

const daysHTML = document.createElement('li');
const hoursHTML = document.createElement('li');
const minutesHTML = document.createElement('li');
const secondsHTML = document.createElement('li');

time.appendChild(daysHTML);
time.appendChild(hoursHTML);
time.appendChild(minutesHTML);
time.appendChild(secondsHTML);

const newYears = '06 Nov 2020';

const countDown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = Math.floor((newYearsDate - currentDate) / 1000);
  const totalSeconds = Math.floor(seconds % 60);
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  daysHTML.innerHTML = `${days}: `;
  hoursHTML.innerHTML = `${hours < 10 ? `0${hours}:` : hours}`;
  minutesHTML.innerHTML = `${minutes < 10 ? `0${minutes}:` : minutes}:`;
  secondsHTML.innerHTML = `${totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds}`;
};
countDown();
setInterval(countDown, 1000);
