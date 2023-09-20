import './content.css';
import { Exp } from './createExperience';
import UCS from '../topProfile/imgs/UNL.png';

export const about = function () {
  const aboutContent = document.createElement('div');

  const title = document.createElement('h1');
  title.classList = 'title';
  title.innerText = 'About';

  const abt = document.createElement('p');
  abt.innerText = `I am me hello hella helle helli blah bleh
  bloh bluh sakldfjasklfjaslk`;

  aboutContent.append(
    title,
    abt,
  );

  return aboutContent;
};

export const experiences = function () {
  const expContent = document.createElement('div');

  const title = document.createElement('h1');
  title.classList = 'title';
  title.innerText = 'Experiences';

  const ucs = new Exp(UCS, 'UNL Career Services', 'Career Connections Intern', `I am me hello hella helle helli blah bleh
  bloh bluh sakldfjasklfjaslk`);

  expContent.append(
    title,
    ucs.createNew(),
  );

  return expContent;
};
