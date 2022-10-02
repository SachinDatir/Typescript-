// GENERICS

let cities: Array<string> = ['sangamner', 'akole', 'nashik', 'pune']
let RollNo: Array<number> = [12, 45, 64, 32]
console.log(cities[1].toLocaleUpperCase())
console.log(RollNo[0].valueOf())
// console.log(cities)

// promise


// hardcore method 
let prom = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Yes')
    }, 2000)
})
prom.then((res) => {
    console.log(res.startsWith('Y'))
})


// problem  = property fname does not exist on type 'object'

function MERGE1(objOne: object, objTwo: object) {
    return Object.assign(objOne, objTwo)
}
let a112 = MERGE1({ fname: 'Pankaj' }, { age: 23 })
// a111.fname   // property fname does not exist on type 'object'

// HARD CODED
function MERGE(objOne: { fname: 'Pankaj' }, objTwo: { age: 23 }) {
    return Object.assign(objOne, objTwo)
}
let a111 = MERGE({ fname: 'Pankaj' }, { age: 23 })
a111.fname


// with our mind we insert any property in object
function Merge<T extends Object, U extends Object>(objOne: T, objTwo: U) {
    return Object.assign(objOne, objTwo)

}

let a11 = Merge({ Fname: 'sachin Datir', age: 23 }, { id: 1, Firstname: 'pranamya', lastname: 'pangare' })
console.log(a11)
// console.log(a11.Firstname)
// console.log(a11.id)

interface Lengths {
    length: Number
}
function DescribeLength<T extends Lengths>(element: T) {
    console.log(element.length)
}
DescribeLength('Minskole')
DescribeLength(['sachin', 'rahul', 'pranamya', 'pankaj', 'sanket'])

interface MapAndSet {
    size: Number

}
function DescribeSize<T extends MapAndSet>(element: T) {
    console.log(element.size)

}

DescribeSize(new Map([[12, "typescript"]]))

const a222 = 'Skd'
console.log(a222)

