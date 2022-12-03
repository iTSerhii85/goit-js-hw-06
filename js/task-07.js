const text = document.querySelector('#text');
const inputRange = document.querySelector('#font-size-control');

// ! Вариант 1
// inputRange.addEventListener('input', 
// (event) => text.style.fontSize = `${event.currentTarget.value}px`);

// ! Вариант 2
inputRange.addEventListener('input', 
() => text.style.fontSize = `${inputRange.value}px`);
