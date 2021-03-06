const proficiencies = {
  React: 4,
  Css: 4,
  Html: 4,
  JavaScript: 4,
  Sass: 4,
  "Material-ui": 4,
  Bootstrap: 3,
  Materialize: 3,
  jQuery: 3,
  Node: 3,
  MongoDB: 3,
  Npm: 3,
  Git: 3,
  Figma: 3,
  HandleBars: 4,
  Webpack: 3,
  Cypress: 3,
  Jest: 1,
  PWA: 1,
};
const technologies = Object.keys(proficiencies);
for (let i = 0; i < technologies.length; i++) {
  const $skillsContainer = document.createElement("li");
  document.querySelector("main ol").appendChild($skillsContainer);

  const $tagName = document.createElement("div");
  $tagName.textContent = technologies[i];
  $tagName.className = "tag-name";
  $skillsContainer.appendChild($tagName);

  const $valuesContainer = document.createElement("div");
  $valuesContainer.className = "values-container";
  $skillsContainer.appendChild($valuesContainer);

  const SKILL_LIMIT = 5;
  let assign = 0;
  while (assign < SKILL_LIMIT) {
    const $value = document.createElement("div");
    $valuesContainer.appendChild($value);
    if (assign < proficiencies[technologies[i]]) {
      $value.className = "skill active";
    } else {
      $value.className = "skill inactive";
    }
    assign++;
  }
}
