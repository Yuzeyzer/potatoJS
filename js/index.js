import header from './components/header/index.js';
import { imgWrapper, time } from './components/photoGenerator/index.js';
import overlay from './components/preloader/index.js';
import Footer from './components/footer/index.js';

const root = document.getElementById('root');
// root.appendChild(overlay);
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);
root.appendChild(Footer());
