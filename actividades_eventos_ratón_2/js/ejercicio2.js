const table1 = document.getElementById('tablebot');

hoverIMG(table1);

function hoverIMG(object) {
    let img;

    for (let index = 1; index < object.childNodes.length; index++) {
        img = object.rows.cells[index];

        img.addEventListener('mouseenter', () => {
            img.style.opacity = 0.5;
        })

        img.addEventListener('mouseleave', () => {
            img.style.opacity = 1;
        })
    }
}