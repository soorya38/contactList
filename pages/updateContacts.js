let doneButton = document.getElementById('doneButton');
let cancelButton = document.getElementById('cancelButton');

window.contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function getQueryParam(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
}

const index = getQueryParam('index');

let phoneValue = document.getElementById('phoneValue');
let nameValue = document.getElementById('nameValue');
let mailValue = document.getElementById('mailValue');

nameValue.value = window.contacts[index].name;
phoneValue.value = window.contacts[index].phone;
mailValue.value = window.contacts[index].mail;

cancelButton.addEventListener('click', () => {
    window.location.href = "../index.html";
});

doneButton.addEventListener('click', () => {
    let newNameValue = nameValue.value;
    let newPhoneValue = phoneValue.value;
    let newMailValue = mailValue.value;

    window.contacts[index].name = newNameValue;
    window.contacts[index].phone = newPhoneValue;
    window.contacts[index].mail = newMailValue;
    
    localStorage.setItem('contacts', JSON.stringify(window.contacts));
    window.location.href = "../index.html";
});
