import { languages } from './const.js';
import dropDown from './style/dropdown.js';
import { arrow } from './style/dropdown.js';

let array = [];

for (let i = 0; i < languages.length; i++) {
  var dropDownItems = document.createElement('li');
  dropDownItems.style.textTransform = 'uppercase';
  dropDownItems.innerHTML = `${languages[i]}`;
  dropDown.appendChild(dropDownItems);
  dropDownItems.style.transition = '0.3s';
  array.push(dropDownItems);
  if (i > 0) {
    dropDownItems.style.opacity = '0';
  }
}

dropDown.addEventListener('click', function () {
  if (dropDown.className == 'is-active') {
    dropDown.style.height = '60px';
    dropDown.className = 'none';
    dropDown.style.backgroundColor = 'transparent';
    dropDown.style.top = '0';
    dropDown.style.zIndex = '0';
    array.forEach((item, index) => {
      if (index > 0) {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
      }
    });
    arrow.style.transform = 'rotate(90deg)';
  } else {
    dropDown.style.zIndex = '1';
    dropDown.style.top = '1.1vw';
    dropDown.style.height = 'auto';
    arrow.style.transform = 'rotate(-90deg)';
    dropDownItems.style.display = 'block';
    dropDown.className = 'is-active';
    dropDown.style.overflow = 'visible';
    dropDown.style.backgroundColor = '#fff';
    array.forEach((item) => {
      item.style.opacity = '1';
      item.style.visibility = 'visible';
    });
  }
  dropDown.style.bottom = '0';
});
