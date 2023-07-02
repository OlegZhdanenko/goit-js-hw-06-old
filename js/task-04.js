let counterValue = 0; 
const btnDec = counter.querySelector('button[data-action="decrement"]')
const btnInc = counter.querySelector('button[data-action="increment"]')
btnDec.addEventListener('click', firstFunc)
btnInc.addEventListener('click', secondFunc)
const valueElement = document.querySelector('#value');

function firstFunc() {
    counterValue -= 1;
    valueElement.textContent = counterValue;
}
function secondFunc() {
    counterValue += 1;
    valueElement.textContent = counterValue;
}