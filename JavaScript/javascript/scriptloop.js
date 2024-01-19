// import data from './data.json'  assert { type: 'json' };
// console.log(`${data.first_name} ${data.last_name} is age of ${data.age} and is from ${data.city}`);


// const text = '{"first_name": "Jatin", "last_name": "Dhiman","age": 23, "city": "Yamuna Nagar"}';

// let full_data = JSON.parse(text)

// console.log(full_data);



// fetch('./data.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .then((json) => {
//         let name = data.first_name;
//         console.log(data.first_name);
//     });





// let result = document.getElementById('result');

// let cars = ["Supra", "GTR", "BMW", "Audi", "Skyline"];
// let single_car = ' ';


// for (let i = 0; i < cars.length; i++) {
//     single_car += cars[i] + '<br>';
// }
// {
//     let i = 1;
//     while (i < 10) {
//         // console.log("this is from loop " + i);
//         single_car += "this car number is " + i + '<br>';
//         i++;
//     }
// }


// {
//     let i = 1;
//     do {
//         // single_car += "this car number is " + i + '<br>';
//         single_car += cars[i] + '<br>';
//         i++;
//     } while (i <= cars.length);


//     // result.innerHTML = single_car;
// }




const submit = document.getElementById('submit');
function demo() {
    let first_name = document.getElementById('name').value;
    let last_name = document.getElementById('last_name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;

    console.log(first_name);
    console.log(last_name);
    console.log(age);
    console.log(address);

    document.getElementById('name').value = " ";
    document.getElementById('last_name').value = " ";
    document.getElementById('age').value = " ";
    document.getElementById('address').value = " ";
}
submit.addEventListener("click", demo);


let sum = document.getElementById('sum');
function add() {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let addition = +one + +two;

    result.innerText = addition;

    document.getElementById('one').value = " ";
    document.getElementById('two').value = " ";
}
sum.addEventListener('click', add);



let sub = document.getElementById('sub');
function subtract() {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let addition = +one - +two;
    result.innerText = addition;
    document.getElementById('one').value = " ";
    document.getElementById('two').value = " ";
}
sub.addEventListener('click', subtract);




let multi = document.getElementById('multi');
function multiply() {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let addition = +one * +two;
    result.innerText = addition;
    document.getElementById('one').value = " ";
    document.getElementById('two').value = " ";
}
multi.addEventListener('click', multiply);



let divide = document.getElementById('divide');
function division() {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let addition = +one / +two;
    result.innerText = addition;
    document.getElementById('one').value = " ";
    document.getElementById('two').value = " ";
}
divide.addEventListener('click', division);






// let date = new Date().getDate();
// let month = new Date().getMonth() + 1;
// let year = new Date().getFullYear();

// let fulldate = new Date();

// console.log(fulldate);


// console.log(date);
// console.log(month);
// console.log(year);

// console.log(date + "/" + month + "/" + year);


// function parent() {
//     let first_name = "Jatin";
//     function child() {
//         let last_name = "Dhiman";
//         function old() {
//             let age = 23;
//             function location() {
//                 let address = "Yamuna Nagar";
//                 // console.log(first_name + " " + last_name + "ss age is " + age + " and is from " + address);
//             }
//             location();
//             // console.log(age + " and is from " + address);
//         }
//         old();
//     }
//     child();
// }
// parent();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// cars = ["Supra", "GTR", "BMW", "Audi", "Skyline"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + " is from fruits");

//     let fruit = [];
//     fruit.push(fruits[i]);

//     for (let j = 0; j < fruit.length; j++) {
//         console.log(fruit[j] + " is from fruit");
//     }
// }


// let text = "<ul>";
// fruits.forEach(display);
// text += "</ul>";

// function display(value) {
//     text += "<li>" + value + "</li>";

//     console.log(value);
// }
// result = document.getElementById('result');

// result.innerHTML = text;


// result.innerHTML = fruits.join(" % ");
// result.innerHTML = fruits.concat(cars);
// result.innerHTML = fruits.concat(cars).join(" % ");


// let dateformat = "2023-10-17";

// let revs = date.split("-").reverse().join("-");

// let rev = dateformat.reverse();

// console.log(rev);


// {
//     let arr = [1, 2, 3];

//     if (arr.indexOf(2) !== -1) {
//         console.log('Element found');
//     } else {
//         console.log('Element not found');
//     }
// }

// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//             console.log(max);
//         }
//     }
//     // console.log(max);
//     return max;
// }
// myArrayMax(points);



// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// new_arr = arr.map((x) => x * 2);

// console.log(arr);
// console.log(new_arr);


// const vehicle = {
//     cars: ["Supra", "GTR", "BMW", "Audi", "Skyline"],
//     bikes: ["Yamaha", "Honda", "Suzuki", "TVS", "kawasaki"]
// }

// new_cars = vehicle.cars.map((x) => x + " Top speed 310");

// new_cars = vehicle.cars.map((x) => {

//     car_out = x;

//     let i = 1;
//     new_bikes = vehicle.bikes.map((y) => {
//         bike_out = y;
//         console.log(car_out + " X " + bike_out + " " + i);
//         i++;
//     });

// });



// new_carbikes = vehicle.cars.map((x) => x + arr);

// console.log(new_carbikes);
// console.log(new_cars);
// console.log(new_bikes);



// const person = {
//     frist_name: "Jatin",
//     Last_name: "Dhiman",
//     age: 23,
//     city: "Yamuna Nagar",
//     hobbies: ["swimming", " Vollyball", " E-sports Games"]
// }

// // console.log(person.frist_name +" "+ person.Last_name +" is from "+ person.city +" and age is "+ person.age + " and hobbies are "+ person.hobbies);

// // const choot = new choot();

// // choot.name = "Shivangi";

// // console.log(choot.name+ " mam ko lagi choot aaj vo activa se gir gye apne aap");

// const parent = {
//     first_name: "Jatin",
//     last_name: "Dhiman",
//     child: {
//         first_name: "Bachaa",
//         last_name: "Dhiman",
//         grand_child: {
//             first_name: "Chota Bahcaa",
//             last_name: "Dhiman"
//         }
//     }
// }

// console.log(parent);
// console.log(parent.child);
// console.log(parent["child"]);
// console.log(parent.child["first_name"]);
// console.log(parent.child.grand_child);



// console.log("-------------------------------------------------------------");
// // Class and Encapsulation example
// console.log("Class and Encapsulation example");
// class vehicle {
//     constructor(name, top_speed, horse_power) {
//         this.name = name;
//         this.top_speed = top_speed;
//         this.horse_power = horse_power;
//     }

//     get_details() {
//         console.log("The Name of the vehicle is " + this.name);
//         return (`The Top-speed of the vehicle is ${this.top_speed}`);
//     }

// }
// let bike1 = new vehicle('H2R', '300', '800');
// let bike2 = new vehicle('Supra', '450', '1200');

// console.log(bike1.name);
// console.log(bike2.top_speed);
// console.log(bike1.get_details());
// console.log(bike2.get_details());




// console.log("-------------------------------------------------------------");
// // Abstraction example
// console.log("Abstraction example");
// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function () {

//         return (`First name is: ${firstname} Last name is: ${lastname}`);
//     }

//     this.getDetails_access = function () {
//         return (`First name is: ${firstname}, Last name is: ${lastname}`);
//     }
// }
// let person1 = new person('Jatin', 'Dhiman');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());




// console.log("-------------------------------------------------------------");
// // Inheritance example
// console.log("Inheritance example");
// class person_class {
//     constructor(name) {
//         this.name = name;
//     }
//     get_dislay() {
//         return (`Name of person: ${this.name}`);
//     }
// }

// class student extends person_class {
//     constructor(name, id) {
//         super(name);
//         this.id = id;
//     }
//     get_dislay() {
//         return (`${super.get_dislay()}, Student ID: ${this.id}`);
//     }
// }
// let student1 = new student('Jatin Dhiman', 23);
// console.log(student1.get_dislay());



// console.log("-------------------------------------------------------------");
// // Run-time Polymorphism
// console.log("Run-time Polymorphism");
// class firstClass {
//     add() {
//         console.log("First class Method")
//     }
// }
// class secondClass extends firstClass {
//     add() {
//         console.log("Second class Method");
//     }
// }
// class thirdClass extends secondClass {
//     add() {
//         console.log("Third class Method")
//     }
// }
// let obj = new firstClass();
// let obj2 = new secondClass();
// let obj3 = new thirdClass();
// obj.add();
// obj2.add();
// obj3.add();

// console.log("-------------------------------------------------------------");
// // Compile-time Polymorphism
// console.log("Compile-time Polymorphism");
// class A {
//     area(x, y) {
//         console.log(x * y);
//     }
// }
// class B extends A {
//     area(a, b) {
//         super.area(a, b);
//         console.log('object is from Class B and Area method is from Class A')
//     }
// }
// let ob = new B();
// let output = ob.area(10, 2);





// console.log(typeof (null));

// console.log(0.1 + 0.2 == 0.3);

// let x = 10; console.log(x++); console.log(x);

// let y = 10; console.log(++x); console.log(x)

// let arr = [1, 2, 3]; console.log(arr.splice(1, 1)); console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr1 === arr2);

// let arr3 = [1, 2, 3];
// let arr4 = [...arr1];
// console.log(arr1 == arr2);

// let arr5 = [1, 2, 3];
// let arr6 = arr1;
// console.log(arr1 === arr2);


// let arr = ['a', 'b', 'c'];
// let arr2 = arr;

// arr2.push('d');

// console.log(arr2);
// console.log(arr);


// let arr = ['a', 'b', 'c'];
// let arr2 = [...arr];

// console.log(arr);

// arr2.push('d');

// console.log(arr2);
// console.log(arr);



// let A = [1, 2, 3, 4, 5];

// b = A.map(x => [x * 1]);
// console.log(b);

// c = A.flatMap(x => [x * 1]);
// console.log(c);

// d = A.flatMap(x => [[x * 1]]);
// console.log(d);




// // Object.create() example a
// // simple object with some properties
// const coder = {
//     isStudying: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I in Timesheet?: ${this.isStudying}.`)
//     }
// }
// // Object.create() method
// const me = Object.create(coder);

// // "name" is a property set on "me", but not on "coder"
// me.name = 'Jatin';

// // Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();


// alert('Hello');

let DOB_calculate = document.getElementById('DOB_calculate');
function calculate_DOB() {
    let today = new Date().getFullYear();
    let DOB = document.getElementById('date').value;
    let result = document.getElementById('result_date');
    let year = today - DOB;

    if (true) {
        result.innerText = `Your age is ${year}`;
    }
}
DOB_calculate.addEventListener('click', calculate_DOB);




const E_submit = document.getElementById('E_submit');
function display_event_data() {
    let first_name = document.getElementById('E_F_name').value;
    let last_name = document.getElementById('E_L_name').value;
    let age = document.getElementById('E_age').value;
    let email = document.getElementById('E_email').value;
    let address = document.getElementById('E_address').value;
    let Event_result = document.getElementById('Event_result');


    Event_result.innerHTML = `
            <p>First Name: ${first_name}</p>
            <p>Last Name: ${last_name}</p>
            <p>Age: ${age}</p>
            <p>Email: ${email}</p>
            <p>Address: ${address}</p>
        `;
}

function change_to_uppercase() {
    let first_name = document.getElementById('E_F_name');
    let last_name = document.getElementById('E_L_name');
    let age = document.getElementById('E_age');
    let email = document.getElementById('E_email');
    let address = document.getElementById('E_address');

    first_name.value = first_name.toUpperCase();

    console.log(first_name);


}






function mouse_enter_red() {
    document.querySelector('.red').style.backgroundColor = 'red';
    document.querySelector('.black').style.backgroundColor = '#A7D397';
    document.querySelector('.secondary').style.backgroundColor = '#A7D397';
    document.querySelector('.primary').style.backgroundColor = '#A7D397';
}
function mouse_enter_black() {
    document.querySelector('.black').style.backgroundColor = 'gray';
    document.querySelector('.secondary').style.backgroundColor = '#A7D397';
    document.querySelector('.primary').style.backgroundColor = '#A7D397';

}
function mouse_enter_primary() {
    document.querySelector('.primary').style.backgroundColor = 'blue';
    document.querySelector('.secondary').style.backgroundColor = '#A7D397';
}
function mouse_enter_secondary() {
    document.querySelector('.secondary').style.backgroundColor = 'lightgray';
}


function mouse_exit_red() {
    document.querySelector('.red').style.backgroundColor = 'transparent';
}
function mouse_exit_black() {
    document.querySelector('.black').style.backgroundColor = 'transparent';
}
function mouse_exit_primary() {
    document.querySelector('.primary').style.backgroundColor = 'transparent';
}
function mouse_exit_secondary() {
    document.querySelector('.secondary').style.backgroundColor = 'transparent';
}







function on_change_value() {

    let Car = document.getElementById("car_Change").value;
    const car_display = document.getElementById("car_display");
    car_display.innerHTML = `<p>You Select the : ${Car}</p>`;

}




document.getElementById('grandparent').addEventListener('click', () => {
    console.log("Grandparent div");
}, true);

document.getElementById('parent').addEventListener('click', () => {
    console.log("Parent div");
}, true);

document.getElementById('child').addEventListener('click', () => {
    console.log("Child div");
}, true);







function removeNeg() {
const number = [10, 24, -62, 7, 23, 6, -75, 42, 12, 3, -6, 568, 56, -45, -6, 3, -412, 34, 6, 7, -5, 3, 4, -325, 34, 5];

    const positive_number = rem_neg(number, (x) => x >= 0);
    document.getElementById("pos_number").innerHTML = `All positive Numbers are: ${positive_number}`;
    function rem_neg(number, callback) {
        const myArray = [];
        for (const x of number) {
            if (callback(x)) {
                myArray.push(x);
            }
        }
        return myArray;
    }
}
removeNeg();



function Displayer(some) {
    document.getElementById("pos_number").innerHTML = some;
}

let promise = new Promise(function (Resolve, Reject) {
    const number = [10, 24, -62, 7, 3, -412, 34, 6, 7, -5, 3, 4, -325, 34, 5];
    const Pos_array = [];
    const Neg_array = [];

    for (const x of number) {
        if (x >= 0) {
            Pos_array.push(x);
            Resolve(Pos_array);
            // console.log("Resolve");
        } else {
            Neg_array.push(x);
            Reject(Neg_array);
            // console.log("Reject");
        }
    }
});

promise.then(
    function (value) { Displayer(value); },
    function (error) { Displayer(error); }
);



//return Promise
var alldata = async function () {
    var data = await fetch('https://restcountries.com/v3.1/all')
    var jsondata = await data.json();
    //jsondata has all the Country data
    return jsondata;
}


var displaydata = alldata();
// displaydata has Promise


// var displaycards = document.querySelector('#all_cards')


// displaydata
//     .then(data => {
//         data.forEach(country => {
//             displaycards.insertAdjacentHTML(
//                 'beforeend',
//                 `<div class ="cards">
//                 <div class="flag">
//                 <img src="${country.flags.png}" alt="">
//                 </div>

//                 <div>
//                 <h1>Name : ${country.name.common}</h1>
//                 <p>Code: ${country.cca2}</p>
//                 <p>Capital: ${country.capital}</p>
//                 </div>
//                 </div>
//                 `
//             )
//         });
//     })
//     .catch(err => {
//         console.log('Error in data', err)
//     })




// // with the help of callback 
// createorder(cart, function (orderid) {
//     payment(orderid);
// });  //payment will be called whenever the createorder is called
// // passing function to an another funtion





// // with the help of promises
// let promise = createorder(orderid);
// // promise is an promise-object 
// promise.then(function (orderid) {
//     payment(orderid);
// });
// // attaching function to an promise object



// const GIT_User = "https://api.github.com/users/jatindhiman5053";

// const user = fetch(GIT_User);

// console.log(user);

// user.then(function (data) {
//     console.log(data);
//     console.log(data.body);
//     let udata = data.toString();
//     console.log(udata);
// })

// const add_to_cart = document.querySelectorAll('.add_cart');

// // add_to_cart.addEventListener('click',()=>{

// //     const product_name = document.getElementById('kurta').innerText;

// //     console.log(product_name);
// // })


// add_to_cart.forEach(element => {
//     // const product_name = document.getElementById('').value;
//     console.log(element);
// });





// function addItem(itemName) {
//     cartItems.push(itemName);
//     console.log(itemName + " added to the cart.");
//     console.log("Cart contents: " + cartItems);
// }




let cartItems = [];
const cart = ["Kurta", "Shirt", "T-shirt", "Jean", "Shorts"];
const cart_error = document.getElementById('cart_error');
const promise_cart = document.getElementById('promise_cart');
const cart_payment = document.getElementById('cart_payment');

createorder(cart)
    .then(function (orderid) {
        return orderid;
    })
    .then(function () {
        return addItem(itemName)
    })
    .then(function (itemName) {
        cart_payment.innerText = `${cartItems}`;
    })
    .then(function (orderid) {
        return payment(orderid);
    })
    .then(function (paymentinfo) {
        cart_payment.innerText = `${paymentinfo}`;
    })
    .catch(function (err) {
        cart_error.innerText = `${err.message}`;
    })



function createorder(cart) {
    const pr = new Promise(function (resolve, reject) {

        if (!validatecart(cart)) {
            const err = new Error("Cart is Empty");
            reject(err);
        }

        const orderid = '123456789';
        if (orderid) {
            resolve(orderid);
        }
    });

    return pr;
}



function addItem(itemName) {
    cartItems.push(itemName);
    check_Item(cartItems)
    promise_cart.innerText = `${cartItems}`;
}
function check_Item(cartItems) {
    return cartItems.filter((item, index) => cartItems.indexOf(item) === index);
}
function payment(orderid) {
    return new Promise(function (resolve, reject) {
        if (cartItems != null) {
            resolve("Payment Successfull");
        }
    })
}

function validatecart(cart) {
    return true;
}










fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((res) => {
        let allProducts = res.products;
        return allProducts;
    })
    .then(function (allProducts) {
        allProducts.forEach(item => {
            displayProducts.insertAdjacentHTML(
                'beforeend',
                `<div class ="Product">
                        <div class="productImg">
                        <img src="${item.thumbnail}" alt="">
                        </div>
                    
                        <div class="productInfo">
                        <h1>Name : ${item.title}</h1>
                        <p>Price: $${item.price}</p>
                        <p>Brand: ${item.brand}</p>
                        <p>Category: ${item.category}</p>
                        <button class="add_cart">Add to Cart</button>
                        </div>
                    </div>`
            )
        });
    })
    .catch(err => {
        console.log('Error in data', err);
    })


var displayProducts = document.querySelector('#allProducts');













const productdata = async function () {
    const apidata = await fetch('https://dummyjson.com/products')
    const apijsondata = await apidata.json();
    
    return apijsondata.products;
}

const apidisplaydata = productdata();
const awaitProducts = document.getElementById('awaitProducts');

apidisplaydata
    .then(apidisplaydata => {
        console.log(apidisplaydata);
        apidisplaydata.forEach(item => {
            awaitProducts.insertAdjacentHTML(
                'beforeend',
                `<div class ="Product">
                        <div class="productImg">
                        <img src="${item.thumbnail}" alt="">
                        </div>
                    
                        <div class="productInfo">
                        <h1>Name : ${item.title}</h1>
                        <p>Price: $${item.price}</p>
                        <p>Brand: ${item.brand}</p>
                        <p>Category: ${item.category}</p>
                        <button class="add_cart">Add to Cart</button>
                        </div>
                    </div>`
            )
        });
    })
    .catch(err => {
        console.log('Error in data', err)
    })