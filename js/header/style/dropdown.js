import { dropDown, colorGray } from '../const.js';

export const arrow = document.createElement('span');


arrow.innerHTML = `>`;
arrow.style.position = 'absolute';
arrow.style.right = '0';
arrow.style.transform = 'rotate(90deg)';
arrow.style.transition = '0.3s'
dropDown.appendChild(arrow);
dropDown.style.boxSizing = 'border-box';
dropDown.style.cursor = 'pointer';
dropDown.style.position = 'relative';
dropDown.style.padding = '15px 15px 15px 0';
dropDown.style.margin = '0';
dropDown.style.listStyle = 'none';
dropDown.style.height = '60px';
dropDown.style.overflow = 'hidden';
dropDown.style.textDecoration = 'none';
dropDown.style.color = colorGray;
dropDown.style.fontSize = '12px';
dropDown.style.letterSpacing = '2px';
dropDown.style.lineHeight = '30px';
dropDown.style.fontFamily = 'Poppins';
dropDown.style.textTransform = 'uppercase';


export default dropDown;
