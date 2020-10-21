import { container } from '../base.js';
import { dropDown, header } from './const.js';
import burgerMenu from './burgerMenu.js';
import nav from './nav.js';
import Cart from './cart.js';
import logo from './logo.js';
import searchIcon from './search.js'
import './dropDownItem.js';

const headerRow = document.createElement('div');
const headerBottom = document.createElement('div');


headerBottom.className = 'header-bottom';

headerRow.style.display = 'flex';
headerRow.style.justifyContent = 'space-between';
headerRow.style.alignItems = 'center';
headerRow.style.maxHeight = '50px';

header.className = 'header';

header.appendChild(container);
header.appendChild(headerRow);
header.appendChild(headerBottom)
container.appendChild(headerRow);
container.appendChild(headerBottom)
headerRow.appendChild(dropDown);
headerRow.appendChild(nav);
headerRow.appendChild(Cart);

headerBottom.appendChild(burgerMenu)
headerBottom.appendChild(logo)
headerBottom.appendChild(searchIcon)

export default header;
