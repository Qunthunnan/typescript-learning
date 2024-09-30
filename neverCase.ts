interface Car {
	name: "car";
	wheel: "nice";
}

interface Ship {
	name: "ship";
	oars: "wood";
}

interface Airplane {
	name: "airplane";
	wings: "flat";
}

type Vehicles = Car | Ship | Airplane;

function getVehicleMainPart(vehicle: Vehicles): string {
	switch (vehicle.name) {
		case "car": {
			return `Wheels ${vehicle.wheel}`;
		}
		case "ship": {
			return `Oars: ${vehicle.oars}`;
		}
		case "airplane":
			return `Wings is ${vehicle.wings}`;
		default: {
			const neverValue: never = vehicle;
			throw new Error(`Unknown vehicle ${vehicle}`);
		}
	}
}
