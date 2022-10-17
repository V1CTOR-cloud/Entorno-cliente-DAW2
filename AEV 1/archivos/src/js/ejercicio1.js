let container = document.getElementsByClassName('lovelace');


for (let index = 1; index < container.length; index++) {
    const element = container[index];
    element.style.display = 'none';
}


for (let index = 0; index < container.length; index++) {
    if (container[index].nodeType === 1) {
        let lovelace = container[index];
        //console.log(lovelace);



        // Button navigation OUTSIDE

        lovelace.lastChild.previousSibling.childNodes.forEach(element => {
            if (element.nodeType === 1) {
                if (element.textContent.toUpperCase() === 'ANTERIOR') {
                    const btnBackOut = element;

                    btnBackOut.addEventListener("click", (e) => {
                        e.preventDefault();
                        lovelace.style.display = 'none';
                        const category = lovelace.firstChild.nextSibling;
                        console.log(category.textContent);

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
                        console.log(category.textContent);

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