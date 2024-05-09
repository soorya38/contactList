let search = document.getElementById('search');
let addButton = document.getElementById('addButton');
let display = document.getElementById('contactList');

// window.contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// for(let i=0; i<window.contacts.length; i++) {
//     let test = window.contacts;
//     test.sort((a, b) => {
//         return a.name.localeCompare(b.name); 
//     });

//     let body = document.getElementById('container');
//     let div = document.createElement('div');
//     div.setAttribute('class', 'contact-container1');
//     let h2 = document.createElement('h2');
//     let span=document.createElement('span');
//     span.setAttribute('class','contact-info');
//     let b1 = document.createElement('button');
//     b1.setAttribute('class', 'fa fa-phone call1');
//     let b2 = document.createElement('button');
//     b2.setAttribute('class', 'fa fa-comments message');
//     let b3 = document.createElement('button');
//     b3.setAttribute('class', 'fa fa-video-camera video');
//     let b4 = document.createElement('button');
//     b4.setAttribute('class', 'fa fa-info-circle info');
//     b4.setAttribute('id', 'updateButton');
//     b4.setAttribute('id', i);

//     let fLetter = window.contacts[i].name[0];
//     let h1 = document.createElement('h1');
//     h1.innerHTML = fLetter;

//     h2.innerHTML = window.contacts[i].name;

//     h2.innerHTML = '<span class="H1 H1border">' + h1.innerHTML.toUpperCase() + '</span> ' + '<span class="contact-info">' + h2.innerHTML + '</span>';
    
//     body.appendChild(div);
//     div.appendChild(h2);
//     div.appendChild(b1);
//     div.appendChild(b2);
//     div.appendChild(b3);
//     div.appendChild(b4);

//     b4.addEventListener('click', () => {
//         window.location.href = "pages/updatecontacts.html?index=" + i;
//     });
    
// }   

window.onload = () => {
    window.contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    for(let i=0; i<window.contacts.length; i++) {
        let test = window.contacts;
        test.sort((a, b) => {
            return a.name.localeCompare(b.name); 
        });

        console.log(test);
    
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
        b3.setAttribute('class', 'fa fa-video-camera video');
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
        
    } 
};

search.addEventListener("change", () => {
    console.log(search.value);
});

addButton.addEventListener('click', () => {
    window.location.href = "pages/addcontact.html";
});