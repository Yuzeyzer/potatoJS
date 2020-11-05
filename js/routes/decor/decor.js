import { col3, col4, col6, hr } from '../const.js';
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
  array,
  titles,
  decorContentTitle,
  decorContentDescription,
  decorContentBtn,
  decorContentWrapper,
  scandinavianText,
  decorRecommended,
  decorRecommendedTitle,
  decorRecommendedSlider,
  decorRecommendedItem,
  decorRecommendedName,
  decorRecommendedPrice,
  decorRecommendedLike,
  decorRecommendedAddToCart,
  decorRecommendedNew,
  decorRecommendedNextBtn,
  decorRecommendedPrevBtn,
} from './const.js';
import { imageGenerator } from '../../components/photoGenerator/index.js';

const Decor = () => {
  const appends = () => {
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
  };
  appends();

  const classNames = () => {
    decorRow.className = 'decor__row';
    decorColumns.className = 'decor__columns';
    decorColumnIcon.className = 'decor__icons';
    decorColumnsTitle.className = 'decor__suptitle';
  };
  classNames();

  decorRow.style.margin = '0 -5px';
  const decorRowClonned = decorRow.cloneNode();

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
    // Этот ужас не мой, вините Айзу
    for (let i = 0; i < 4; i++) {
      const scandinavianTitle = document.createElement('h3');
      const scandinavianBtn = document.createElement('a');
      scandinavianTitle.innerHTML = scandinavianText[i];
      scandinavianBtn.innerHTML = 'discover now';
      scandinavianTitle.className = 'scandinavian__title';
      scandinavianBtn.className = 'scandinavian__btn';
      scandinavianBtn.href = '#';
      let col6Clonned = col6.cloneNode();
      col6Clonned.classList.add('scandinavian__item');
      decorRowClonned.style.padding = '100px 0 0 0';
      decorRowClonned.append(col6Clonned);
      decorContainer.append(decorRowClonned);
      console.log(imageGenerator(col6Clonned, 1, '100%'));
      col6Clonned.append(scandinavianTitle);
      col6Clonned.append(scandinavianBtn);
    }
    decorContainer.append(hr);

    for (let index = 0; index < 4; index++) {
      decorContainer.append(decorRecommended);
      decorRecommended.append(decorRecommendedTitle);
      decorRecommended.append(decorRecommendedSlider);
      const col3Clonned = col3.cloneNode();
      const decorRecommendedItemClonned = decorRecommendedItem.cloneNode();
      decorRecommendedSlider.append(col3Clonned);
      col3Clonned.append(decorRecommendedItemClonned);
      decorRecommendedItemClonned.append(imageGenerator(decorRecommendedItemClonned, 1, '100%'));
    }
  };
  loops();
  return decorSection;
};

export default Decor;
