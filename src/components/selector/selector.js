import { handButtons } from '../buttonsFunctionality/buttonsFunctionality';
import './selector.css';

export const shapeSelector = () => {
  const selectorElement = document.querySelector('#selector');
  selectorElement.innerHTML = `
      <div class="buttons"></div>
  `;
  handButtons();
};
