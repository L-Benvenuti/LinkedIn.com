import { profile } from './left/topProfile/topProfile';
import {
  about, experiences, languages, education,
} from './left/content/content';
import { skills } from './right/top/compLangSkills';

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

  const portfolio = document.createElement('button');
  portfolio.innerText = 'Portfolio';
  portfolio.classList = 'portfolio';
  portfolio.href = '#';

  right.append(
    portfolio,
    skills(),
  );

  return right;
};
