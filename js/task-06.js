const input = document.querySelector('#validation-input');

input.addEventListener('blur', addParam);

// ! Вариант 1
function addParam() {
    if (this.value.length !== Number(this.dataset.length)) {
        this.classList.add('invalid');
    } else if (this.classList.contains('invalid')) {
        this.classList.replace('invalid', 'valid');
    } else this.classList.add('valid');
};

// ! Вариант 2
// function addParam() {
//     if (input.value.length !== Number(input.dataset.length)) {
//         input.classList.add('invalid');
//     } else if (input.classList.contains('invalid')) {
//         input.classList.replace('invalid', 'valid');
//     } else input.classList.add('valid');
// };