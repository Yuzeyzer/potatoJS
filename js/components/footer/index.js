const Footer = () => {
  const footer = document.createElement('footer');
  const container = document.createElement('div');
  const footerForm = document.createElement('form');
  const footerTitle = document.createElement('h2');
  const footerLabel = document.createElement('label');
  const footerInput = document.createElement('input');
  const footerButton = document.createElement('button');
  const socialIcon = [];
  const CopyRight = document.createElement('span');

  footer.className = 'footer';
  container.className = 'container';
  footerTitle.className = 'footer__title';
  footerLabel.className = 'footer__label';
  footerInput.className = 'footer__input';
  footerForm.className = 'footer__form';
  footerButton.className = 'footer__btn';

  footerInput.setAttribute('placeholder', 'Enter your email address');

  footerButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(footerLabel)
    footerLabel.classList.toggle('is-active');
  });

  footerTitle.innerHTML = `Join Our Newsletter`;
  footerButton.innerHTML = 'Subscribe';
  footerLabel.appendChild(footerInput);
  footerForm.appendChild(footerLabel);
  footerForm.appendChild(footerButton);
  footer.appendChild(container);
  container.appendChild(footerTitle);
  container.appendChild(footerForm);
  return footer;
};

export default Footer;
