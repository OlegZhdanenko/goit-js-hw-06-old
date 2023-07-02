function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtn = document.querySelector('button')
colorBtn.addEventListener('click', changeColor)
let textColor= document.querySelector('.color')


function changeColor() {
  this.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
// fix