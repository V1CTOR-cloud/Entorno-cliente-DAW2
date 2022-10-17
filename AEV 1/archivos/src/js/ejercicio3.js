const data = [{
    name: 'John',
    email: 'john@example.com',
}, {
    name: 'John Smith',
    email: 'johnsmith@example.com',
}, {
    name: 'Víctor',
    email: 'victorbg189@gmail.com',
}]


const form = document.getElementsByTagName('form')[0];
const nameInput = form.childNodes[1].childNodes[1];
const emailInput = form.childNodes[3].childNodes[1];

function validateName(name) {
    let ok = false;
    data.map((element) => {
        if (element.name.toLowerCase() === name.toLowerCase()) {
            ok = true;
        }
    })
    return ok;
}

function validateEmail(email) {
    let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(match)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName(nameInput.value)) {
        if (validateEmail(emailInput.value)) {
            form.style.display = 'none';
            document.querySelector('.four').style.backgroundColor = 'transparent';
            document.querySelector('.four').innerHTML = '<p> En breve le contactaremos </p>';
            const parrafoInner = document.querySelector('.four').childNodes[0];
            parrafoInner.style.color = "black";
            parrafoInner.style.fontSize = "40px";
        } else {
            alert('Please enter a valid email address');
        }
    } else {
        alert('Please enter a valid name');
    }
});