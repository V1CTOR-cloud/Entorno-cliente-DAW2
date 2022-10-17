let container = document.getElementsByClassName('lovelace'); // NODELIST lovelace

for (let index = 1; index < container.length; index++) { // OCULTAMOS TODOS EXCEPTO 1
    const element = container[index];
    element.style.display = 'none';
}


for (let index = 0; index < container.length; index++) { // RECORREMOS NODELIST
    if (container[index].nodeType === 1) { // ELIMINA ESPACIOS BLANCOS
        let lovelace = container[index];

        const numberSection = lovelace.firstChild.nextSibling.nextSibling.nextSibling;

        // navigation Inside


        numberSection.lastChild.previousSibling.childNodes.forEach(element => { //BOOK INSIDE
            if (element.nodeType === 1) {
                let cont = 0;
                if (element.textContent.toUpperCase() === 'ANTERIOR') { // ANTERIOR BTN
                    const btnBackIns = element;

                    btnBackIns.addEventListener('click', (e) => {
                        e.preventDefault();
                        //#region 
                        /* 
                            CAMBIAR POS
                        */
                        cont++;
                        while (cont !== 3) { // permite decrementar 3 veces
                            index--;
                            lovelace = container[index];
                            lovelace.style.display = 'block';
                        }
                    });
                } else { // NEXT BTN
                    const btnNextIns = element;
                    btnNextIns.addEventListener('click', (e) => {
                        e.preventDefault();
                        //#region 
                        /* 
                            CAMBIAR POS
                        */
                        cont++;
                        while (cont !== 3) { // permite incrementar 3 veces
                            index--;
                            lovelace = container[index];
                            lovelace.style.display = 'block';
                        }
                    });

                }
            }
        });

        // Button navigation OUTSIDE

        lovelace.lastChild.previousSibling.childNodes.forEach(element => { //BOOK OUTSIDE
            if (element.nodeType === 1) {
                if (element.textContent.toUpperCase() === 'ANTERIOR') { // ANTERIOR BTN OUTSIDE
                    const btnBackOut = element;

                    btnBackOut.addEventListener("click", (e) => { // recursividad inversa
                        e.preventDefault();
                        const category = lovelace.firstChild.nextSibling;
                        switch (category.textContent.toUpperCase()) {
                            case 'BIOGRAFIA': // ÚLTIMA ACCIÓN <- recibe recursividad inversa
                                lovelace.style.display = 'none'
                                index = 0;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'CONTRIBUCIÓN A LA INFORMÁTICA': // <-GOES TO BIOGRAFIA
                                lovelace.style.display = 'none';
                                index = index - 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'MÁS ALLÁ DE LOS NÚMEROS': // <-GOES TO CONTRIBUCIÓN
                                lovelace.style.display = 'none';
                                index = index - 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            default:
                                alert('Error: Unknown category'); // ERROR CATEGORIA
                                break;
                        }
                    });
                } else { // SIGUIENTE BTN OUTSIDE
                    const btnNextOut = element;
                    btnNextOut.addEventListener('click', (e) => { // recursividad ordinaria
                        e.preventDefault();
                        const category = lovelace.firstChild.nextSibling; // CATEGORIA
                        switch (category.textContent.toUpperCase()) {
                            case 'BIOGRAFIA': // GOES TO CONTRIBUCIÓN ->
                                lovelace.style.display = 'none';
                                index = index + 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'CONTRIBUCIÓN A LA INFORMÁTICA': // GOES TO MÁS ALLÁ ->
                                lovelace.style.display = 'none';
                                index = index + 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'MÁS ALLÁ DE LOS NÚMEROS': // -> FIN DE RECURSIVIDAD

                                break;

                            default:
                                alert('Error: Unknown category'); // ERROR CATEGORIA
                                break;
                        }
                    });
                }
            }
        });
    }
}