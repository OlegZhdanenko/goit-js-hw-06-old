const elementInput = document.querySelector('#validation-input');
elementInput.addEventListener('blur', validInput);
const lengthInput = Number(elementInput.dataset.length)
function validInput() {
    if (elementInput.value.length===lengthInput) {
        elementInput.classList.add('valid');
        elementInput.classList.remove('invalid')
    } else {
         elementInput.classList.remove('valid');
        elementInput.classList.add('invalid')
    }
}