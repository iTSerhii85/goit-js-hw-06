const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);

const potatoesEl = document.createElement('li');
potatoesEl.classList = 'item';
potatoesEl.textContent = ingredients[0];
console.log(potatoesEl);

const mushroomsEl = document.createElement('li');
mushroomsEl.classList = 'item';
mushroomsEl.textContent = ingredients[1];
console.log(mushroomsEl);

const garlicEl = document.createElement('li');
garlicEl.classList = 'item';
garlicEl.textContent = ingredients[2];
console.log(garlicEl);

const tomatosEl = document.createElement('li');
tomatosEl.classList = 'item';
tomatosEl.textContent = ingredients[3];
console.log(tomatosEl);

const herbsEl = document.createElement('li');
herbsEl.classList = 'item';
herbsEl.textContent = ingredients[4];
console.log(herbsEl);

const condimentsEl = document.createElement('li');
condimentsEl.classList = 'item';
condimentsEl.textContent = ingredients[5];
console.log(condimentsEl);

list.append(potatoesEl, mushroomsEl, garlicEl, tomatosEl, herbsEl, condimentsEl);