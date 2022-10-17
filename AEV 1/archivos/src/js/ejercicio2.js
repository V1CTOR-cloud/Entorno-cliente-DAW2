const titulo = document.getElementsByTagName('h1')[1];
titulo.style.color = 'red';
const table = document.getElementsByTagName('tbody')[0];


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
                                    table.remove();
                                    table.appendChild(document.createElement('tr'));
                                    fakeData[0].images.forEach(element => {

                                    });

                                    break;

                                case 'FAMILIA':
                                    table.remove();
                                    break;

                                case 'LEGADO':
                                    table.remove();
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