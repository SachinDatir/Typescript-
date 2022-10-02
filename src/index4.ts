//  Programme 1

function Add(x: number, y: number) {
    console.log(x + y)

}
console.log(Add(23, 45))

//  Programme 2
function fullName(firstName: string, lastName: string) {
    console.log(firstName + " " + lastName)
}
fullName('sachin', 'Datir')

//programme 3
function Add1(x: number, y: number) {
    return (x + y)
}

function DisplayResult(x: number, y: number, fn: Function) {
    console.log(`result of sum ${fn(x)}`)  ///number + undefined ==NaN
}
DisplayResult(12, 34, Add1)

//programme 4

function DisplayResult1(x: number, y: number, fn: (x: number, y: number) => number) {
    console.log(`result of sum ${fn(x, y)}`)
}
DisplayResult1(3, 34, Add1)

//programme 5

class student {
    firstName: string = 'sachin1'
    lastName: string = 'datir1'
}
let std = new student()
console.log(std.firstName, std.lastName)

// program 6  accesss modifier
// public , private , protected , default

class StudentB {
    private age: number = 10
    private firstName: string = 'SKD'
    public constructor(name: string, age: number) {
        this.firstName = name,
            this.age = age
    }
    //property age and firstName is private and only accesible in class


    // getter method==>to get value....to retrive value
    public getName(): string {
        return this.firstName
    }
    public getage(): number {
        return this.age
    }
    // setter
    public setName(j: string) {
        this.firstName = j
    }
    public setage(k: number) {
        this.age = k
    }
}
let a22 = new StudentB("Ram", 25);
console.log(a22.getName())
console.log(a22.getage())
a22.setName('sita')
a22.setage(23)
console.log(a22.getName())
console.log(a22.getage())

