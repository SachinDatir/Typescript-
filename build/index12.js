"use strict";
let A11 = {
    name: 'sachin',
    privileges: ['sangamner', 'akole'],
    startDate: new Date()
};
let No = 28;
function ADD1(a, b) {
    if (typeof a === 'string' && typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            if (typeof a === 'string' && typeof b === 'number') {
                return a + b;
            }
        }
    }
}
let q1 = ADD1('sachin', 'datir');
console.log(q1);
let q2 = ADD1(12, 32);
let q3 = ADD1('sachin', 12);
console.log(q3);
let q4 = ADD1(14, 'skd');
console.log(q4);
function PrintInfo(info) {
    if ('party' in info) {
        console.log(info.party);
    }
    else if ('startDate' in info) {
        console.log(info.startDate);
    }
}
PrintInfo({ name: 'ShindeGov', party: ['Shivsena', 'BJP'] });
PrintInfo({ name: 'ThakreGov', startDate: new Date() });
