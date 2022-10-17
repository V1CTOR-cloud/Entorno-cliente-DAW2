const titulo = document.getElementsByTagName('h1')[1];
titulo.style.color = 'red';
const table = document.getElementsByTagName('tbody')[0];

document.getElementsByTagName('h1')[0].addEventListener('click', () => {
    location.reload();
});


/* CREACIÓN TITULOS */
const title1 = document.createElement('h1');
const title2 = document.createElement('h1');

/* FIN CREACIÓN TITULOS */


/* ESTILOS Y TEXTO */

title1.textContent = 'FAMILIA'
title2.textContent = 'LEGADO'

title1.style.color = 'red';
title2.style.color = 'red';

/* FIN ESTILOS Y TEXTO  */

for (let index = 0; index < table.childNodes.length; index++) {
    if (table.childNodes[index].nodeType === 1) { // TR LEVEL
        const element = table.childNodes[index];
        element.appendChild(document.createElement('td')); // AÑADIMOS CELDAS
        element.appendChild(document.createElement('td')); // AÑADIMOS CELDAS

        element.cells[1].appendChild(title1); // AÑADIMOS TITULOS
        element.cells[2].appendChild(title2); // AÑADIMOS TITULOS

        element.cells[0].style.backgroundImage = 'url(../src/5.jpg)'; // ADA
        element.cells[1].style.backgroundImage = 'url(../src/10.jpg)'; // FAMILIA
        element.cells[2].style.backgroundImage = 'url(../src/1.jpg)'; // LEGADO


        for (let jindex = 0; jindex < element.childNodes.length; jindex++) { // ESTILOS EN LAS CELDAS
            if (element.childNodes[jindex].nodeType === 1) {
                const jelement = element.childNodes[jindex];
                jelement.style.backgroundPosition = 'center';
                jelement.style.backgroundRepeat = 'no-repeat';
                jelement.style.backgroundSize = 'cover';

                jelement.addEventListener('click', (e) => {
                    e.preventDefault();

                    jelement.childNodes.forEach(element => {
                        if (element.nodeType === 1) {
                            switch (element.textContent.toUpperCase()) {
                                case 'ADA':
                                    table.deleteRow(0);
                                    //console.log(table);
                                    const tr = document.createElement('tr');
                                    table.appendChild(tr);

                                    fakeData[2].images.forEach(element => {
                                        const td = document.createElement('td');
                                        tr.appendChild(td);
                                        td.style.backgroundPosition = 'center';
                                        td.style.backgroundRepeat = 'no-repeat';
                                        td.style.backgroundSize = 'cover';

                                        td.style.height = '12rem';
                                        td.style.width = '18rem';

                                        td.style.backgroundImage = 'url(' + element + ')';

                                        td.addEventListener('click', () => {

                                            for (let jindex = 0; jindex < tr.childNodes.length; jindex++) {
                                                const cell = tr.childNodes[jindex];

                                                tr.replaceChildren(document.createElement('td'));
                                                tr.appendChild(cell);
                                                cell.style.backgroundImage = 'url(' + element + ')';

                                                cell.addEventListener('click', () => {
                                                    tr.replaceChildren(td);
                                                    td.style.height = '80rem';
                                                });

                                            }

                                        });

                                    });
                                    break;

                                case 'FAMILIA':
                                    table.deleteRow(0);
                                    //console.log(table);
                                    const tr1 = document.createElement('tr');
                                    table.appendChild(tr1);

                                    fakeData[2].images.forEach(element => {
                                        const td = document.createElement('td');
                                        tr1.appendChild(td);
                                        td.style.backgroundPosition = 'center';
                                        td.style.backgroundRepeat = 'no-repeat';
                                        td.style.backgroundSize = 'cover';

                                        td.style.height = '12rem';
                                        td.style.width = '18rem';

                                        td.style.backgroundImage = 'url(' + element + ')';

                                        td.addEventListener('click', () => {

                                            for (let jindex = 0; jindex < tr1.childNodes.length; jindex++) {
                                                const cell = tr1.childNodes[jindex];

                                                tr1.replaceChildren(document.createElement('td'));
                                                tr1.appendChild(cell);
                                                cell.style.backgroundImage = 'url(' + element + ')';

                                                cell.addEventListener('click', () => {
                                                    tr1.replaceChildren(td);
                                                    td.style.height = '80rem';
                                                });

                                            }

                                        });

                                    });
                                    break;

                                case 'LEGADO':
                                    table.deleteRow(0);
                                    //console.log(table);
                                    const tr2 = document.createElement('tr');
                                    table.appendChild(tr2);

                                    fakeData[2].images.forEach(element => {
                                        const td = document.createElement('td');
                                        tr2.appendChild(td);
                                        td.style.backgroundPosition = 'center';
                                        td.style.backgroundRepeat = 'no-repeat';
                                        td.style.backgroundSize = 'cover';

                                        td.style.height = '12rem';
                                        td.style.width = '18rem';

                                        td.style.backgroundImage = 'url(' + element + ')';

                                        td.addEventListener('click', () => {

                                            for (let jindex = 0; jindex < tr2.childNodes.length; jindex++) {
                                                const cell = tr2.childNodes[jindex];

                                                tr2.replaceChildren(document.createElement('td'));
                                                tr2.appendChild(cell);
                                                cell.style.backgroundImage = 'url(' + element + ')';

                                                cell.addEventListener('click', () => {
                                                    tr2.replaceChildren(td);
                                                    td.style.height = '80rem';
                                                });

                                            }

                                        });

                                    });

                                    break;

                                default:
                                    alert('Invalid block on cells');
                                    break;
                            }
                        }
                    });

                });

            }
        }
    }
}

const fakeData = [{
        images: [
            '../src/ada/1.jpg',
            '../src/ada/2.jpg',
            '../src/ada/3.jpg',
            '../src/ada/4.jpg',
            '../src/ada/5.jpg',
        ]
    },
    {
        images: [
            '../src/familia/1.jpg',
            '../src/familia/2.jpg',
            '../src/familia/3.jpg',
            '../src/familia/4.jpg',
            '../src/familia/5.jpg',
        ]
    },
    {
        images: [
            '../src/legado/1.jpg',
            '../src/legado/2.jpg',
            '../src/legado/3.jpg',
            '../src/legado/4.jpg',
            '../src/legado/5.jpg',
        ]
    },
];