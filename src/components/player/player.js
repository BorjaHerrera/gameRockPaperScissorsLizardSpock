import './player.css';

let humanHand = document.createElement('img');
humanHand.className = 'starting-hand';

export { humanHand };

export const player = () => {
  const playerElement = document.querySelector('.player');
  const name = document.createElement('p');
  name.textContent = 'PLAYER';

  const humanHandContainer = document.createElement('div');
  humanHandContainer.className = 'hand-container';
  humanHand.src = './assets/start.png';

  humanHandContainer.appendChild(humanHand);

  playerElement.append(name, humanHandContainer);
};
