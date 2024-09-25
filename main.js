import { board } from './src/components/board/board';
import { footer } from './src/components/footer/footer';
import { header } from './src/components/header/header';
import './style.css';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
<main id="main">
  <header id="header">
    <h1></h1>
    <div id = score></div>
  </header>
  <section id="board">
  </section>
  <footer id="footer">
      </footer>
</main>
`;
header();
board();
footer();
