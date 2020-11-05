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
export const scandinavianText = [
  'Salt & Pepper Bottle Grinders',
  'Restore storage basket',
  'Gubi Adnet Circulaire Mirror Tan',
  'Ferm Living Hexagon Pot Brass',
];

decorContentTitle.className = 'decor__content--title';
decorContentDescription.className = 'decor__content--description';
decorContentBtn.className = 'decor__content--btn';
decorContentWrapper.className = 'decor__content--wrapper';

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
decorContentBtn.innerHTML = 'READ MORE OUR STORY &rarr;';
decorContentBtn.href = '#';

export const decorRecommended = document.createElement('div');
export const decorRecommendedTitle = document.createElement('h3');
export const decorRecommendedSlider = document.createElement('div');
export const decorRecommendedItem = document.createElement('div');
export const decorRecommendedName = document.createElement('h5');
export const decorRecommendedPrice = document.createElement('span');
export const decorRecommendedLike = document.createElement('span');
export const decorRecommendedAddToCart = document.createElement('button');
export const decorRecommendedNew = document.createElement('span');
export const decorRecommendedNextBtn = document.createElement('button');
export const decorRecommendedPrevBtn = document.createElement('button');

decorRecommendedTitle.innerText = 'Recommended For You';
decorRecommendedName.innerText = 'Rollo LoyalBlue';
decorRecommendedPrice.innerText = '$92.00';
decorRecommendedLike.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 15" width="17" height="15">
<style>
  tspan { white-space:pre }
  .shp0 { fill: #666666 } 
</style>
<g id="MAIN">
  <g id="Recommended For You">
    <g id="Product 01">
      <path id="Heart" class="shp0" d="M15.63 1.39C14.74 0.5 13.56 0.01 12.3 0.01C11.04 0.01 9.86 0.5 8.97 1.4L8.51 1.86L8.03 1.39C7.14 0.49 5.96 0 4.7 0C3.45 0 2.26 0.49 1.38 1.38C0.49 2.27 0 3.46 0 4.72C0 5.99 0.49 7.17 1.38 8.06L8.15 14.85C8.25 14.95 8.37 15 8.49 15C8.62 15 8.74 14.95 8.84 14.86L15.62 8.08C16.51 7.18 17 6 17 4.73C17 3.47 16.52 2.29 15.63 1.39ZM14.93 7.39L8.49 13.82L2.07 7.37C1.36 6.67 0.97 5.73 0.97 4.72C0.97 3.72 1.36 2.78 2.07 2.08C2.77 1.37 3.7 0.98 4.7 0.98C5.7 0.98 6.64 1.37 7.34 2.08L8.16 2.9C8.35 3.09 8.66 3.09 8.85 2.9L9.65 2.09C10.36 1.38 11.3 0.99 12.3 0.99C13.29 0.99 14.23 1.38 14.93 2.08C15.64 2.79 16.03 3.73 16.03 4.73C16.03 5.74 15.64 6.68 14.93 7.39Z" />
    </g>
  </g>
</g>
</svg>`;
