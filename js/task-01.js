const cards = document.querySelectorAll('.item');
console.log(`Number of categories: ${cards.length}`);

const nameFirstCardEl = document.querySelector('h2');
console.log(`Category: ${nameFirstCardEl.textContent}`);

const animalCardEl = document.querySelector('.js-animal-list');
const firstCardItemEl = animalCardEl.querySelectorAll('li');
console.log(`Elements: ${firstCardItemEl.length}`);

const nameSecondCardEl = document.querySelector('.js-product h2');
console.log(`Category: ${nameSecondCardEl.textContent}`);

const productCardEl = document.querySelector('.js-products-list');
const secondCardItemEl = productCardEl.querySelectorAll('li');
console.log(`Elements: ${secondCardItemEl.length}`);

const nameThirdCardEl = document.querySelector('.js-technologies h2');
console.log(`Category: ${nameThirdCardEl.textContent}`);

const technologiesCardEl = document.querySelector('.js-technologies-list');
const thirdCardItemEl = technologiesCardEl.querySelectorAll('li');
console.log(`Elements: ${thirdCardItemEl.length}`);