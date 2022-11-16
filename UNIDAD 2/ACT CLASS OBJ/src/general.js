//#ACT 1
class Usuario {
    nombre;
    primerApellido;
    segundoApellido;
    dni;
    userName;
    passWord;



    constructor(nombre, primerApellido, segundoApellido, dni) {
        if (this.constructor.validarNombre(nombre)) {
            this.nombre = nombre;
        }
        if (this.constructor.validarApellidos(primerApellido, segundoApellido)) {
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
        }
        if (this.constructor.validarDni(dni)) {
            this.dni = dni;
        }
        this.userName = this.constructor.crearUsuario(nombre, primerApellido, segundoApellido);
        this.passWord = this.constructor.crearPassword();
    }



    static crearUsuario(nombre, primerApellido, segundoApellido) {
        return nombre.substring(0, 2) + primerApellido.substring(0, 2) + segundoApellido.substring(0, 2) + Math.floor(1000 + Math.random() * 9000);
    }

    static crearPassword() {
        const arrLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]


        return getRandomNum(arrLetras) + getRandomNum(arrNumber) + getRandomNum(arrLetras).toLowerCase() + getRandomNum(arrLetras) + getRandomNum(arrNumber) + getRandomNum(arrLetras).toLowerCase();


        function getRandomNum(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }
    }

    static validarDni(dni) {
        dni.toUpperCase();
        let numero,
            letr, letra;
        let dniMask = /^[XYZ]?\d{5,8}[A-Z]$/;

        if (dniMask.test(dni)) {
            numero = dni.substr(0, dni.length - 1);
            numero = numero.replace('X', 0);
            numero = numero.replace('Y', 1);
            numero = numero.replace('Z', 2);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);

            if (letra !=
                letr) {
                return false;
            } else {
                return true;
            }
        }
    }

    static validarNombre(nombre) {
        nombre.toUpperCase();
        let exit;
        for (let index = 0; index < nombre.length; index++) {
            const element = nombre[index];
            if (typeof element === 'string') {
                exit = true;
            }
        }
        return exit;
    }

    static validarApellidos(primerApellido, segundoApellido) {
        let exit;
        if (primerApellido.charAt(0) === primerApellido.charAt(0).toUpperCase()) {
            exit = true;
        }

        if (segundoApellido.charAt(0) === segundoApellido.charAt(0).toUpperCase()) {
            exit = true;
        }

        for (let index = 1; index < primerApellido.length; index++) {
            const element = primerApellido[index];
            if (element !== element.toUpperCase()) {
                exit = true;
            }
        }

        for (let index = 1; index < segundoApellido.length; index++) {
            const element = segundoApellido[index];
            if (element !== element.toUpperCase()) {
                exit = true;
            }
        }
        return exit;
    }

    MostrarUsuario(user, opc) {

        switch (opc) {
            case 1:
                console.log("\n" + user.nombre);
                console.log("\n" + user.primerApellido);
                console.log("\n" + user.segundoApellido);
                console.log("\n" + user.dni);
                console.log("\n" + user.userName);
                console.log("\n" + user.passWord);
                break;

            case 2:
                console.log("\t" +
                    user.nombre + "\t" +
                    user.primerApellido + "\t" +
                    user.segundoApellido + "\t" +
                    user.dni + "\t" +
                    user.userName + "\t" +
                    user.passWord
                );
                break;

            case 3:
                console.table(user);
                break;

            case 4:
                console.group("--- USER INFO ---");
                console.log(user.nombre);
                console.log(user.primerApellido);
                console.log(user.segundoApellido);
                console.log(user.dni);
                console.log(user.userName);
                console.log(user.passWord);
                console.groupEnd();
                break;

            default:
                break;
        }

    }

    get getName() {
        return this.nombre;
    }

    get getPrimerApellido() {
        return this.primerApellido;
    }

    get getSegundoApellido() {
        return this.segundoApellido;
    }

    get getDni() {
        return this.dni;
    }

    get getUserName() {
        return this.userName;
    }
    get getPassword() {
        return this.passWord;
    }

    set setName(newName) {
        this.name = newName;
    }

    set setPrimerApellido(newPrimerApellido) {
        this.name = newPrimerApellido;
    }

    set setSegundoApellido(newSegundoApellido) {
        this.name = newSegundoApellido;
    }

    set setDni(newDni) {
        this.name = newDni;
    }


}

let user = new Usuario("Víctor", "Martínez", "Zapata", "54426616Z");
/* user.MostrarUsuario(user, 3); */

//#ACT 1 FIN

