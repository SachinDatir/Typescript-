"use strict";
// we can access parents property in children is called as inheritanse
class Father {
    constructor(FN, LN) {
        this.city = 'pune';
        this.firstName = FN;
        this.lastName = LN;
    }
    display() {
        console.log(this.firstName + " " + this.lastName, this.city);
    }
    getCity() {
        return this.city;
    }
    setCity(j) {
        this.city = j;
    }
}
class Son extends Father {
    constructor(firstName, lastName, Sname) {
        super(firstName, lastName);
        this.SonName = Sname;
    }
    display() {
        console.log(this.SonName + " " + this.lastName);
        super.display();
    }
}
let Skd = new Son('vitthal', 'datir', 'sachin');
console.log(Skd.getCity());
Skd.setCity('sangamner');
console.log(Skd.getCity());
Skd.display();
// private ------>   access within its original class
// public ------->   access in class , in extended class , outside class
// protected ---->   access in class and in extended class
