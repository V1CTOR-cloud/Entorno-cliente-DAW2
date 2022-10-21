function ejer1() {
    let age = prompt('Please enter your age');
    age = parseInt(age);
    if (typeof age !== 'string') {
        let date = new Date();

        if (isNaN(age)) {
            alert("Error: Invalid age value");
        } else {
            alert("Naciste el año \t " + parseInt(date.getFullYear() - age));
        }
    }
}

function ejer2() {
    let exit = false;
    do {
        let age = prompt('Please enter your age');
        age = parseInt(age);
        if (typeof age !== 'string') {
            let date = new Date();

            if (isNaN(age)) {
                alert("Error: Invalid age value");
            } else {
                alert("You born in \t " + parseInt(date.getFullYear() - age));
                exit = true;
            }
        }
    } while (exit === false);
}

function ejer3() {
    let mark = prompt('Text your mark: ');
    mark = parseInt(mark);
    if (typeof mark !== 'string') {
        if (!isNaN(mark)) {
            if (mark > 0 && mark < 5) {
                alert('Insufficient');
            } else {
                if (mark >= 5 && mark < 7) {
                    alert('Good');
                } else {
                    if (mark >= 7 && mark < 10) {
                        alert('noteworthy');
                    } else {
                        alert('excellent');
                    }
                }
            }
        } else {
            alert('Mark must be a number.');
        }
    }
}

function ejer4() {
    let mark = prompt('Text your mark: ');
    mark = parseInt(mark);
    if (typeof mark !== 'string') {
        if (!isNaN(mark)) {
            switch (mark) {
                case mark >= 0 && mark < 5:
                    alert('Insufficient');
                    break;

                case mark >= 5 && mark < 7:
                    alert('Good');
                    break;

                case mark >= 7 && mark < 10:
                    alert('noteworthy');
                    break;

                case 10:
                    alert('excellent');
                    break;

                default:
                    alert('Invalid');
                    break;
            }
        } else {
            alert('Mark must be a number.');
        }
    }
}

function ejer5() {

    let ladoA = prompt('Enter side A');
    let ladoB = prompt('Enter side B');

    if (ladoA !== "" && ladoB !== "") {
        parseInt(ladoA);
        parseInt(ladoB);
        console.log(calculo(ladoA, ladoB));
    } else {
        alert('Error on the sides');
    }

    function calculo(lado1, lado2) {
        if (lado1 === lado2) {
            return 'Im a square\n Area: ' + Math.pow(lado1, 2);
        } else {
            return 'Im a rectangle\n Area: ' + lado1 * lado2;
        }
    }
}


function ejer6() {
    let num = prompt('Enter a number: ');
    alert(factorial(num));

    function factorial(n) {
        var total = 1;
        for (i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }
}

function ejer7() {
    let pregunta = prompt("Please enter word or prhase");

    const palindrome = (data) => {
        var len = data.length;
        var mid = Math.floor(len / 2);
        for (var i = 0; i < mid; i++) {
            if (data[i] !== data[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    alert(palindrome(pregunta));
    console.log(palindrome(pregunta));
}

function ejer8() {
    /*let weekDay = prompt('Please enter the weekDay');
    let numDays = prompt('Please enter the number of day');
    let mes = prompt("Please enter a month: ");
*/
    let lunes = [];
    let martes = [];
    let miercoles = [];
    let jueves = [];
    let viernes = [];
    let sabado = [];
    let domingo = [];

    for (let index = 0; index < 30; index++) {
        lunes.push(index);
        martes.push(index);
        miercoles.push(index);
        jueves.push(index);
        viernes.push(index);
        sabado.push(index);
        domingo.push(index);
    }

    let semanas = [lunes, martes, miercoles, jueves, viernes, sabado, domingo]



    var calendar = {
        Lunes: lunes,
        Martes: martes,
        Miercoles: miercoles,
        jueves: jueves,
        viernes: viernes,
        sabado: sabado,
        domingo: domingo
    }



    console.table(calendar);
}