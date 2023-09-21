import { profile } from './left/topProfile/topProfile';
import {
  about, experiences, languages, education,
} from './left/content/content';

export const mainContent = function () {
  const main = document.querySelector('main');
  main.append(
    leftColumn(),
    rightColumn(),
  );
};

// Left Column
const leftColumn = function () {
  const left = document.createElement('div');
  left.classList = 'left';

  left.append(
    profile(),
    about(),
    experiences(),
    education(),
    languages(),
  );

  return left;
};

// Right Column
const rightColumn = function () {
  const right = document.createElement('div');
  right.classList = 'right';

  right.innerText = 'RIGHT COLUMN';

  return right;
};
