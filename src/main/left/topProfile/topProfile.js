import './topProfile.css';
import Pic from '../imgs/profilePic.png';
import UNL from '../imgs/UNL.jpeg';
import TOP from '../imgs/TOP.png';
import Connections from '../imgs/connections.png';

export const profile = function () {
  const container = document.createElement('div');
  container.classList = 'profile-container';

  const bannerContainer = document.createElement('div');
  bannerContainer.classList = 'banner-container';
  const bannerAuthor = document.createElement('a');
  bannerAuthor.innerText = 'Image designed by Freepik';
  bannerAuthor.href = 'http://www.freepik.com';

  const profilePic = new Image();
  profilePic.classList = 'profile-pic';
  profilePic.src = Pic;

  bannerContainer.append(
    profilePic,
    bannerAuthor,
  );

  container.append(
    bannerContainer,
    profileText(),
  );

  return container;
};

const profileText = function () {
  const profileContainer = document.createElement('div');
  profileContainer.classList = 'profile-text';
  const leftDiv = document.createElement('div');
  leftDiv.classList = 'left-profile';
  const rightDiv = document.createElement('div');
  rightDiv.classList = 'right-profile';

  const name = document.createElement('h1');
  name.innerText = 'Luiza Benvenuti Hernandez';

  const jobTitle = document.createElement('h3');
  jobTitle.innerText = 'Front-End Developer';

  const pronouns = document.createElement('h3');
  pronouns.innerText = 'She/Her';

  const location = document.createElement('h3');
  location.innerText = 'Lincoln, Nebraska, United States';

  const connections = document.createElement('div');
  connections.classList = 'connectionsContainer';
  const connectionsProfile = new Image();
  connectionsProfile.src = Connections;
  connectionsProfile.classList = 'connections';
  const textConnect = document.createElement('p');
  textConnect.innerText = '600+ connections';

  connections.append(
    connectionsProfile,
    textConnect,
  );

  leftDiv.append(
    name,
    jobTitle,
    pronouns,
    location,
    connections,
  );

  const edCard1 = document.createElement('div');
  edCard1.classList = 'education-card';
  const unlLogo = new Image();
  unlLogo.src = UNL;
  unlLogo.classList = 'unl-logo';
  const unl = document.createElement('h2');
  unl.innerText = 'University of Nebraska-Lincoln';
  edCard1.append(
    unlLogo,
    unl,
  );

  const edCard2 = document.createElement('div');
  edCard2.classList = 'education-card';
  const topLogo = new Image();
  topLogo.src = TOP;
  topLogo.classList = 'top-logo';
  const top = document.createElement('h2');
  top.innerText = 'The Odin Project';
  edCard2.append(
    topLogo,
    top,
  );

  rightDiv.append(
    edCard1,
    edCard2,
  );

  profileContainer.append(
    leftDiv,
    rightDiv,
  );

  return profileContainer;
};
