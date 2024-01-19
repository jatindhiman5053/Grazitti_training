// var animals = [
//     { animal: 'Horse', name: 'Henry', age: 43 },
//     { animal: 'Dog', name: 'Fred', age: 13 },
//     { animal: 'Cat', name: 'Frodo', age: 18 }
// ];

// console.table(animals);


// function display() {
//     let x = 10;

//     if (x) {
//         let x = 20;
//         console.log("hii");
//         console.log(x);
//     }
//     console.log(x);
// }
// display();




// console.log("Timer log");
// console.time('Timer1');
// var items = [];
// for (var i = 0; i < 100; i++) {
//     items.push({ index: i });
// }
// console.timeEnd('Timer1');






// var car;
// var func1 = function () {
//     func2();
//     console.log("function 1");
// }
// var func2 = function () {
//     func4();
//     console.log("function 2");
// }
// var func3 = function () {

//     console.log("function 3");
// }
// var func4 = function () {
//     car = new Car();
//     car.funcX();
//     console.log("function 4");
// }
// var Car = function () {
//     this.brand = 'volvo';
//     this.color = 'red';
//     this.funcX = function () {
//         this.funcY();
//         console.log("function X");
//     }
//     this.funcY = function () {
//         this.funcZ();

//         console.log("function Y");
//     }
//     this.funcZ = function () {
//         console.trace('trace car')
//         console.log("function Z");
//     }
// }
// func1();




let funct = document.getElementById('clickme');

function first() {
    console.log("First Function");
}
function second() {
    console.log("second Function");
}
function third() {
    console.log("third Function");
}


let functarray = [first, second, third];

function display() {
    functarray.forEach(element => {
        element();
    });
}
funct.addEventListener('click', display);



