

interface Country {
    readonly name: string
}
interface State extends Country {
    greet(word: string): void;

}

class City implements Country {
   readonly name: string;
    constructor(n: string) {
        this.name = n
    }

    greet(word: string) {
        console.log(word)
    }

}

let city = new City('pune')
// city.name = 'mumbai'
console.log(city.name)



