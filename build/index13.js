"use strict";
//  programme1
class Bikees {
    drive() {
        console.log('i love riding');
    }
    RunBike(speed) {
        console.log(speed);
    }
}
class Car {
    drive() {
        console.log('Driving Car');
    }
    CarRacing(speed) {
        console.log(speed);
    }
}
let a1 = new Bikees();
let a2 = new Car();
function RideVehicle(Veh) {
    if (Veh instanceof Bikees) {
        Veh.RunBike(100);
    }
    else if (Veh instanceof Car) {
        Veh.CarRacing('120 km/hr');
    }
}
RideVehicle(a1);
RideVehicle(a2);
function Home(house) {
    let size;
    switch (house.type) {
        case 'banglo':
            size = house.bangloSize;
            break;
        case 'flat':
            size = house.flatSize;
            break;
        default:
            console.log('incorrect input');
    }
    console.log(size);
}
Home({ type: 'banglo', 'bangloSize': '2 BHK' });
Home({ type: 'flat', 'flatSize': '3 BHk' });
function Healthy(drink) {
    let made;
    switch (drink.type) {
        case 'wine':
            made = drink.madeFrom;
            break;
        case 'beer':
            made = drink.madeUpOf;
            break;
        default:
            console.log('incorrect');
    }
    console.log(made);
}
Healthy({ type: 'beer', 'madeUpOf': 'Barley' });
Healthy({ type: 'wine', 'madeFrom': 'Grapes' });
let a13 = document.querySelector('p');
let a14 = document.querySelector('input');
a14.value;
let a15 = document.querySelector('#One');
a15.value;
