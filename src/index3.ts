let nu: number[] = [32, 242, 5255555, 5552525, 52525252, 555525]
let marks: string[] = ['sachin', 'pankaj', 'pranamya', 'rahul']
// console.log(nu[0])
// console.log(marks[3])

let obj: {
    firstName: string;
    lastName: string;
    skills: [number, string, boolean]
} = {
    firstName: 'sachin',
    lastName: 'datir',
    skills: [10, 'python', true]
}
console.log(obj)
obj.skills[0] = 2
obj.skills.push('javascript')


let obj1: {
    firstName: string,
    lastName: string,
    skills: [number, boolean, string]
} = {
    firstName: 'Pankaj',
    lastName: 'more',
    skills: [10, true, 'java']
}
console.log(obj1)
//  UNION type   ==>mulitple datatype collection

function Union(x: number | string, y: number | string) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y)
    }
    else {
        console.log(Number(x) + Number(y))
    }

}
Union(12, 45)
Union('56', 4)
console.log('************')
function UNION(x: Number | string | Boolean, y: Number | string | Boolean) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y)
    }
    else {
        console.log(Number(x) + Number(y))
    }
}
UNION(12, 34)
UNION(true, 23)
UNION('10', true)


// datatype mention and then call 
type minskole = Number | String | Boolean

let skd: minskole = 'SACHIN'
console.log(skd)

type typescript = string | Number | Boolean

let str: typescript = 'pranamya'
console.log(str)
let str2: typescript = false
console.log(str2)


//  literal  ==> fix no of datatype collection

type lastName = 'datir' | 'pangare'
type firstName = 'sachin' | 'pranamya'

let info1: {
    firstName: string
    lastName: string
} = {
    firstName: 'sachin',
    lastName: 'pranamya'
}

type parents = { mother: string, father: string }
let skd1: parents = {
    mother: 'kanta',
    father: 'vitthal'
}

//  Enum ===>
// Enums stands for Enumerations. Enums are a new data type supported in TypeScript.
// It is used to define the set of named constants, i.e., a collection of related values
enum mins {
    'cypress' = 1,
    'accounts',
    'academy'
}

if (mins.cypress) {
    console.log('testcase')
}

if (mins.accounts, mins.academy) {
    console.log('current and saving', 'mpsc')
}

enum games {
    'cricket' = 1,
    'football',
    'tennis'

}
if (games.cricket) {
    console.log('Rohit', 'virat')
}

if (games.football) {
    console.log('ronaldo', 'neymar', 'messi', 'Mbappe')
}

if (games.tennis) {
    console.log('sania mirza', 'jokovich', 'federar', 'medvedev')
}




enum TYPEscript {
    'sleeping',
    'wakingUp',
    'running',
}

if (TYPEscript.sleeping){
    console.log('you need approximately 8 hour sleep')
}
 if(TYPEscript.wakingUp){
    console.log('wakeup early morning')
}
if(TYPEscript.running){
    console.log('running for healthy life')
}
