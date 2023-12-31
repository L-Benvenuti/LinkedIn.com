import Logo from './LinkedOut.png';

export const navBar = function () {
  const nav = document.querySelector('nav');

  const linkedOut = new Image();
  linkedOut.src = Logo;
  const logo = document.createElement('div');
  logo.classList = 'linked-out';
  logo.appendChild(linkedOut);

  nav.append(
    logo,
    rightSideNav(),
  );
};

const rightSideNav = function () {
  const links = document.createElement('div');
  links.classList = 'links';

  const allLinks = document.createElement('ul');

  const articles = document.createElement('li');
  articles.innerText = 'Articles';

  const people = document.createElement('li');
  people.innerText = 'People';

  const learning = document.createElement('li');
  learning.innerText = 'Learning';

  const jobs = document.createElement('li');
  jobs.innerText = 'Jobs';

  allLinks.append(
    articles,
    people,
    learning,
    jobs,
  );

  const allBtns = document.createElement('ul');

  const darkMode = document.createElement('li');
  darkMode.classList = 'dark-light';
  darkMode.innerText = 'Dark Mode';

  const realLinkedIn = document.createElement('li');
  realLinkedIn.innerText = 'LinkedIn';

  allBtns.append(
    darkMode,
    realLinkedIn,
  );

  links.append(
    allLinks,
    allBtns,
  );

  return links;
};
