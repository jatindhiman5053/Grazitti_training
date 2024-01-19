let calculate = document.getElementById('Calculate');
let displaydata = document.getElementById('displaydata');

let output = [];


function addition() {

    let FirstNumber = document.getElementById('FirstNumber').value;
    let SecondNumber = document.getElementById('SecondNumber').value;

    let sum = +FirstNumber + +SecondNumber;

    displaydata.innerText += sum + ", ";

    output.push(sum);
    console.log(output);

    document.getElementById('FirstNumber').value = '';
    document.getElementById('SecondNumber').value = '';

}

function Subtract() {
    let FirstNumber = document.getElementById('FirstNumber').value;
    let SecondNumber = document.getElementById('SecondNumber').value;

    let sub = FirstNumber - SecondNumber;


    
    if (sub != 0) {
        output.push(sub);
        console.log(output);
    } else {
        output.push("Subtraction Not Calculated");
    }
    
    displaydata.innerText += sub + ", ";

    document.getElementById('FirstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
}


function Multiply() {
    let FirstNumber = document.getElementById('FirstNumber').value;
    let SecondNumber = document.getElementById('SecondNumber').value;

    let Multi = +FirstNumber * +SecondNumber;

    
    if (Multi != 0) {
        output.push(Multi);
        console.log(output);
    } else {
        output.push("Multiply Not Calculated");
    }
    displaydata.innerText += Multi + ", ";

    document.getElementById('FirstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
}

function Divide() {
    let FirstNumber = document.getElementById('FirstNumber').value;
    let SecondNumber = document.getElementById('SecondNumber').value;

    let divi = +FirstNumber / +SecondNumber;

    

    if (divi != 0 && divi == NaN ) {
        output.push(divi);
        console.log(output);
    } else {
        output.push("division Not Calculated");
    }

    displaydata.innerText += divi;

    document.getElementById('FirstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
}

const calcuArray = [addition, Subtract, Multiply, Divide];


function display() {
    calcuArray.forEach(element => {
        element();
    });
}


calculate.addEventListener('click', display);


// let calculate = document.getElementById('Calculate');
// let displaydata = document.getElementById('displaydata');

// let output = [];

// function calculateAll() {
//     let FirstNumber = document.getElementById('FirstNumber').value;
//     let SecondNumber = document.getElementById('SecondNumber').value;

//     let sum = +FirstNumber + +SecondNumber;
//     let sub = FirstNumber - SecondNumber;
//     let Multi = +FirstNumber * +SecondNumber;
//     let divi = +FirstNumber / +SecondNumber;

//     displaydata.innerText += `Add: ${sum}, Subtract: ${sub}, Multiply: ${Multi}, Divide: ${divi}`;

//     output.push(sum, sub, Multi, divi);
//     console.log(output);

//     document.getElementById('FirstNumber').value = '';
//     document.getElementById('SecondNumber').value = '';
// }

// calculate.addEventListener('click', calculateAll);
