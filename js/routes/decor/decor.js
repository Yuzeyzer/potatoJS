import { col4 } from '../const.js';
import {
  decorSection,
  decorContainer,
  decorHeader,
  decorHero,
  decorLogo,
  decorCart,
  decorTitle,
  decorSuptitle,
  decorRow,
  decorColumns,
  decorColumnIcon,
  decorColumnsTitle,
  counter,
  array,
  titles,
  decorContentTitle,
  decorContentDescription,
  decorContentBtn,
  decorContentWrapper,
} from './const.js';


const Decor = () => {
  decorSection.append(decorContainer);
  decorContainer.append(decorHeader);
  decorHero.append(decorHeader);
  decorHeader.append(decorLogo);
  decorHeader.append(decorCart);
  decorContainer.append(decorHero);
  decorHero.append(decorTitle);
  decorHero.append(decorSuptitle);
  decorContainer.append(decorRow);
  decorContentWrapper.append(decorContentTitle);
  decorContentWrapper.append(decorContentDescription);
  decorContentWrapper.append(decorContentBtn);
  decorContainer.append(decorContentWrapper);

  

  decorRow.className = 'decor__row';
  decorColumns.className = 'decor__columns';
  decorColumnIcon.className = 'decor__icons';
  decorColumnsTitle.className = 'decor__suptitle';

  decorRow.style.margin = '0 -5px';

  const loops = () => {
    for (let i = 0; i < 3; i++) {
      let col4Cloned = col4.cloneNode();
      let decorItem = document.createElement('div');
      let decorColumnIconCloned = decorColumnIcon.cloneNode();
      let decorColumnsTitleCloned = decorColumnsTitle.cloneNode();
      decorItem.style.backgroundColor = '#e5edf3';
      decorItem.style.height = '170px';
      decorItem.style.margin = '10px 5px 0 5px';
      decorItem.append(decorColumnIconCloned);
      decorColumnIconCloned.src = array[i];
      decorItem.append(decorColumnsTitleCloned);
      decorColumnsTitleCloned.innerHTML = titles[i];
      col4Cloned.append(decorItem);
      decorRow.append(col4Cloned);
    }
  };
  loops();

  return decorSection;
};

export default Decor;
