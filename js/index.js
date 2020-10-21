import header from './header/index.js';
import { imgWrapper, time } from './photoGenerator/index.js';


const root = document.getElementById('root');
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);
