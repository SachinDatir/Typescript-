
// class is a user define datatype 

class college {
    public readonly country = 'russia'
    public fullName: string;
    private student:string[]= []
    constructor(n: string) {
        this.fullName = n
        
    }

    /// ekhad function class madhe call kel tr te method houn jate
    describe() {
        console.log(`college:${this.fullName}`)
    }
    addStudent(studentName:string) {
        this.student.push(studentName)
    }

    information() {
        console.log(this.student.length)
    }

    // public getName(S:string){
    //    return this.student = S
    // }
    
}

// Private method canot access outside the class
// use getter and setter method for access private outside the class
 let clg = new college('Amrutvahini')
clg.addStudent('sachin')
clg.addStudent('pranamya')
clg.describe()
clg.information()

clg.fullName ='sachin'
// clg.country = 'India'

let cl2= {
    fullName:'akole college',
     describe:clg.describe
}
//console.log(cl2)
cl2.describe()