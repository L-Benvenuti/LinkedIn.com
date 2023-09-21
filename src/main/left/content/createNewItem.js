export class Exp {
  constructor(logo, employer, job, description) {
    this.logo = logo;
    this.employer = employer;
    this.job = job;
    this.description = description;
  }

  createNew() {
    const container = document.createElement('div');
    container.classList = 'card';

    const left = document.createElement('div');
    left.classList = 'left-cont';
    const img = new Image();
    img.src = `${this.logo}`;
    img.classList = 'logo';
    left.append(img);

    const right = document.createElement('div');
    const name = document.createElement('h2');
    name.innerText = `${this.employer}`;

    const jobTitle = document.createElement('h3');
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

export class Ed {
  constructor(logo, institution, course, period) {
    this.logo = logo;
    this.institution = institution;
    this.course = course;
    this.period = period;
  }

  createNew() {
    const container = document.createElement('div');
    container.classList = 'card';

    const left = document.createElement('div');
    left.classList = 'left-cont';
    const img = new Image();
    img.src = `${this.logo}`;
    img.classList = 'logo';
    left.append(img);

    const right = document.createElement('div');
    const name = document.createElement('h2');
    name.innerText = `${this.institution}`;

    const course = document.createElement('h3');
    course.innerText = `${this.course}`;

    const year = document.createElement('p');
    year.innerText = `${this.period}`;

    right.append(
      name,
      course,
      year,
    );

    container.append(
      left,
      right,
    );

    return container;
  }
}
