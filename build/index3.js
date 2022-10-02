"use strict";
let nu = [32, 242, 5255555, 5552525, 52525252, 555525];
let marks = ['sachin', 'pankaj', 'pranamya', 'rahul'];
// console.log(nu[0])
// console.log(marks[3])
let obj = {
    firstName: 'sachin',
    lastName: 'datir',
    skills: [10, 'python', true]
};
console.log(obj);
obj.skills[0] = 2;
obj.skills.push('javascript');
let obj1 = {
    firstName: 'Pankaj',
    lastName: 'more',
    skills: [10, true, 'java']
};
console.log(obj1);
//  UNION type   ==>mulitple datatype collection
function Union(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
Union(12, 45);
Union('56', 4);
console.log('************');
function UNION(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
UNION(12, 34);
UNION(true, 23);
UNION('10', true);
let skd = 'SACHIN';
console.log(skd);
let str = 'pranamya';
console.log(str);
let str2 = false;
console.log(str2);
let info1 = {
    firstName: 'sachin',
    lastName: 'pranamya'
};
let skd1 = {
    mother: 'kanta',
    father: 'vitthal'
};
//  Enum ===>
// Enums stands for Enumerations. Enums are a new data type supported in TypeScript.
// It is used to define the set of named constants, i.e., a collection of related values
var mins;
(function (mins) {
    mins[mins["cypress"] = 1] = "cypress";
    mins[mins["accounts"] = 2] = "accounts";
    mins[mins["academy"] = 3] = "academy";
})(mins || (mins = {}));
if (mins.cypress) {
    console.log('testcase');
}
if (mins.accounts, mins.academy) {
    console.log('current and saving', 'mpsc');
}
var games;
(function (games) {
    games[games["cricket"] = 1] = "cricket";
    games[games["football"] = 2] = "football";
    games[games["tennis"] = 3] = "tennis";
})(games || (games = {}));
if (games.cricket) {
    console.log('Rohit', 'virat');
}
if (games.football) {
    console.log('ronaldo', 'neymar', 'messi', 'Mbappe');
}
if (games.tennis) {
    console.log('sania mirza', 'jokovich', 'federar', 'medvedev');
}
var TYPEscript;
(function (TYPEscript) {
    TYPEscript[TYPEscript["sleeping"] = 0] = "sleeping";
    TYPEscript[TYPEscript["wakingUp"] = 1] = "wakingUp";
    TYPEscript[TYPEscript["running"] = 2] = "running";
})(TYPEscript || (TYPEscript = {}));
if (TYPEscript.sleeping) {
    console.log('you need approximately 8 hour sleep');
}
if (TYPEscript.wakingUp) {
    console.log('wakeup early morning');
}
if (TYPEscript.running) {
    console.log('running for healthy life');
}
