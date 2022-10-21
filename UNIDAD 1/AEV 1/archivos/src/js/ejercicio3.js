const data = [{ // MOCK data && WHITELIST
    name: 'John',
    email: 'john@example.com', // PUEDE ENTRAR
}, {
    name: 'John Smith',
    email: 'johnsmith@example.com', // PUEDE ENTRAR
}, {
    name: 'Víctor',
    email: 'victorbg189@gmail.com', // PUEDE ENTRAR
}]


const form = document.getElementsByTagName('form')[0]; // CAPTURAMOS FORM
const nameInput = form.childNodes[1].childNodes[1]; // CAPTURAMOS NAME input
const emailInput = form.childNodes[3].childNodes[1]; // CAPTURAMOS EMAIL input

function validateName(name) { // COMPRUEBA (NOMBRE) LA WHITELIST
    let ok = false;
    data.map((element) => {
        if (element.name.toLowerCase() === name.toLowerCase()) {
            ok = true;
        }
    })
    return ok;
}

function validateEmail(email) { // COMPRUEBA (EMAIL) LA WHITELIST
    let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // REGEX = name + @ + email + . + com/es
    if (email.match(match)) { // TEST
        return true;
    } else {
        alert("ERROR: email incorrecto"); // ERROR email no valido
        return false;
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Cancel submit
    if (validateName(nameInput.value)) { // validamos nombre
        if (validateEmail(emailInput.value)) { // validamos email
            form.style.display = 'none'; // OCULTAMOS FORM
            document.querySelector('.four').style.backgroundColor = 'transparent'; //ESTILOS
            document.querySelector('.four').innerHTML = '<p> En breve le contactaremos </p>'; //MSG
            const parrafoInner = document.querySelector('.four').childNodes[0];
            parrafoInner.style.color = "black";
            parrafoInner.style.fontSize = "40px"; // ESTILOS
        } else {
            alert('Please enter a valid email address'); //ERROR EMAIL ERROR
        }
    } else {
        alert('Please enter a valid name'); //ERROR NAME ERROR
    }
});