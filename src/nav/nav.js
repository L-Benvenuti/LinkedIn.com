export const navBar = function () {
  const nav = document.querySelector('nav');

  const logo = document.createElement('div');
  logo.classList = 'linked-out';
  logo.innerText = 'LinkedOut';

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

  const joinBtn = document.createElement('li');
  joinBtn.innerText = 'Join Now';

  const signInBtn = document.createElement('li');
  signInBtn.innerText = 'Sign In';

  allBtns.append(
    joinBtn,
    signInBtn,
  );

  links.append(
    allLinks,
    allBtns,
  );

  return links;
};
