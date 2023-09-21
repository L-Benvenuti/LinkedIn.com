export class Skill {
  constructor(logo, name) {
    this.logo = logo;
    this.name = name;
  }

  createNew() {
    const container = document.createElement('div');
    container.classList = 'skill-card';

    const img = new Image();
    img.src = `${this.logo}`;
    img.classList = 'skill-img';

    const name = document.createElement('h2');
    name.innerText = `${this.name}`;

    container.append(
      img,
      name,
    );

    return container;
  }
}
