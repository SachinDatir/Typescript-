"use strict";
let object = {
    Gender: "Male",
    name: 'sachin',
    id: 3,
    species: (word) => {
        console.log(word);
    }
};
object.species('Homo sapiens');
let object1 = {
    name: 'pranamya',
    id: 10,
    Harmone: (word) => {
        console.log(word);
    }
};
object1.Harmone('Testosterone');
// there is no diff between interface and type
// but the only diff is ====>
// in type===>string ,number,boolean
// in interface-->only object
