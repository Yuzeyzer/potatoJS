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
    dropDownItems.style.transform = 'translateY(-30px)';
  }
}

dropDown.addEventListener('click', function () {
  if (dropDown.className == 'is-active') {
    dropDown.style.height = '60px';
    dropDown.className = 'none';
    dropDown.style.backgroundColor = 'transparent';

    array.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-30px)';
      array[0].style.opacity = '1';
      array[0].style.transform = 'translateY(0)';
    });
    arrow.style.transform = 'rotate(90deg)';
  } else {
    dropDown.style.height = 'auto';
    arrow.style.transform = 'rotate(-90deg)';
    dropDownItems.style.display = 'block';
    dropDown.className = 'is-active';
    dropDown.style.overflow = 'visible';
    dropDown.style.backgroundColor = '#fff';
    array.forEach((item) => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
  }
  dropDown.style.bottom = '0';
});
