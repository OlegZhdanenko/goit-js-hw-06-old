function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtn = document.querySelector('body')
colorBtn.addEventListener('click', changeColor)
let textColor= document.querySelector('.color')


function changeColor() {
  const colorRandom = getRandomHexColor();
  this.style.backgroundColor = colorRandom;
  textColor.textContent = colorRandom;
}
