// function Add(x,y){
// if(typeof x=='number'&& typeof y=='number'){
//     console.log(x+y)
// }else{
// console.log('please enter correct input')
// }
// }
// Add(435,6)



// function Add1(x: number, y: number) {
//     console.log(x + y)
// }
// Add1(12, 34)

// void not returning anythin ====> donot use return key word
function Add2(x: number, y: number): void {
    console.log(x + y)
}
let A = Add2(321, 45)
console.log(A)

function Add3(x: number, y: number): string {
    console.log(x + y)
    return 'Done'
}
let A1 = Add3(3, 45)
console.log(A1)

function Add4(x: number, y: number, result: boolean, greet: string): number {
    if (result) {
        console.log(x + y)
        console.log(greet)
    }
    return x + y
}
Add4(22, 45, true, 'hello')



//programme 2
let info: object = {
    firstName: 'sachin',
    lastName: 'datir',
    age: 23
}
console.log(info)

type Cypress = {
    firstname: string,
    lastname: string,
    age: Number
}


let info3: Cypress = {
    firstname: 'sachin',
    lastname: 'datir',
    age: 23
}
console.log(info3)

type skd = {
    firstname: string;
    lastname: string;
    age: number;
    isMarried: boolean
}

let info4: skd = {
    firstname: 'rahul',
    lastname: 'gunjal',
    age: 25,
    isMarried: true
}
console.log(info4)

//program 3 tuple

let number: [x: number, y: number] = [4, 34]
number.push(23)
console.log(number)

let names: [x: string, y: number, z: boolean] = ['sachin', 34, false]
console.log(names)
names.unshift('skd', 45,true)
console.log(names)