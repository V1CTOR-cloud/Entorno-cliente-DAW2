let table = document.querySelector('#six').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0]

let tbody = document.querySelector('#six').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0].childNodes[1]

let array = Array.from(tbody.childNodes);
let newarr = [];
newarr = limpiaArray(array);

//console.log(newarr);

let TRNombres = newarr[0];
let TRDomicilios = newarr[1];
let TREdad = newarr[2];
let TROcupacion = newarr[3];
let TRHobbies = newarr[4];
let cont = 0;
newarr = [];

cambiaDatos(TRNombres);
cambiaDatos(TRDomicilios);
cambiaDatos(TREdad);
cambiaDatos(TROcupacion);
cambiaDatos(TRHobbies);

function cambiaDatos(TR) {
    for (let index = 0; index < TR.childNodes.length; index++) {
        const element = TR.childNodes[index];

        if (element.nodeType === 1) {
            cont++
            if (cont % 2 === 1) {
                TR.childNodes[index].style.backgroundColor = "gray";
                TR.childNodes[index].style.color = "white";
            }
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