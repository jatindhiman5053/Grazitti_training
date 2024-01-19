// Factory Method Pattern
function developer(name) {
    this.name = name;
    this.type = "Developer"
}
function tester(name) {
    this.name = name;
    this.type = "Tester"
}
function EmplayeeFactory(name) {
    this.name = name;
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new developer(name)
                break;
            case 2:
                return new tester(name)
                break;

        }
    }
}
function display() {
    console.log(`Hii i am ${this.name} and type is ${this.type}`);
}
const empfact = new EmplayeeFactory();
const employees = [];
employees.push(empfact.create("Jatin", 1));
employees.push(empfact.create("Rahul", 2));
employees.forEach(emp => {
    display.call(emp)
})


//Singleton Pattern
function process(state) {
    this.state = state;
}
const Singleton = (function () {
    function PM() {
        this.numP = 0;
    }

    let pManager;
    function CPM() {
        pManager = new PM()
        return pManager;
    }
    return {
        getPM: () => {
            if (!pManager)
                pManager = CPM()
            return pManager
        }
    }
})()
const PManager = Singleton.getPM();
const PManager2 = Singleton.getPM();
console.log(PManager === PManager2);






// functional Programming
const obj = { a: 2, b: 5 };
const newObj = Object.assign({}, obj);
newObj.a = 3;
console.log(newObj);
console.log(obj);


const arr = [1, 2, "3", "4", 5, 6, "7", 8, "9"];
const arrAsNumbers = arr.map(function (el) {
    return Number(el);
});
function even(el) {
    return el % 2 === 0;
}
const filteredArr = arrAsNumbers.filter(function (el) {
    return even(el);
});
console.log("Using multiple functions "+ filteredArr);



const arr1 = [1, 2, "3", "4", 5, 6, "7", 8, "9"];
function even1(el) {
    return el % 2 === 0;
}
const filteredArr1 = R.filter(even1, R.map(Number, arr1));
console.log("Using different method "+ filteredArr1); 

