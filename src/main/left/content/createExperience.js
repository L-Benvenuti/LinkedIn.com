export class Exp {
  constructor(logo, employer, job, description) {
    this.logo = logo;
    this.employer = employer;
    this.job = job;
    this.description = description;
  }

  createNew() {
    const container = document.createElement('div');
    container.classList = 'exp-card';

    const left = document.createElement('div');
    const img = new Image();
    img.src = `${this.logo}`;
    img.classList = 'exp-img';
    left.append(img);

    const right = document.createElement('div');
    const name = document.createElement('h1');
    name.innerText = `${this.employer}`;

    const jobTitle = document.createElement('h2');
    jobTitle.innerText = `${this.job}`;

    const desc = document.createElement('p');
    desc.innerText = `${this.description}`;

    right.append(
      name,
      jobTitle,
      desc,
    );

    container.append(
      left,
      right,
    );

    return container;
  }
}
