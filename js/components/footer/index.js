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

  let maxim = 0;

  footerButton.addEventListener('click', (event) => {
    const removeClass = () => {
      footerLabel.classList.remove('is-active');
    };
    if (!footerLabel.classList.contains('is-active')) {
      footerLabel.classList.add('is-active');
      setTimeout(removeClass, 1000);
    }
    event.preventDefault();
    maxim += 1;
    console.log(maxim);
    if (maxim % 5 === 0) {
      let video = document.createElement('video');
      const removeImg = () => {
        video.remove()
      };
      video.src = './assets/stop.mp4';
      video.setAttribute('autoplay', 'autoplay');
      video.style.position = 'fixed';
      video.style.left = '50%';
      video.style.top = '50%';
      video.style.transform = 'translate(-50%, -50%)';
      video.style.zIndex = '11';
      document.body.appendChild(video);
      setTimeout(removeImg, 2000)
    }
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
