interface Ship {
    engine: string,
    sail: string
}

interface Car {
    engine: string,
    wheels: string
}

function isCar(car: Car | Ship): car is Car {
    return 'wheels' in car;
}

function isShip(ship: Car | Ship): ship is Ship {
    return 'sail' in ship;
}

function repairVehicle(vehicle: Car | Ship) {
    if(isCar(vehicle)) {
        console.log(`repaired ${vehicle.wheels}`);
    } else if(isShip(vehicle)) {
        console.log(`repaired ${vehicle.sail}`);
    } else {
        vehicle
    }
}