import './header.css';
import { printScore } from './updateScore';

export const header = () => {
  const headerElement = document.querySelector('#header');

  headerElement.innerHTML = `
  <section id="header-container">
    <h1>
      ROCK<br>
      PAPER<br>
      SCISSORS<br>
      LIZARD<br>
      SPOCK
    </h1>
    <div id="score"></div>
  </section>
`;

  printScore();
};
