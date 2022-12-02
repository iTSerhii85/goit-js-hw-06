const text = document.querySelector('#text');
const input = document.querySelector('#font-size-control');

input.addEventListener('input', 
() => text.style.fontSize = `${input.value}px`);
