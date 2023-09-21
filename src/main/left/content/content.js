import './content.css';
import { Exp, Ed } from './createNewItem';
import UNL from '../topProfile/imgs/UNL.jpeg';
import TOP from '../topProfile/imgs/TOP.png';

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

  const ucs = new Exp(UNL, 'UNL Career Services', 'Career Connections Intern', `I am me hello hella helle helli blah bleh
  bloh bluh sakldfjasklfjaslk`);

  expContent.append(
    title,
    ucs.createNew(),
  );

  return expContent;
};

export const education = function () {
  const edContent = document.createElement('div');
  edContent.classList = 'ed-container';

  const edTitle = document.createElement('h1');
  edTitle.classList = 'title';
  edTitle.innerText = 'Education';

  const top = new Ed(TOP, 'The Odin Project', 'Developer Foundations & Full Stack JavaScript Path', '2023 - Present');
  const unl = new Ed(UNL, 'University of Nebraska-Lincoln', 'Bachelor of Arts in Psychology', '2017-2021');

  edContent.append(
    edTitle,
    top.createNew(),
    unl.createNew(),
  );

  return edContent;
};

export const languages = function () {
  const langContent = document.createElement('div');
  const langTitle = document.createElement('h1');
  langTitle.innerText = 'Languages';
  langTitle.classList = 'title';

  // English
  const english = document.createElement('div');
  // english.classList = 'lang-card';
  const enTitle = document.createElement('h2');
  enTitle.innerText = 'English';
  const enLevel = document.createElement('p');
  enLevel.innerText = 'Fluent';

  english.append(
    enTitle,
    enLevel,
  );

  // Portuguese
  const portuguese = document.createElement('div');
  // portuguese.classList = 'lang-card';
  const ptTitle = document.createElement('h2');
  ptTitle.innerText = 'Portuguese';
  const ptLevel = document.createElement('p');
  ptLevel.innerText = 'Native';

  portuguese.append(
    ptTitle,
    ptLevel,
  );

  // Spanish
  const spanish = document.createElement('div');
  // spanish.classList = 'lang-card';
  const spTitle = document.createElement('h2');
  spTitle.innerText = 'Spanish';
  const spLevel = document.createElement('p');
  spLevel.innerText = 'Intermediate';

  spanish.append(
    spTitle,
    spLevel,
  );

  const langCards = document.createElement('div');
  langCards.classList = 'lang-card';

  langCards.append(
    english,
    portuguese,
    spanish,
  );

  langContent.append(
    langTitle,
    langCards,
  );

  return langContent;
};
