"use strict";
class Teacher {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log(this.firstName + " " + this.lastName);
    }
}
// class Student extends Teacher {
//     constructor(firstName, lastName, public StdName) {
//         super(firstName, lastName)
//     }
// }
let s = new Teacher('satish', 'phadke');
s.display();
// console.log(s)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(this.firstName + " " + this.lastName);
    }
    //  getName() {
    //     return this.firstName 
    // }
    //  setName (firstName:string,lastName:string) {
    //     this.firstName = firstName
    //      this.lastName = lastName
    // }
    get getName() {
        return this.firstName;
    }
    set setName(firstName) {
        this.firstName = firstName;
    }
}
let ob = new Person('Skd', 'datir');
// ob.displayName()
//// by calling method
// console.log(ob.getName())
// ob.setName('pranamya', 'pangare')
// console.log(ob.getName())
///by retrive property
let OBJ = new Person('Sachin', 'Datir');
console.log(OBJ.getName);
OBJ.setName = 'Pranamya';
console.log(OBJ.getName);
class Vehicle {
    constructor(Name) {
        this.Name = Name;
    }
    display() {
        console.log(this.Name);
    }
    get getName() {
        return this.Name;
    }
    set setName(Name) {
        this.Name = Name;
    }
}
let bike = new Vehicle('Unicorn');
console.log(bike.getName);
bike.setName = 'Belleni';
console.log(bike.getName);
class VehicleA {
    constructor(Name, company) {
        this.Name = Name;
        this.company = company;
    }
    Display() {
        console.log(this.Name + " " + this.company);
    }
}
class Bike extends VehicleA {
    constructor(Name, company, NBike) {
        super(Name, company);
        this.NBike = NBike;
    }
    Display() {
        console.log(this.company + " " + this.NBike);
        // super.Display()
    }
}
let TwoWheeler = new Bike('Unicorn', 'Qianjiang Motorcycle', 'Bellini');
TwoWheeler.Display();
//  Abstract
class RBI {
    country() {
        console.log('INIDA');
    }
}
class ICICI extends RBI {
    loan(interest) {
        console.log(`Hii i am ICICI our interest on loan is ${interest} %`);
    }
    save(interest) {
        console.log(`Hii i am ICICI our interest on save is ${interest} %`);
    }
}
class SBI extends RBI {
    loan(interest) {
        console.log(`Hii i am SBI our interest on loan is ${interest} %`);
    }
    save(interest) {
        console.log(`Hii i am SBI our interest on save is ${interest} %`);
    }
}
let sbi = new ICICI();
sbi.loan(5);
sbi.save(8);
/// We canot create object of abstract class
// if abstract class is having abstract methods , those who inherit abstract class need to
// give definition for methods
// abstract class can have abstract and and non abstract method
