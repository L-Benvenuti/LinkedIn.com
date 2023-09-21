export class CompSkills {
  constructor(logo, name) {
    this.logo = logo;
    this.name = name;
  }

  createNew() {
    const container = document.createElement('div');
    container.classList = 'skill-card';

    const logo = new Image();
    logo.src = `${this.logo}`;

    const name = document.createElement('h2');
    name.innerText = `${this.name}`;
  }
}
