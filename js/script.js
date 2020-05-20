window.addEventListener('load', start);

function start() {
    console.log('Página totalmente carregada');

    let nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', countName);

    let form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit);
}

function countName(event) {
    let count = event.target.value;
    let countWithoutSpace = count.replace(/ /g, "");

    let span = document.querySelector('#nameLength');
    span.textContent = countWithoutSpace.length;
}

function preventSubmit(event) {
    event.preventDefault();   
}