//#ACT 2

const form_act_2 = document.getElementsByTagName('form')[0];
const nameInput = document.querySelector('.row.gtr-uniform').childNodes[1].childNodes[1];
const primerApellidoInput = document.querySelector('.row.gtr-uniform').childNodes[3].childNodes[1];
const segundoApellidoInput = document.querySelector('.row.gtr-uniform').childNodes[5].childNodes[1];
const dniInput = document.querySelector('.row.gtr-uniform').childNodes[7].childNodes[1];



form_act_2.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateData(user)) {
        const p = document.createElement('p');
        p.textContent += "USER:   " + user.getUserName;
        p.textContent += "     PASSWORD:    " + user.getPassword;
        form_act_2.replaceWith(p);
    }

    function validateData(user) {
        let exit;
        (nameInput.value === user.nombre) ? exit = true: exit = false;
        (primerApellidoInput.value === user.primerApellido) ? exit = true: exit = false;
        (segundoApellidoInput.value === user.segundoApellido) ? exit = true: exit = false;
        (dniInput.value === user.dni) ? exit = true: exit = false;
        return exit;
    }
});


//#FIN ACT 2


//#ACT 3

class Alumno {
    nombre;
    primerApellido;
    segundoApellido;
    actitud;
    actividadUna;
    actividadDos;
    examen;

    constructor(nombre,
        primerApellido,
        segundoApellido,
        actitud,
        actividadUna,
        actividadDos,
        examen) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.actitud = actitud;
        this.actividadUna = actividadUna;
        this.actividadDos = actividadDos;
        this.examen = examen;
    }

    calcularNota(notaActitud, notaActUna, notaActDos, notaExamen) {
        // Activities count 40% of the total
        // Actitud count 10% of the total
        // Examen count 40% of the total

        const actitude = extractPctj(notaActitud, 10)
        const activities = extractPctj(notaActUna, 40) + extractPctj(notaActDos, 40);
        const exam = extractPctj(notaExamen, 60);

        const result = actitude + activities + exam;
        return Math.round(result);

        function extractPctj(nota, pctj) {
            return nota * (pctj / 100);
        }

    }
}

const form_act_3 = document.getElementsByTagName('form')[1];
const nameInput_act_3 = form_act_3.childNodes[1].childNodes[1];
const primerApellidoInput_act_3 = form_act_3.childNodes[1].childNodes[3];
const segundoApellidoInput_act_3 = form_act_3.childNodes[1].childNodes[5];

const actitudInput_act_3 = form_act_3.childNodes[1].childNodes[7];
const act1Input_act_3 = form_act_3.childNodes[1].childNodes[9];
const act2Input_act_3 = form_act_3.childNodes[1].childNodes[11];
const examenInput_act_3 = form_act_3.childNodes[1].childNodes[13];



form_act_3.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Nombre: " + nameInput_act_3.value);
    console.log("Primer Apellido: " + primerApellidoInput_act_3.value);
    console.log("Segundo Apellido: " + segundoApellidoInput_act_3.value);

    console.log("\nActitud: " + actitudInput_act_3.value);
    console.log("Act 1: " + act1Input_act_3.value);
    console.log("Act 2: " + act2Input_act_3.value);
    console.log("Examen: " + examenInput_act_3.value);


    /* if (nameInput_act_3.value !== undefined) {
        if (primerApellidoInput_act_3.value !== undefined) {
            if (segundoApellidoInput_act_3.value !== undefined) {
                // CALIFICATIONS
                if (actitudInput_act_3.value !== null) {
                    if (act1Input_act_3.value !== null) {
                        if (act2Input_act_3.value !== null) {
                            if (examenInput_act_3.value !== null) {
                                console.log(nameInput_act_3.value);
                                console.log(primerApellidoInput_act_3.value);
                                console.log(segundoApellidoInput_act_3.value);
                                console.log(actitudInput_act_3.value);
                                console.log(act1Input_act_3.value);
                                console.log(act2Input_act_3.value);
                                console.log(examenInput_act_3.value);
                                const alumno = new Alumno(
                                    nameInput_act_3.value, // nombre
                                    primerApellidoInput_act_3.value, // primerApellido
                                    segundoApellidoInput_act_3.value, // segundoApellido
                                    actitudInput_act_3.value, // actitud
                                    act1Input_act_3.value, // actividadUna
                                    act2Input_act_3.value, // actividadDos
                                    examenInput_act_3.value // examen
                                );
                                console.table(alumno);
                            }
                        }
                    }
                }
            }
        }
    } */
});