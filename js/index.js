import header from './components/header/index.js';
import { imgWrapper, time } from './components/photoGenerator/index.js';
import overlay from './components/preloader/index.js';

const height = 1;

const Obj = {
  human: 'Ajara',
  age: 19,
  race: 'Asian',
  height: 168,
  weight: 49,
  volume: function() {
    return console.log(this.age + this.height);
  },
};

Obj.volume()

const root = document.getElementById('root');
root.appendChild(overlay);
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);