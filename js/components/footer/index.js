import Nav from '../header/nav.js';
import { container } from '../../base.js';

// const Footer = (noned = false) => {
  const footerNav = Nav.cloneNode(true);
  export const footer = document.createElement('footer');
  const footercontainer = container.cloneNode(false);
  const footerForm = document.createElement('form');
  const footerTitle = document.createElement('h2');
  const footerLabel = document.createElement('label');
  const footerInput = document.createElement('input');
  const footerButton = document.createElement('button');
  const socialIcon = document.createElement('ul');
  const copyRight = document.createElement('span');

  footer.className = 'footer';
  footerNav.className = 'footer__nav';
  socialIcon.className = 'footer__social social';
  copyRight.className = 'footer__copyright';
  footercontainer.className = 'container';
  footerTitle.className = 'footer__title';
  footerLabel.className = 'footer__label';
  footerInput.className = 'footer__input';
  footerForm.className = 'footer__form';
  footerButton.className = 'footer__btn';

  footerInput.setAttribute('placeholder', 'Enter your email address');

  let maxim = 0;

  // Это было для ребят, их хотелочка //
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
        video.remove();
      };
      video.src = './assets/stop.mp4';
      video.setAttribute('autoplay', 'autoplay');
      video.style.position = 'fixed';
      video.style.left = '50%';
      video.style.top = '50%';
      video.style.transform = 'translate(-50%, -50%)';
      video.style.zIndex = '11';
      document.body.appendChild(video);
      setTimeout(removeImg, 2000);
    }
  });
  socialIcon.innerHTML = `
  <li class='social__item'><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
  <li class='social__item'><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
  <li class='social__item'><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
  <li class='social__item'><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
  <li class='social__item'><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
  `;
  footerTitle.innerHTML = `Join Our Newsletter`;
  footerButton.innerHTML = 'Subscribe';
  copyRight.innerText = '© 2018 Ocolus. All Rights Reserved';
  footerLabel.appendChild(footerInput);
  footerForm.appendChild(footerLabel);
  footerForm.appendChild(footerButton);
  footer.appendChild(footercontainer);
  footercontainer.appendChild(footerTitle);
  footercontainer.appendChild(footerForm);
  footercontainer.appendChild(footerNav);
  footercontainer.append(socialIcon);
  footercontainer.append(copyRight);
  // if (noned == true) {
  //   const root = document.getElementById("root")
  //   root.removeChild(footer);
  // }
  // return footer;
// };

// export Footer;
