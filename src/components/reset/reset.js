import './reset.css';
import { resetScore } from '../header/updateScore';
export const reset = () => {
  const resetElement = document.querySelector('.reset');

  const resetButton = document.createElement('button');
  resetButton.textContent = 'RESET';
  resetButton.className = 'reset-button';
  resetElement.appendChild(resetButton);

  resetButton.addEventListener('click', resetScore);
};
