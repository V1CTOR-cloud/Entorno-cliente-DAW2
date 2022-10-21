class Usuario {
    nombre;
    primerApellido;
    segundoApellido;
    dni;
    userName;
    passWord;



    constructor(nombre, primerApellido, segundoApellido, dni) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.dni = dni;
        this.userName = this.constructor.crearUsuario(nombre, primerApellido, segundoApellido);
        /* this.passWord = passWord; */
    }



    static crearUsuario(nombre, primerApellido, segundoApellido) {
        let resultado = nombre.substring(0, 2) + primerApellido.substring(0, 2) + segundoApellido.substring(0, 2) + Math.floor(Math.random() * 9999) + 1;
        console.log(resultado);


    }

    /* static crearPassword(nombre, primerApellido, segundoApellido) {
        let resultado = nombre.subString(0, 2) + primerApellido.subString(0, 2) + segundoApellido.subString(0, 2) + Math.floor(Math.random() * 9999) + 1000;

    } */
}

let user = new Usuario("Víctor", "Martínez", "Zapata", "54426616Z");