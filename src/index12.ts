type teacher = {
    name: String,
    privileges: string[]

}
type Student1 = {
    name: string,
    startDate: Date
}

type College = teacher & Student1
let A11: College = {
    name: 'sachin',
    privileges: ['sangamner', 'akole'],
    startDate: new Date()
}
// console.log(A11)

// programme2
type ts = string | number
type ts1 = boolean | number
type stateNo = ts & ts1
let No: stateNo = 28
// console.log(No)

//programme 3
// Type guard
function ADD1(a: number, b: number): number
function ADD1(a: string, b: number): string
function ADD1(a: number, b: string): string
function ADD1(a: string, b: string): string  

function ADD1(a: ts, b: ts) {
    if (typeof a === 'string' && typeof b === "string") {
        return a.toString() + b.toString()
    }
    else {
        if (typeof a === "number" && typeof b === "number") {
            return a + b
        }
        else {
            if (typeof a === 'string' && typeof b === 'number') {
                return a + b
            }
        }

    }
} 
let q1 = ADD1('sachin', 'datir')
console.log(q1)
let q2 = ADD1(12, 32)
let q3 = ADD1('sachin', 12)
console.log(q3)
let q4 = ADD1(14, 'skd')
console.log(q4)


type UnionGov = {
    name: string
    party: string[]
}
type StateGov = {
    name: string
    startDate: Date
}

type Party = UnionGov | StateGov

function PrintInfo(info: Party) {
    if ('party' in info) {
        console.log(info.party)
    }
    else if ('startDate' in info) {
        console.log(info.startDate)
    }
}

PrintInfo({ name: 'ShindeGov', party: ['Shivsena', 'BJP'] })
PrintInfo({ name: 'ThakreGov', startDate:new Date()})




