const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
const reset = document.querySelector('button[data-action="reset"]')

let counterValue = 0;

decrButton.addEventListener('click', 
() => value.textContent = counterValue -= 1);

incrButton.addEventListener('click', 
() => value.textContent = counterValue += 1);

reset.addEventListener('click', 
() => value.textContent = 0);