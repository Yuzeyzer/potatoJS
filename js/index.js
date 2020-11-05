import header from './components/header/index.js';
import { imgWrapper, time, imageGenerator } from './components/photoGenerator/index.js';
import overlay from './components/preloader/index.js';
import { footer } from './components/footer/index.js';
import Decor from './routes/decor/decor.js';
import { navLinksLocation } from './components/header/const.js';

const root = document.getElementById('root');

imgWrapper.append(imageGenerator(imgWrapper, 12, '25%'));

const deleter = () => {
  const array = [header, time, imgWrapper, footer];
  array.forEach((everyElement) => everyElement.remove());
};

const Bekjan = () => {
  const navLink = [...document.getElementsByClassName('nav__links')];
  navLink.forEach((item) =>
    item.addEventListener('click', (eldar) => {
      if (eldar.target.getAttribute('href') == '#decor') {
        deleter();
        root.append(Decor());
      }
    }),
  );
};

// root.appendChild(overlay);
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);
root.appendChild(footer);

Bekjan();
