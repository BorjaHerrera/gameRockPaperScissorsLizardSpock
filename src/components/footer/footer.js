import { reset } from '../reset/reset';
import { rules } from '../rules/rules';
import './footer.css';

export const footer = () => {
  const footerElement = document.querySelector('#footer');

  footerElement.innerHTML = `
  <div class="rules"></div>
  <div class="reset"></div>

`;
  rules();
  reset();
};
