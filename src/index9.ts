interface Message {
    name: string,
    greet(word: string): void
    //  display(year:string):void;
}
interface BirthYear {
    year: number
    display(year: number): void;
}
// implemnt is use for inherit 
class object3 implements Message ,BirthYear{
    name: string
    year: number
    age = 23
    constructor(name: string, year: number) {
        this.name = name
        this.year = year
    }
    greet(word: string): void {
        console.log(`${word}`)
    }
    display(year: number): void {
        console.log(year)
    }

}

let ram = new object3('sachin Datir', 1999)
// console.log(ram)
ram.greet('welcome')
ram.display(1630)