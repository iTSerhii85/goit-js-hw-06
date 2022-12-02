const input = document.querySelector('#validation-input');

input.addEventListener('blur', addParam);
function addParam() {
    if (input.value.length !== Number(input.dataset.length)) {
        input.classList.add('invalid');
    } else if (input.classList.contains('invalid')) {
        input.classList.replace('invalid', 'valid');
    } else input.classList.add('valid');
};
