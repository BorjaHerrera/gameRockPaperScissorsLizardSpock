import { player } from '../player/player';
import { computer } from '../computer/computer';
import { gameMessage } from '../resultMessage/gameMessage';
import './screen.css';

export const screen = () => {
  const screenElement = document.querySelector('#screen');

  screenElement.innerHTML = `
      <div class="player"></div>
      <div id="result-message"></div>
      <div class="computer"></div>
  `;

  player();
  computer();
  gameMessage();
};
