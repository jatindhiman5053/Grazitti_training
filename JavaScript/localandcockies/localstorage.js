let Save = document.getElementById('Save');
let Remove = document.getElementById('Remove');




function store() {
    if (typeof (Storage) !== 'undefined') {
        let FirstName = document.getElementById('FirstName').value;
        let LastName = document.getElementById('LastName').value;
        let City = document.getElementById('City').value;
        let Country = document.getElementById('Country').value;

        localStorage.setItem('FirstName', `${FirstName}`);
        localStorage.setItem('LastName', `${LastName}`);
        localStorage.setItem('City', `${City}`);
        localStorage.setItem('Country', `${Country}`);

        let FirstNameLocal = localStorage.getItem('FirstName');
        let LastNameLocal = localStorage.getItem('LastName');
        let CityLocal = localStorage.getItem('City');
        let CountryLocal = localStorage.getItem('Country');

        console.log(`${FirstNameLocal} ${LastNameLocal} is from ${CityLocal} City and Country is ${CountryLocal}`);


        document.getElementById('FirstName').value = '';
        document.getElementById('LastName').value = '';
        document.getElementById('City').value = '';
        document.getElementById('Country').value = '';


    }

}

Save.addEventListener('click', store);

function remove(){
    localStorage.clear();
}

Remove.addEventListener('click', remove);
