let search = document.getElementById('search');
let addButton = document.getElementById('addButton');
let display = document.getElementById('contactList');
let searchValue = document.getElementById('search');

window.onload = () => {
    window.contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // printContacts(window.contacts);
    for(let i=0; i<window.contacts.length; i++) {
        let test = window.contacts;
        test.sort((a, b) => {
            return a.name.localeCompare(b.name); 
        });
    
        let body = document.getElementById('container');
        let div = document.createElement('div');
        div.setAttribute('class', 'contact-container1');
        let h2 = document.createElement('h2');
        let span=document.createElement('span');
        span.setAttribute('class','contact-info');
        let b1 = document.createElement('button');
        b1.setAttribute('class', 'fa fa-phone call1');
        let b2 = document.createElement('button');
        b2.setAttribute('class', 'fa fa-comments message');
        let b3 = document.createElement('button');
        b3.setAttribute('class', 'fa fa-trash-o video');
        let b4 = document.createElement('button');
        b4.setAttribute('class', 'fa fa-info-circle info');
        b4.setAttribute('id', 'updateButton');
        b4.setAttribute('id', i);
    
        let fLetter = window.contacts[i].name[0];
        let h1 = document.createElement('h1');
        h1.innerHTML = fLetter;
    
        h2.innerHTML = window.contacts[i].name;
    
        h2.innerHTML = '<span class="H1 H1border">' + h1.innerHTML.toUpperCase() + '</span> ' + '<span class="contact-info">' + h2.innerHTML + '</span>';
        
        body.appendChild(div);
        div.appendChild(h2);
        div.appendChild(b1);
        div.appendChild(b2);
        div.appendChild(b3);
        div.appendChild(b4);
    
        b4.addEventListener('click', () => {
            window.location.href = "pages/updatecontacts.html?index=" + i;
        });
        
        b3.addEventListener('click', () => {
            window.location.href = "pages/deleteContacts.html?index=" + i;
        });
    } 
};

addButton.addEventListener('click', () => {
    window.location.href = "pages/addcontact.html";
});

search.addEventListener('input', () => {
    if(search.value == '')
        window.location.href = "index.html";

    let contactValues = [];

    for (let i = 0; i < window.contacts.length; i++) {
        if (window.contacts[i].name.match(search.value)) {
            contactValues.push(window.contacts[i]);
        }
    }

    printContacts(contactValues);
});

const printContacts = (contactValues) => {
    display.innerHTML = '';

    for (let i = 0; i < contactValues.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'contact-container1');
        div.style.backgroundColor = "grey";
        let h2 = document.createElement('h2');
        let span = document.createElement('span');
        span.setAttribute('class', 'contact-info');
        let b1 = document.createElement('button');
        b1.setAttribute('class', 'fa fa-phone call1');
        let b2 = document.createElement('button');
        b2.setAttribute('class', 'fa fa-comments message');
        let b3 = document.createElement('button');
        b3.setAttribute('class', 'fa fa-trash-o video');
        let b4 = document.createElement('button');
        b4.setAttribute('class', 'fa fa-info-circle info');
        b4.setAttribute('id', 'updateButton');
        b4.setAttribute('id', i);

        let fLetter = contactValues[i].name[0];
        let h1 = document.createElement('h1');
        h1.innerHTML = fLetter;

        h2.innerHTML = contactValues[i].name;

        h2.innerHTML = '<span class="H1 H1border">' + h1.innerHTML.toUpperCase() + '</span> ' + '<span class="contact-info">' + h2.innerHTML + '</span>';

        display.appendChild(div);
        div.appendChild(h2);
        div.appendChild(b1);
        div.appendChild(b2);
        div.appendChild(b3);
        div.appendChild(b4);

        b4.addEventListener('click', () => {
            window.location.href = "pages/updatecontacts.html?index=" + i;
        });

        b3.addEventListener('click', () => {
            let indexInOriginal = window.contacts.indexOf(contactValues[i]);
            window.location.href = "pages/deleteContacts.html?index=" + indexInOriginal;
        });
    }
}