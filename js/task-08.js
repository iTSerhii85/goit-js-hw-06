const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formInputs = {};

    const {email, password} = event.currentTarget.elements;

    if (!email.value) {
        alert('Fill in email form fields');
    } else if (!password.value) {
        alert('Fill in password form fields');
    } else 
            formInputs.password = password.value;
            formInputs.email = email.value;

    console.log(formInputs);
    form.reset();
};
