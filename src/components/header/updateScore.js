import './updateScore.css';

let SCOREPOINTS = 0;

export const printScore = () => {
  const score = document.querySelector('#score');

  const scoreWord = document.createElement('p');
  scoreWord.textContent = 'SCORE';
  scoreWord.id = 'score-word';

  const scorePoints = document.createElement('p');
  scorePoints.id = 'score-points';
  scorePoints.textContent = `${SCOREPOINTS}`;

  score.append(scoreWord, scorePoints);
};

export const updateScore = (points) => {
  SCOREPOINTS += points;

  if (SCOREPOINTS < 0) {
    SCOREPOINTS = 0;
  }

  const scorePoints = document.querySelector('#score-points');
  scorePoints.textContent = `${SCOREPOINTS}`;
};

export const resetScore = () => {
  SCOREPOINTS = 0;
  const scorePoints = document.querySelector('#score-points');
  scorePoints.textContent = `${SCOREPOINTS}`;
};
