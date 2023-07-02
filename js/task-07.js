const elControl = document.getElementById('font-size-control');

const elementText = document.getElementById('text')
elControl.addEventListener('input', function(){
    elementText.style.fontSize = elControl.value + "px";
})