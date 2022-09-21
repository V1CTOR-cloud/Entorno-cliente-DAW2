let table = document.querySelector('#four').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0]

let tbody = document.querySelector('#four').childNodes[1].childNodes[1].childNodes[1].childNodes[3].getElementsByTagName('table')[0].childNodes[1]

let array = tbody.childNodes;
let arrceldas1 = [];
let arrceldas2 = [];
let arrceldas3 = [];
let arrceldas4 = [];
let arrceldas5 = [];
//console.log(array);

for (let index = 0; index < array.length; index++) {

    if (index % 2 === 1) {
        arrceldas1 = array[1].childNodes;
        arrceldas2 = array[2].childNodes;
        arrceldas3 = array[3].childNodes;
        arrceldas4 = array[4].childNodes;
        arrceldas5 = array[5].childNodes;
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}