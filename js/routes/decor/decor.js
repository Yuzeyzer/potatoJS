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
  const decorColumnIcon = document.createElement('svg');
  const decorColumnsTitle = document.createElement('h5');
  const counter = '0';

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

  return decorSection;
};

export default Decor;
