const text = document.getElementById('text');

if (typeof (Storage) !== "undefined") {

    localStorage.setItem('first_name' , "Jatin");
    localStorage.setItem('last_name' , "Dhiman");

    let first_name = localStorage.getItem('first_name');
    let last_name = localStorage.getItem('last_name');
    let name = localStorage.getItem('first_name') + " "+ localStorage.getItem('last_name');


    console.log(name);

    console.log(localStorage);

    console.log(typeof(localStorage));

    localStorage.clear();

    console.log(localStorage);

    console.log(localStorage.getItem('first_name'));
    console.log(localStorage.getItem('last_name'));

    
    text.innerHTML = first_name + " " + last_name;
} else {
    console.log('sorry alll');
}



function print_value(){
    let user_name = document.getElementById('user_name').value;

    if(typeof(Storage) !== 'undefined'){

        let name = localStorage.setItem('name',`${user_name}`);

        let print_name = localStorage.getItem('name');


        console.log(print_name);
    }
}



