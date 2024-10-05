interface IMyCar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@closeCar(false)
@addFuel(35) //closeCar(addFuel())
class MyCar implements IMyCar {
	fuel = "50%";
	open = true;
	freeSeats: number;

	@extraIsOpen
	isOpen ():boolean {
		console.log(this.fuel);
		return this.open;
	}
}

function extraIsOpen(
	target: Object,
	propertyKey: string | symbol, 
	descriptor: PropertyDescriptor
) {
	const oldValue = descriptor.value;
	descriptor.value = () => {
		console.log('Extra actions...');
		oldValue();
	}
}

function closeCar(arg: boolean) {
	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
		console.log("closeCar");
		return class extends constructor {
			open = arg;
		};
	};
}

// function closeCar(constructor: Function) {
// 	constructor.prototype.open = false;
// }

// function closeCar<T extends { new (...arg: any[]): {} }>(constructor: T) {
// 	return class extends constructor {
// 		open = false;
// 	};
// }

function addFuel(fuel: number) {
	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
		console.log("addFuel");
		return class extends constructor {
			fuel = `${fuel}%`;
		};
	};
}

const myCar = new MyCar();

console.log(myCar.isOpen());
