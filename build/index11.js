"use strict";
// we cannot use static method and properties inside non-static things with this 
// if you want to call out you can callout with this keyword
// Interface cannot be assign a value , they all are abstract
// Interface is always related with object
// Interface can only have read only property
// Interface can be split
// What are static method and properties
class Student {
    constructor(id, state) {
        this.id = id;
        this.state = state;
        this.year = Student.currentyear;
        // static property access by clsss name only
    }
    static createStudent(name) {
        return { fullname: name };
    }
}
Student.currentyear = 2022;
let sachin = new Student(11, 'maha');
// console.log(sachin)
//in static we dont need to create object
console.log(Student.currentyear);
/// for static =====>Static variables exist within the class context, 
//and are not carried forward to the object of the class
// console.log(sachin.currentyear)
console.log(Student.createStudent('sachin'));
/// singleton pattern 
// return only one object 
class CollegeA {
    constructor(name, dist, taluka) {
        this.name = name;
        this.dist = dist;
        this.taluka = taluka;
        this.name = name;
        this.dist = dist;
        this.taluka = taluka;
    }
    static getInstance() {
        if (CollegeA.instance) {
            return this.instance;
        }
        this.instance = new CollegeA('sahyadri college', 'Anagar', 'sangamner');
        return this.instance;
    }
}
// let clg1 = new CollegeA('agasti college', 'Anagar', 'akole')
// let clg2 = new CollegeA('Amrutahini', 'Ahemadnagar', 'Sangamner')
let v1 = CollegeA.getInstance();
console.log(v1);
let v2 = CollegeA.getInstance();
console.log(v2);
