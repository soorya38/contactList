let doneButton = document.getElementById('doneButton');
let cancelButton = document.getElementById('cancelButton');

window.contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function getQueryParam(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
}

const index = getQueryParam('index');

doneButton.addEventListener('click', () => {
    window.contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(window.contacts));
    console.log(window.contacts);
    window.location.href = "../index.html";
});

cancelButton.addEventListener('click', () => {
    window.location.href = "../index.html";
});