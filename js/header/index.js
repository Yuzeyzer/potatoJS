import { container } from '../base.js';
import { dropDown, header } from './const.js';
import nav from './nav.js';
import './dropDownItem.js';

const headerRow = document.createElement('div');
headerRow.style.display = 'flex'

header.appendChild(container);
container.appendChild(headerRow);
headerRow.appendChild(dropDown)
headerRow.appendChild(nav)

export default header;