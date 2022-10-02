//  INTERFACE
interface Human {
    Gender: string;
    name: string
    id: number;
    species(word: string): void
}


let object: Human = {
    Gender: "Male",
    name: 'sachin',
    id: 3,
    species: (word: string) => {
        console.log(word)
    }
};
object.species('Homo sapiens')


// TYPE
type Male = {
    name: string
    id: number
    Harmone(word: string): void
}

let object1: Male = {
    name: 'pranamya',
    id: 10,
    Harmone: (word: string) => {
        console.log(word)
    }
}
object1.Harmone('Testosterone')























// there is no diff between interface and type
// but the only diff is ====>
// in type===>string ,number,boolean
// in interface-->only object
