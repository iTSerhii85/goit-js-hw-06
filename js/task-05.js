const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// ! Вариант 1
// nameInput.addEventListener('input', 
// (inputEvent) => nameOutput.textContent = inputEvent.currentTarget.value);

// ! Вариант 2
// nameInput.addEventListener('input', 
// () => nameOutput.textContent = nameInput.value);

// ! Вариант 3
nameInput.addEventListener('input', 
() => nameInput.value 
? nameOutput.textContent = nameInput.value 
: nameOutput.textContent = 'Anonymous');