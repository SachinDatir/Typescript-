"use strict";
//  Programme 1
function Add(x, y) {
    console.log(x + y);
}
console.log(Add(23, 45));
//  Programme 2
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName('sachin', 'Datir');
//programme 3
function Add1(x, y) {
    return (x + y);
}
function DisplayResult(x, y, fn) {
    console.log(`result of sum ${fn(x)}`); ///number + undefined ==NaN
}
DisplayResult(12, 34, Add1);
//programme 4
function DisplayResult1(x, y, fn) {
    console.log(`result of sum ${fn(x, y)}`);
}
DisplayResult1(3, 34, Add1);
//programme 5
class student {
    constructor() {
        this.firstName = 'sachin1';
        this.lastName = 'datir1';
    }
}
let std = new student();
console.log(std.firstName, std.lastName);
// program 6  accesss modifier
// public , private , protected , default
class StudentB {
    constructor(name, age) {
        this.age = 10;
        this.firstName = 'SKD';
        this.firstName = name,
            this.age = age;
    }
    //property age and firstName is private and only accesible in class
    // getter method==>to get value....to retrive value
    getName() {
        return this.firstName;
    }
    getage() {
        return this.age;
    }
    // setter
    setName(j) {
        this.firstName = j;
    }
    setage(k) {
        this.age = k;
    }
}
let a22 = new StudentB("Ram", 25);
console.log(a22.getName());
console.log(a22.getage());
a22.setName('sita');
a22.setage(23);
console.log(a22.getName());
console.log(a22.getage());
