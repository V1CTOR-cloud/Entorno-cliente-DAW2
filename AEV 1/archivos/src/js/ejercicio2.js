//#region titulo rojo 
const titulo = document.getElementsByTagName('h1')[1];
titulo.style.color = 'red';
const table = document.getElementsByTagName('tbody')[0];

//#endregion titulo rojo

document.getElementsByTagName('h1')[0].addEventListener('click', () => { // re-renderiza la pag para volver al estado inicial
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

/* 
    Recorre tbody, elimina espacios en blanco, añadimos img inicio,
    damos estilos a las celdas, recorremos y ejecutamos re renderización de tabla
*/

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
            if (element.childNodes[jindex].nodeType === 1) { // Elimina espacios en blanco
                const jelement = element.childNodes[jindex]; // Celdas iniciales
                jelement.style.backgroundPosition = 'center';
                jelement.style.backgroundRepeat = 'no-repeat'; // ESTILOS
                jelement.style.backgroundSize = 'cover';

                jelement.addEventListener('click', (e) => { // CLICK EVENT
                    e.preventDefault();

                    jelement.childNodes.forEach(element => { // RECORREMOS la tabla y mockeamos los datos con fakeData
                        if (element.nodeType === 1) { // Elimina espacios en blanco
                            const tr = document.createElement('tr'); // FILA
                            switch (element.textContent.toUpperCase()) { // selecciona por categorias
                                case 'ADA':
                                    table.deleteRow(0); // Borramos la fila

                                    table.appendChild(tr); // creamos  la fila

                                    fakeData[0].images.forEach(element => { // creamos celdas con las imagenes ADA
                                        const td = document.createElement('td');
                                        tr.appendChild(td);
                                        td.style.backgroundPosition = 'center';
                                        td.style.backgroundRepeat = 'no-repeat';
                                        td.style.backgroundSize = 'cover';

                                        td.style.height = '12rem';
                                        td.style.width = '18rem';

                                        td.style.backgroundImage = 'url(' + element + ')'; // ASIGNAMOS el URI de la img

                                        td.addEventListener('click', () => { // click de celdas

                                            for (let jindex = 0; jindex < tr.childNodes.length; jindex++) { // renderización tabla
                                                const cell = tr.childNodes[jindex];

                                                tr.replaceChildren(document.createElement('td'));
                                                tr.appendChild(cell);
                                                cell.style.backgroundImage = 'url(' + element + ')'; // Render img con id

                                                cell.addEventListener('click', () => { // MOSTRAR GRANDE
                                                    tr.replaceChildren(td);
                                                    td.style.height = '80rem'; // Set height to 80
                                                });

                                            }

                                        });

                                    });
                                    break;

                                case 'FAMILIA': // MISMO PROCESO QUE ADA
                                    table.deleteRow(0);

                                    table.appendChild(tr);

                                    fakeData[1].images.forEach(element => { // FAMILIA
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

                                case 'LEGADO': // MISMO PROCESO ADA, FAMILIA
                                    table.deleteRow(0);

                                    table.appendChild(tr);

                                    fakeData[2].images.forEach(element => { // LEGADO
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

                                default:
                                    alert('Invalid block on cells'); // EXCEPTION CATEGORIA
                                    break;
                            }
                        }
                    });

                });

            }
        }
    }
}

const fakeData = [{ // ARRAY IMG && DATOS MOCKEADOS 
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