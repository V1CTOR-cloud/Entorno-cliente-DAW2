const tbody = document.getElementById('tablebot').childNodes[1];
for (let index = 0; index < tbody.childNodes.length; index++) {
    const element = tbody.childNodes[index];

    if (element.nodeType === 1) {
        for (let jindex = 0; jindex < element.childNodes.length; jindex++) {
            const img = element.childNodes[jindex];
            if (img.nodeType === 1) {
                let imagenLimpia = img.childNodes[0]

                imagenLimpia.addEventListener("mouseenter", () => {
                    imagenLimpia.style.opacity = 0.5;
                })

                imagenLimpia.addEventListener("mouseleave", () => {
                    imagenLimpia.style.opacity = 1;
                })

                imagenLimpia.addEventListener("click", () => {
                    console.log(imagenLimpia);
                })
            }
        }
    }
}