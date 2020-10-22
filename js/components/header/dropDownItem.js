import { languages } from './const.js';
import dropDown from './style/dropdown.js';
import { arrow } from './style/dropdown.js';

let index;

for (let i = 0; i < languages.length; i++) {
  index = i;
  var dropDownItems = document.createElement('li');
  dropDownItems.style.textTransform = 'uppercase';
  dropDownItems.innerHTML = `${languages[i]}`;
  dropDown.appendChild(dropDownItems);
  dropDownItems.style.transition = '0.3s';
  if (i > 0) {
    dropDownItems.style.opacity = '0';
    dropDownItems.style.transform = 'translateY(-30px)';
  }
}

dropDown.addEventListener('click', function () {
  if (dropDown.className == 'is-active') {
    dropDown.style.height = '60px';
    dropDown.className = 'none';
    dropDown.style.backgroundColor = 'transparent';
    dropDownItems.style.opacity = '0';
    dropDownItems.style.transform = 'translateY(-30px)';
    arrow.style.transform = 'rotate(90deg)'
  } else {
    arrow.style.transform = 'rotate(-90deg)'
    dropDownItems.style.display = 'block';
    dropDownItems.style.transform = 'translateY(0)';
    dropDown.className = 'is-active';
    dropDown.style.overflow = 'visible';
    dropDown.style.backgroundColor = '#fff';
    dropDownItems.style.opacity = '1';
  }
  dropDown.style.bottom = '0';
});
