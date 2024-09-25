import { shapes } from '../utils/shapesArray';
import './computer.css';

let replicantHand = document.createElement('img');
replicantHand.className = 'starting-hand';

export { replicantHand };

export const computer = () => {
  const computerElement = document.querySelector('.computer');

  const name = document.createElement('p');
  name.textContent = 'REPLICANT';

  const computerHandContainer = document.createElement('div');
  computerHandContainer.className = 'hand-container';

  replicantHand.src = './assets/start.png';
  computerHandContainer.appendChild(replicantHand);

  computerElement.append(name, computerHandContainer);
};

export const randomComputer = () => {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  replicantHand.src = shapes[randomIndex].img;
  replicantHand.id = shapes[randomIndex].id;

  return shapes[randomIndex].id;
};
