import { replicantHand } from '../computer/computer';
import { humanHand } from '../player/player';

export const rotate = () => {
  humanHand.classList.remove('appear');
  replicantHand.classList.remove('appear');
  setTimeout(() => {
    humanHand.classList.add('appear');
  }, 1);

  setTimeout(() => {
    replicantHand.classList.add('appear');
  }, 1);
};
