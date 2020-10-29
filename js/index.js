import header from './components/header/index.js';
import { imgWrapper, time } from './components/photoGenerator/index.js';
import overlay from './components/preloader/index.js';
import { footer } from './components/footer/index.js';
import Decor from './routes/decor.js';

const root = document.getElementById('root');

const deleter = () => {
  const array = [header, time, imgWrapper, footer];
  array.forEach((everyElement) => everyElement.remove());
};

root.appendChild(overlay);
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);
root.appendChild(footer);

// Код ниже не писать/не копировать

let navs = [...document.getElementsByClassName('nav__links')];
navs.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(item);
    let attr = item.getAttribute('href');
    console.log(attr);
    window.location.href = attr;
      e.preventDefault();
    
  });
});
console.log(navs);

root.append(Decor());
