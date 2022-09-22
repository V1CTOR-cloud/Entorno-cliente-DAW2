let table = document.querySelector('#four').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0]

let tbody = document.querySelector('#four').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0].childNodes[1]

let array = Array.from(tbody.childNodes);
let newarr = [];
newarr = limpiaArray(array);

//console.log(newarr);

let TRNombres = newarr[0];
let TRDomicilios = newarr[1];
let TREdad = newarr[2];
let TROcupacion = newarr[3];
let TRHobbies = newarr[4];

newarr = [];

//console.log(TRNombres);
cambiaDatos(TRDomicilios, "Calle Barbaro", 3);
cambiaDatos(TREdad, 400, 3);
cambiaDatos(TRHobbies, 'fumar crack', 5);
cambiaDatos(TROcupacion, 'Desecho Social', 9);

cambiaNombre(TRNombres, "Fumadores");

function cambiaDatos(TR, dato, pos) {
    for (let index = 0; index < TR.childNodes.length; index++) {
        const element = TR.childNodes[index];

        if (element.nodeType === 1) {
            TR.childNodes[pos].textContent = dato;
        }
    }
}

function cambiaNombre(TR, dato) {
    for (let index = 0; index < TR.childNodes.length; index++) {
        const element = TR.childNodes[index];

        if (element.nodeType === 1) {
            element.textContent = dato;
        }

    }
}

function limpiaArray(array) {
    let newarr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.nodeType === 1) {
            newarr.push(element);
        }
    }
    return newarr;
}