import './disableEnable.css';

export const disableGameElements = () => {
  const handButtonsElement = document.querySelector('.buttons');
  handButtonsElement.classList.add('disabled');
};

export const enableGameElements = () => {
  const handButtonsElement = document.querySelector('.buttons');
  handButtonsElement.classList.remove('disabled');
};
