import { screen } from '../screen/screen';
import { shapeSelector } from '../selector/selector';
import './board.css';

export const board = () => {
  const boardElement = document.querySelector('#board');
  boardElement.innerHTML = `
      <div id="screen">
      </div>
      <div id="selector">
      </div>
  `;
  screen();
  shapeSelector();
};
