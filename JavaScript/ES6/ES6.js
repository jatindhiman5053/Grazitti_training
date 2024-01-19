// const Config = {
//     start: () => console.log('App has started'),
//     update: () => console.log('App has updated'),
//     // name : "Robert",
// }


// Object.freeze(Config);

// Config.start(); // "App has started"
// Config.update(); // "App has updated"

// Config.name = "Robert" // We try to add a new key
// console.log(Config); // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

class Alien {
    constructor(name, phrase) {

        this.name = name
        this.phrase = phrase
        this.species = "alien"

    }
    
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"