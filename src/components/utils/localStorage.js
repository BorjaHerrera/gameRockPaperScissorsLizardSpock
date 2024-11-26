export const saveScoreToLocalStorage = (score) => {
  localStorage.setItem('score', score);
};

export const getScoreFromLocalStorage = () => {
  return Number(localStorage.getItem('score')) || 0;
};
