// =============== JavaScript exercises DOM  ===============
// By V1CTOR-CLOUD
// https://github.com/V1CTOR-cloud

let fakeData = [{ // MOCK data for testing
    days: [
        'Lunes',
        'Martes',
        'Miercoles',
        'jueves',
        'viernes',
        'Sabado',
        'Domingo',
    ],

    name: [
        'Victor',
        'Marta',
        'Julio',
        'Lola',
        'José',
        'John',
        'SixNine',
    ],

    email: [
        'Victor@example.com',
        'Marta@example.com',
        'Julio@example.com',
        'Lola@example.com',
        'José@example.com',
        'John@example.com',
        'SixNine@example.com',
    ],
}]

//#ACT 1

/* 
    Dynamically create a table with a single row and seven columns and map each cell to a day of the week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday).
*/

const cont1 = document.getElementById('one');
const table1 = document.createElement('table');

//PROCESO
cont1.appendChild(table1);
table1.appendChild(document.createElement('tr'));

fakeData.map((generalData) => {
    generalData.days.map((day) => {
        let tddays = document.createElement('td');
        tddays.textContent = day;
        table1.childNodes[0].appendChild(tddays);
    })
})

//#end ACT 1

//#ACT 2

/* 
    Dynamically create a table with two rows and seven columns and map each cell of the first row to a day of the week and each cell of the second row to the information of your choice.
*/

const cont2 = document.getElementById('two');
const table2 = document.createElement('table');


//PROCESO
cont2.appendChild(table2);
table2.appendChild(document.createElement('tr'));
table2.appendChild(document.createElement('tr'));
fakeData.map((generalData) => {

    generalData.days.map((day) => {
        let tddays = document.createElement('td');
        tddays.textContent = day;
        table2.childNodes[0].appendChild(tddays);
    })

    generalData.name.map((name) => {
        let tdnames = document.createElement('td');
        tdnames.textContent = name;
        table2.childNodes[1].appendChild(tdnames);
    })
})

//#end ACT 2

//#ACT 3

/* 
    Dynamically create a table with three rows and seven columns and map each cell of the first row to a day of the week and each cell of the second and third rows to the information of your choice.

    Then use forEach to insert in front of each day of the week in the first row a number: 1 Monday, 2 Tuesday, 3 Wednesday...
*/

const cont3 = document.getElementById('three');
const table3 = document.createElement('table');
const rowemails = document.createElement('tr');

//PROCESO
cont3.appendChild(table3);
table3.appendChild(document.createElement('tr'));
table3.appendChild(document.createElement('tr'));
table3.appendChild(document.createElement('tr'));
fakeData.map((generalData) => {

        generalData.days.forEach((day, index) => {
            let tddays = document.createElement('td');
            tddays.textContent = index + "  " + day;
            table3.childNodes[0].appendChild(tddays);
        });


        generalData.name.map((name) => {
            let tdnames = document.createElement('td');
            tdnames.textContent = name;
            table3.childNodes[1].appendChild(tdnames);
        })

        generalData.email.map((email) => {
            let tdemails = document.createElement('td');
            tdemails.textContent = email;
            table3.childNodes[2].appendChild(tdemails);
        })
    })
    //#end ACT 3

//#ACT 4

/* 

Implement a script that allows filtering the value entered in the form in the table. When entering a value in the form and applying the submit event, a filtering will be performed to check if the value entered matches any of the table. Subsequently, the contents of the table will be deleted. If the search term matches, it will be displayed in a newly created row. If it does not match, it will indicate that no results were found.

*/

let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let entryText = document.getElementsByTagName('input')[0];
    let tvalores = document.getElementsByTagName('table')[3].childNodes[1];
    let errorMessage = '';

    tvalores.childNodes.forEach((tr) => {
        if (tr.nodeType === 1) {
            tr.childNodes.forEach((td) => {
                if (td.nodeType === 1) {
                    if (td.textContent === entryText.value) {
                        borraTabla(tvalores);
                        tvalores.appendChild(tr);
                    } else {
                        errorMessage = 'no se han encontrado resultados.';
                    }
                }
            })
        }
    });

    if (errorMessage !== '') {
        alert(errorMessage);
    }
})

function borraTabla(table) {
    table.childNodes.forEach(row => {
        if (row.nodeType === 1) {
            table.removeChild(row);
        }
    });
}


//#end ACT 4