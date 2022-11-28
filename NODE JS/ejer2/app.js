function cifrar(frase, clave) {
    let letter, respuesta = '';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let cifrado = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave);
    //Coge la letter del cifrado según la posición de cada letter
    //en alfabeto 
    for (let i = 0; i < frase.length; i++) {
        letter = frase[i].toLowerCase();
        if (letter == ' ') {
            letter = ' ';
        } else {
            letter = cifrado[alfabeto.indexOf(letter)];
        }
        respuesta += letter;
    }
    return respuesta;
}

function descifrar(frase, clave) {
    let letter, respuesta = '';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let cifrado = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave)
    for (let i = 0; i < frase.length; i++) {
        letter = frase[i].toLowerCase();
        if (letter == ' ') {
            letter = ' ';
        } else {
            letter = alfabeto[cifrado.indexOf(letter)];
        }
        respuesta += letter;
    }
    return respuesta;
}