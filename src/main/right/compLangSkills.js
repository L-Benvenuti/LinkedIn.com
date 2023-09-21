import { Skills } from './createNewItem';

export const skills = function () {
  const container = document.createElement('div');

  const compTitle = document.createElement('h1');
  compTitle.innerText = 'Computer Languages & Skills:';

  const expWithTitle = document.createElement('h1');
  expWithTitle.innerText = 'Experience With:';

  container.append(
    compTitle,
  );

  return container;
};
