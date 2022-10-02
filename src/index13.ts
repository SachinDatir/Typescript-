//  programme1


class Bikees {
    drive() {
        console.log('i love riding')
    }
    RunBike(speed: number) {
        console.log(speed)
    }
}

class Car {
    drive() {
        console.log('Driving Car')
    }
    CarRacing(speed: string) {
        console.log(speed)
    }

}

type VehicleE = Bikees | Car

let a1 = new Bikees()
let a2 = new Car()

function RideVehicle(Veh: VehicleE) {
    if (Veh instanceof Bikees) {
        Veh.RunBike(100)
    }
    else if (Veh instanceof Car) {
        Veh.CarRacing('120 km/hr')
    }
}
RideVehicle(a1)
RideVehicle(a2)

// programme2
// interface

// interface Humans {
//     type: 'human'
//     runningSpeed: number
// }
// interface Animal {
//     type: 'animal'
//     Runspeed: string
// }

// type Chordata = Humans | Animal

// function Movement(chordata: Chordata) {
//     let speed;
//     switch (chordata.type) {
//         case 'human':
//             speed = chordata.runningSpeed
//             break;
//         case 'animal':
//             speed = chordata.Runspeed
//             break
//         default:
//             console.log('Incorrect')
//     }
//     console.log(speed)

// }
// Movement({ type: 'human', 'runningSpeed': 10 })
// Movement({ type: 'animal', Runspeed: '150 km/hr' })


interface Banglo {
    type: 'banglo'
    bangloSize: string
}
interface Flat {
    type: 'flat'
    flatSize: string
}

type House = Banglo | Flat

function Home(house: House) {
    let size;
    switch (house.type) {
        case 'banglo':
            size = house.bangloSize
            break;
        case 'flat':
            size = house.flatSize
            break
        default:
            console.log('incorrect input')
    }
    console.log(size)
}

Home({ type: 'banglo', 'bangloSize': '2 BHK' })
Home({ type: 'flat', 'flatSize': '3 BHk' })


interface Wine {
    type: 'wine'
    madeFrom: string
}
interface Beer {
    type: 'beer'
    madeUpOf: string

}

type Drinks = Wine | Beer

function Healthy(drink: Drinks) {
    let made;
    switch (drink.type) {
        case 'wine':
            made = drink.madeFrom
            break;
        case 'beer':
            made = drink.madeUpOf
            break
            
            default:
                console.log('incorrect')
    }
    console.log(made)
}
Healthy({type:'beer','madeUpOf':'Barley'})
Healthy({type:'wine','madeFrom':'Grapes'})






let a13 = document.querySelector('p')!
let a14 = <HTMLInputElement>document.querySelector('input')!
 a14.value
let a15 = <HTMLInputElement>document.querySelector('#One')!
a15.value


