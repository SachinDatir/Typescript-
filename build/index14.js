"use strict";
// GENERICS
let cities = ['sangamner', 'akole', 'nashik', 'pune'];
let RollNo = [12, 45, 64, 32];
console.log(cities[1].toLocaleUpperCase());
console.log(RollNo[0].valueOf());
// console.log(cities)
// promise
// hardcore method 
let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Yes');
    }, 2000);
});
prom.then((res) => {
    console.log(res.startsWith('Y'));
});
// problem  = property fname does not exist on type 'object'
function MERGE1(objOne, objTwo) {
    return Object.assign(objOne, objTwo);
}
let a112 = MERGE1({ fname: 'Pankaj' }, { age: 23 });
// a111.fname   // property fname does not exist on type 'object'
// HARD CODED
function MERGE(objOne, objTwo) {
    return Object.assign(objOne, objTwo);
}
let a111 = MERGE({ fname: 'Pankaj' }, { age: 23 });
a111.fname;
// with our mind we insert any property in object
function Merge(objOne, objTwo) {
    return Object.assign(objOne, objTwo);
}
let a11 = Merge({ Fname: 'sachin Datir', age: 23 }, { id: 1, Firstname: 'pranamya', lastname: 'pangare' });
console.log(a11);
function DescribeLength(element) {
    console.log(element.length);
}
DescribeLength('Minskole');
DescribeLength(['sachin', 'rahul', 'pranamya', 'pankaj', 'sanket']);
function DescribeSize(element) {
    console.log(element.size);
}
DescribeSize(new Map([[12, "typescript"]]));
const a222 = 'Skd';
console.log(a222);
