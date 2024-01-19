
let createDBbtn = document.getElementById('dbcreatebtn');
createDBbtn.addEventListener('click', createDB);

let adddata = document.getElementById('add_data');
adddata.addEventListener('click', add_data);

let viewdata = document.getElementById('view_data');
viewdata.addEventListener('click', view_data);

const printdata = document.getElementById('text');
printdata.innerHTML = '';

let db;


function view_data() {

    const tx = db.transaction("empData", 'readonly')
    const showdata = tx.objectStore('empData')
    const request = showdata.openCursor();

    request.onsuccess = (e) => {
        const cursor = e.target.result;

        if (cursor) {
            const msg = `<p> the employee id is: ${cursor.key} amd name of the employee is ${cursor.value.name} </p>`;

            printdata.innerHTML += `${msg}`;

            cursor.continue();
        }
    }
}

function add_data() {

    const emp_data = {
        id: 1 + Math.random(),
        name: "jatin",
    }

    const tx = db.transaction('empData', 'readwrite');
    const data = tx.objectStore("empData");
    data.add(emp_data);
}

function createDB() {
    let dbname = document.getElementById('dbname').value;
    let dbversion = document.getElementById('dbversion').value;
    const opendb = window.indexedDB.open(dbname, dbversion);

    opendb.onerror = (e) => {
        alert(`Error is here ${e.target.error}`);
    }

    opendb.onupgradeneeded = (e) => {
        db = e.target.result;
        const empData = db.createObjectStore("empData", { keyPath: "id" })
        alert(`Upgrade DataBase : "${db.name}" with the version : "${db.version}" is done here`)
    }

    opendb.onsuccess = (e) => {
        db = e.target.result;
        alert(`DataBase "${db.name}" is successfully created here or upgraded and version of this database is "${db.version}"`)
    }
}



