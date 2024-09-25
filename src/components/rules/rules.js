import './rules.css';

export const rules = () => {
  const rulesElement = document.querySelector('.rules');
  const rulesButton = document.createElement('button');
  rulesButton.className = 'rules-button';
  const rulesExplanation = document.createElement('div');
  rulesExplanation.className = 'rules-explanation';

  rulesButton.textContent = 'RULES';
  rulesExplanation.innerHTML = `
     <p><strong>RULES</strong></p>
     <p><strong>Scissors</strong> cuts <strong>Paper</strong></p>
    <p><strong>Paper</strong> covers <strong>Rock</strong></p>
    <p><strong>Rock</strong> crushes <strong>Lizard</strong></p>
    <p><strong>Lizard</strong> poisons <strong>Spock</strong></p>
    <p><strong>Spock</strong> smashes <strong>Scissors</strong></p>
    <p><strong>Scissors</strong> decapitates <strong>Lizard</strong></p>
    <p><strong>Lizard</strong> eats <strong>Paper</strong></p>
    <p><strong>Paper</strong> disproves <strong>Spock</strong></p>
    <p><strong>Spock</strong> vaporizes <strong>Rock</strong></p>
    <p>(and as it always has) <strong>Rock</strong> crushes <strong>Scissors</strong></p>
  `;

  rulesExplanation.classList.add('hidden');

  rulesButton.addEventListener('click', () => {
    rulesExplanation.classList.toggle('hidden');
  });

  rulesElement.append(rulesButton, rulesExplanation);
};
