import { Skill } from '../createNewItem';
import HTML from './imgs/HTML.png';
import CSS from './imgs/CSS.png';
import JS from './imgs/JS.png';
import CL from './imgs/commandLine.png';
import VM from './imgs/VirtualMachine.png';
import WB from './imgs/webpack.png';
import wordpress from './imgs/WordPress.png';
import squarespace from './imgs/Squarespace.png';
import './compLangSkills.css';

export const skills = function () {
  const skillContent = document.createElement('div');

  const compTitle = document.createElement('h1');
  compTitle.innerText = 'Computer Languages & Skills:';

  const html = new Skill(HTML, 'HTML');
  const css = new Skill(CSS, 'CSS');
  const js = new Skill(JS, 'JavaScript');
  const cl = new Skill(CL, 'Command Line');
  const vm = new Skill(VM, 'Virtual Machine');
  const wb = new Skill(WB, 'Webpack');

  const expWithTitle = document.createElement('h1');
  expWithTitle.innerText = 'Experience With:';

  const wp = new Skill(wordpress, 'WordPress');
  const sp = new Skill(squarespace, 'Squarespace');

  skillContent.append(
    compTitle,
    html.createNew(),
    css.createNew(),
    js.createNew(),
    cl.createNew(),
    vm.createNew(),
    wb.createNew(),
    expWithTitle,
    wp.createNew(),
    sp.createNew(),
  );

  return skillContent;
};
