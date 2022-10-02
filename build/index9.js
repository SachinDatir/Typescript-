"use strict";
// implemnt is use for inherit 
class object3 {
    constructor(name, year) {
        this.age = 23;
        this.name = name;
        this.year = year;
    }
    greet(word) {
        console.log(`${word}`);
    }
    display(year) {
        console.log(year);
    }
}
let ram = new object3('sachin Datir', 1999);
// console.log(ram)
ram.greet('welcome');
ram.display(1630);
