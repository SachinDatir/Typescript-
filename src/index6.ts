// we can access parents property in children is called as inheritanse


class Father {
    public firstName: string;
    protected lastName: string;
    private city: string = 'pune'

    constructor(FN: string, LN: string) {
        this.firstName = FN
        this.lastName = LN

    }
    display() {
        console.log(this.firstName + " " + this.lastName, this.city)
    }
    public getCity(): string {
        return this.city
    }
    public setCity(j: string) {
        this.city = j
    }
}

class Son extends Father {
    SonName: string;
    constructor(firstName: string, lastName: string, Sname: string) {
        super(firstName, lastName)
        this.SonName = Sname
    }
    display() {
        console.log(this.SonName + " " + this.lastName)
        super.display()

    }
}

let Skd = new Son('vitthal', 'datir', 'sachin')

console.log(Skd.getCity())
Skd.setCity('sangamner')
console.log(Skd.getCity())
Skd.display()


// private ------>   access within its original class
// public ------->   access in class , in extended class , outside class
// protected ---->   access in class and in extended class