let container = document.getElementsByClassName('lovelace');



for (let index = 0; index < container.length; index++) {
    if (container[index].nodeType === 1) {
        const lovelace = container[index];
        console.log(lovelace);



        // Button navigation OUTSIDE
        let btnBackOut;
        let btnNextOut;
        lovelace.lastChild.previousSibling.childNodes.forEach(element => {
            if (element.nodeType === 1) {
                if (element.textContent.toUpperCase() === 'ANTERIOR') {
                    btnBackOut = element;
                } else {
                    btnNextOut = element;
                }
            }
        });

        lovelace.lastChild.previousSibling.childNodes[0]



        btnBackOut.addEventListener("click", (e) => {
            e.preventDefault();
            console.log('btnBack clicked');
        });
        btnNextOut.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('btnNext clicked');
        });
    }
}