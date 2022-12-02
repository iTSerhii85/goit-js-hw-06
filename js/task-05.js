const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', 
(inputEvent) => nameOutput.textContent = inputEvent.currentTarget.value);
