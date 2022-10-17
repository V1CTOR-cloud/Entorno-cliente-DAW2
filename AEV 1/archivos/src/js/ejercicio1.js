let container = document.getElementsByClassName('lovelace');

for (let index = 1; index < container.length; index++) {
    const element = container[index];
    element.style.display = 'none';
}


for (let index = 0; index < container.length; index++) {
    if (container[index].nodeType === 1) {
        let lovelace = container[index];

        const numberSection = lovelace.firstChild.nextSibling.nextSibling.nextSibling;

        // navigation Inside


        numberSection.lastChild.previousSibling.childNodes.forEach(element => { //BOOK INSIDE
            if (element.nodeType === 1) {
                if (element.textContent.toUpperCase() === 'ANTERIOR') { // ANTERIOR BTN
                    const btnBackIns = element;

                    btnBackIns.addEventListener('click', (e) => {
                        e.preventDefault();
                        //#region 
                        /* 
                            CAMBIAR POS
                        */



                    });
                } else { // NEXT BTN
                    const btnNextIns = element;
                    btnNextIns.addEventListener('click', (e) => {
                        e.preventDefault();
                        //#region 
                        /* 
                            CAMBIAR POS
                        */
                    });

                }
            }
        });

        // Button navigation OUTSIDE

        lovelace.lastChild.previousSibling.childNodes.forEach(element => { //BOOK OUTSIDE
            if (element.nodeType === 1) {
                if (element.textContent.toUpperCase() === 'ANTERIOR') {
                    const btnBackOut = element;

                    btnBackOut.addEventListener("click", (e) => {
                        e.preventDefault();
                        /* lovelace.style.display = 'none'; */
                        const category = lovelace.firstChild.nextSibling;
                        //console.log(category.textContent);
                        //console.log(index);
                        switch (category.textContent.toUpperCase()) {
                            case 'BIOGRAFIA':
                                lovelace.style.display = 'none';
                                index = 0;
                                lovelace = container[index];
                                lovelace.style.display = 'block';

                                break;

                            case 'CONTRIBUCIÓN A LA INFORMÁTICA':
                                lovelace.style.display = 'none';
                                index = index - 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'MÁS ALLÁ DE LOS NÚMEROS':
                                lovelace.style.display = 'none';
                                index = index - 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            default:

                                break;
                        }
                    });
                } else {
                    const btnNextOut = element;
                    btnNextOut.addEventListener('click', (e) => {
                        e.preventDefault();
                        const category = lovelace.firstChild.nextSibling;
                        switch (category.textContent.toUpperCase()) {
                            case 'BIOGRAFIA':
                                lovelace.style.display = 'none';
                                index = index + 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'CONTRIBUCIÓN A LA INFORMÁTICA':
                                lovelace.style.display = 'none';
                                index = index + 3;
                                lovelace = container[index];
                                lovelace.style.display = 'block';
                                break;

                            case 'MÁS ALLÁ DE LOS NÚMEROS':

                                break;

                            default:

                                break;
                        }
                    });
                }
            }
        });
    }
}