import { Skill } from '../createNewItem';
import HTML from './imgs/HTML.png';
import CSS from './imgs/CSS.png';
import wordpress from './imgs/WordPress.png';
import squarespace from './imgs/squarespace.png';
import './compLangSkills.css';

export const skills = function () {
  const skillContent = document.createElement('div');

  const compTitle = document.createElement('h1');
  compTitle.innerText = 'Computer Languages & Skills:';

  const html = new Skill(HTML, 'HTML');
  const css = new Skill(CSS, 'CSS');

  const expWithTitle = document.createElement('h1');
  expWithTitle.innerText = 'Experience With:';

  const wp = new Skill(wordpress, 'WordPress');
  const sp = new Skill(squarespace, 'Squarespace');

  skillContent.append(
    compTitle,
    html.createNew(),
    css.createNew(),
    expWithTitle,
    wp.createNew(),
    sp.createNew(),
  );

  return skillContent;
};
