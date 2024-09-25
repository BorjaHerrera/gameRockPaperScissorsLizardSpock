import { replicantHand } from '../computer/computer';
import { enableGameElements } from '../disableEnable/disableEnable';
import { humanHand } from '../player/player';
import './gameMessage.css';

export const gameMessage = () => {
  const resultMessageElement = document.querySelector('#result-message');

  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container';

  let printText = document.querySelector('#print-text');
  let playAgain = document.querySelector('#play-again');

  if (!printText) {
    printText = document.createElement('p');
    printText.id = 'print-text';
  }

  if (!playAgain) {
    playAgain = document.createElement('button');
    playAgain.id = 'play-again';
    playAgain.textContent = 'PLAY AGAIN';

    playAgain.addEventListener('click', () => {
      resultMessageElement.classList.add('hidden');
      enableGameElements();
      humanHand.src = './assets/start.png';
      replicantHand.src = './assets/start.png';
    });
  }
  messageContainer.append(printText, playAgain);
  resultMessageElement.appendChild(messageContainer);

  resultMessageElement.classList.add('hidden');

  return { printText };
};
