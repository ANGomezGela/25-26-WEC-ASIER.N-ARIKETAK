const contacts = [];
const form = document.getElementById('contactForm');
const list = document.querySelector('#contactList');
const message = document.querySelector('#message');

form.addEventListener('submit', addContact);

function addContact(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const phone = document.getElementById('phone').value;

    if (name === '' || phone === '') {
        alert('Completa todos los campos');
        return;
    }

    contacts.push({ nombre: name, phone: phone });

    //ordenar el array de contactos
    contacts.sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Volvemos a mostrar la lista
    renderContacts();



    form.reset();
    message.classList.remove('hidden');

    setTimeout(hideMessage, 2000);
}

function hideMessage() {
    message.classList.add('hidden');
}

function renderContacts() {
    list.innerHTML = "";

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerText = `${contact.nombre} - ${contact.phone} `;

        // Crear botón eliminar
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Borrar';
        btnDelete.addEventListener('click', () => deleteContact(index));

        li.appendChild(btnDelete);
        list.appendChild(li);
    });


}

function deleteContact(index){
    contacts.splice(index, 1);
    renderContacts();
}
