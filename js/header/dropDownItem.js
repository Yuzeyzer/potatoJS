import { languages } from './const.js';
import dropDown from './style/dropdown.js'

for (let i = 0; i < 2; i++) {
  let dropDownItems = document.createElement('li');
  dropDownItems.style.textTransform = 'uppercase';
  dropDownItems.innerHTML = `${languages[i]}`;
  dropDown.appendChild(dropDownItems);
}