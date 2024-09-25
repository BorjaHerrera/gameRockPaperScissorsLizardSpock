import { randomComputer, replicantHand } from '../computer/computer';
import { disableGameElements } from '../disableEnable/disableEnable';
import { updateScore } from '../header/updateScore';
import { humanHand } from '../player/player';
import { gameMessage } from '../resultMessage/gameMessage';
import { rotate } from '../rotateFunction/rotateFunction';
import { shapes } from '../utils/shapesArray';
import './buttonsFunctionality.css';

export const handButtons = () => {
  const handButtonsElement = document.querySelector('.buttons');

  const { printText } = gameMessage();

  handButtonsElement.innerHTML = '';

  for (const shape of shapes) {
    const shapeChosenContainer = document.createElement('div');
    shapeChosenContainer.className = 'shape-chosen-container';
    const shapeChosen = document.createElement('img');
    shapeChosen.src = shape.img;
    shapeChosen.alt = shape.id;
    shapeChosen.dataset.id = shape.id;
    shapeChosen.classList.add('game-element');

    shapeChosen.addEventListener('click', () => {
      humanHand.src = shapeChosen.src;

      const playerChoice = shapeChosen.dataset.id;
      const computerChoice = randomComputer();

      rotate();
      disableGameElements();

      gameOutcome(playerChoice, computerChoice, printText);
    });

    shapeChosenContainer.appendChild(shapeChosen);
    handButtonsElement.appendChild(shapeChosenContainer);
  }
};

const gameOutcome = (playerChoice, computerChoice, printText) => {
  let resultMessageElement = document.querySelector('#result-message');
  resultMessageElement.classList.remove('hidden');

  if (playerChoice === computerChoice) {
    printText.textContent = 'DRAW';
  } else if (
    (playerChoice === 'spock' && computerChoice === 'rock') ||
    (playerChoice === 'spock' && computerChoice === 'scissors') ||
    (playerChoice === 'lizard' && computerChoice === 'spock') ||
    (playerChoice === 'lizard' && computerChoice === 'paper') ||
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'rock' && computerChoice === 'lizard') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'paper' && computerChoice === 'spock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'scissors' && computerChoice === 'lizard')
  ) {
    printText.textContent = 'YOU WIN';
    updateScore(1);
  } else {
    printText.textContent = 'YOU LOSE';
    updateScore(-1);
  }
};
