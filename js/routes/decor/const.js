export const decorSection = document.createElement('section');
export const decorContainer = document.createElement('div');
export const decorHeader = document.createElement('div');
export const decorHero = document.createElement('div');
export const decorLogo = document.createElement('span');
export const decorCart = document.createElement('div');
export const decorTitle = document.createElement('h2');
export const decorSuptitle = document.createElement('h5');
export const decorRow = document.createElement('div');
export const decorColumns = document.createElement('div');
export const decorColumnIcon = document.createElement('img');
export const decorColumnsTitle = document.createElement('h5');
export const counter = '0';
export const array = [
  `./assets/svg/decor-icon1.svg`,
  `./assets/svg/decor-icon2.svg`,
  `./assets/svg/decor-icon3.svg`,
];
export const titles = [
  'FREE USA PRIORITY SHIPPING',
  'PREMIUM DESIGN SERVICE FOR YOU',
  'BEAUTIFUL GIFT WRAPPING',
];
export const decorContentTitle = document.createElement('h3');
export const decorContentDescription = document.createElement('p');
export const decorContentBtn = document.createElement('a');
export const decorContentWrapper = document.createElement('div');

decorContentTitle.className = 'decorContentTitle';
decorContentDescription.className = 'decorContentDescription';
decorContentBtn.className = 'decorContentBtn';

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
decorContentTitle.innerHTML = 'The Home Of Scandinavian Design';
decorContentDescription.innerHTML =
  'We help people find the perfect product at the right price. Our extensive selection and superior customer service coupled with the convenience of online shopping, make it easier than ever before to find exactly what you want for your home at a price you can afford.';
