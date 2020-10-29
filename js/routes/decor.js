const Decor = () => {
  const decorSection = document.createElement('section');
  const decorHeader = document.createElement('div');
  const decorLogo = document.createElement('span');
  const decorCart = document.createElement('div');
  const decorContent = document.createElement('div');
  const decorTitle = document.createElement('h2');
  const decorWatchVideo = document.createElement('a');
  const decorRow = document.createElement('div');
  const decorColumns = document.createElement('div');
  const decorColumnIcon = document.createElement('svg');
  const decorColumnsTitle = document.createElement('h5');
  decorSection.innerText = 'Салам Алейкум Ажара, будете шашлык?';
  return decorSection;
};

export default Decor;
