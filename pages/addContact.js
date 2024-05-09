let cancelButton = document.getElementById('cancelButton');
let doneButton = document.getElementById('doneButton');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

doneButton.addEventListener('click', () => {
    let phoneValue = document.getElementById('phoneValue').value;
    let nameValue = document.getElementById('nameValue').value;
    let mailValue = document.getElementById('mailValue').value;
    
    if (phoneValue !== '' && nameValue !== '' && mailValue !== '') {
        let newContact = {
            name: nameValue,
            phone: phoneValue,
            mail: mailValue,
        };

        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));

        console.log(newContact);

        window.location.href = "../index.html";
    } else {
        alert('Please fill in all fields.');
    }
});

cancelButton.addEventListener('click', () => {
    window.location.href = "../index.html";
});