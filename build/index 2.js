"use strict";
// function add(x: number, y: number) {
//     console.log(x + y)
// }
// add(5, 6)
// let info: {
//     firstname: string;
//     lastname: string;
//     age: number
// } = {
//     firstname :'sachin',
//     lastname:'datir',
//     age:12
// }
// // console.log(info)
let info2 = {
    firstname: 'sachin',
    lastname: "datir",
    age: 23
};
// info2.city= 'sangamner'
console.log(info2);
let array = ['sachin', 'pankaj', 'rahul'];
console.log(array.sort());
console.log(array.push('sanket'));
console.log(array.length);
console.log(array.unshift('pranamya'));
function addition(x, y, result, messege) {
    if (result) {
        console.log(x + y);
        console.log(messege);
    }
}
addition(4, 6, true, 'done');
function addition2(x, y, result, messege) {
    if (result) {
        console.log(x + y);
        console.log(messege);
        return x + y;
    }
    else {
        return 0;
    }
}
addition2(3, 6, true, 'add done');
