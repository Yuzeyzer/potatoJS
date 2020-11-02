import {col4} from "../const.js";

const Decor = () => {
  const decorSection = document.createElement('section');
  const decorContainer = document.createElement('div');
  const decorHeader = document.createElement('div');
  const decorHero = document.createElement('div');
  const decorLogo = document.createElement('span');
  const decorCart = document.createElement('div');
  const decorContent = document.createElement('div');
  const decorTitle = document.createElement('h2');
  const decorSuptitle = document.createElement('h5');
  const decorWatchVideo = document.createElement('a');
  const decorRow = document.createElement('div');
  const decorColumns = document.createElement('div');
  const decorColumnIcon = document.createElement('img');
  const decorColumnsTitle = document.createElement('h5');
  const counter = '0';
  const array = [`./assets/svg/decor-icon1.svg`, `./assets/svg/decor-icon2.svg`, `./assets/svg/decor-icon3.svg`]
  const titles = ['FREE USA PRIORITY SHIPPING', 'PREMIUM DESIGN SERVICE FOR YOU', 'BEAUTIFUL GIFT WRAPPING']

  decorSection.className = 'decor';
  decorHero.className = 'decor__hero';
  decorContainer.className = 'decor__container';
  decorHeader.className = 'decor__header';
  decorTitle.className = 'decor__title';
  decorTitle.innerHTML = `Nordik <br> Storage Lounge Chair`;
  decorSuptitle.className = 'decor__suptitle';
  decorSuptitle.innerHTML = `<a href="#" class="decor__link">WATCH VIDEO</a>`;
  decorLogo.innerHTML = 'ocolus<span>.</span>';
  decorLogo.className = 'decor__logo';
  decorCart.className = 'decor__cart';
  decorCart.innerText = `YOUR CART [${counter}]`;

  decorSection.append(decorContainer);
  decorContainer.append(decorHeader);
  decorHero.append(decorHeader);
  decorHeader.append(decorLogo);
  decorHeader.append(decorCart);
  decorContainer.append(decorHero);
  decorHero.append(decorTitle);
  decorHero.append(decorSuptitle);
  decorContainer.append(decorRow);

  decorRow.className = 'decor__row'
  decorColumns.className = 'decor__columns'
  decorColumnIcon.className = 'decor__icons'
  decorColumnsTitle.className = 'decor__suptitle'

  decorRow.style.margin = '0 -5px'

  for (let i = 0; i < 3 ; i++) {
    let col4Cloned = col4.cloneNode()
    let decorItem = document.createElement('div')
    let decorColumnIconCloned = decorColumnIcon.cloneNode()
    let decorColumnsTitleCloned = decorColumnsTitle.cloneNode()
    decorItem.style.backgroundColor = '#e5edf3'
    decorItem.style.height = '170px'
    decorItem.style.margin = '10px 5px 0 5px'
    decorItem.append(decorColumnIconCloned)
    decorColumnIconCloned.src = array[i]
    decorItem.append(decorColumnsTitleCloned)
    decorColumnsTitleCloned.innerHTML = titles[i]
    col4Cloned.append(decorItem)
    decorRow.append(col4Cloned)
  }

  return decorSection;
};



export default Decor;
