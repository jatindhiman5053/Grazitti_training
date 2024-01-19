let Save = document.getElementById('Save');
let Remove = document.getElementById('Remove');




function store(FirstName) {
    if (typeof (Storage) !== 'undefined') {
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('LastName').value;
        let City = document.getElementById('City').value;
        let Country = document.getElementById('Country').value;


        document.cookie = `FirstName = ${FirstName}; expires=Thu, 1 Jan 2034 00:00:00 GMT`;
        document.cookie = `LastName = ${LastName};expires=Thu, 1 Jan 2034 00:00:00 GMT `;
        document.cookie = `City = ${City}; expires=Thu, 1 Jan 2034 00:00:00 GMT`;
        document.cookie = `Country = ${Country}; expires=Thu, 1 Jan 2034 00:00:00 GMT`;


        console.log(document.cookie);

        document.getElementById('FirstName').value = '';
        document.getElementById('LastName').value = '';
        document.getElementById('City').value = '';
        document.getElementById('Country').value = '';

        return FirstName;
    }   
}

Save.addEventListener('click', store);

function remove() {

    
    document.cookie = `FirstName =; expires=Thu, 1 Jan 2004 00:00:00 GMT`;
    document.cookie = `LastName =;expires=Thu, 1 Jan 2004 00:00:00 GMT `;
    document.cookie = `City =; expires=Thu, 1 Jan 2004 00:00:00 GMT`;
    document.cookie = `Country =; expires=Thu, 1 Jan 2004 00:00:00 GMT`;

}

Remove.addEventListener('click', remove);
