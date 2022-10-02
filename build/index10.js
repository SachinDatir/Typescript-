"use strict";
class City {
    constructor(n) {
        this.name = n;
    }
    greet(word) {
        console.log(word);
    }
}
let city = new City('pune');
// city.name = 'mumbai'
console.log(city.name);
