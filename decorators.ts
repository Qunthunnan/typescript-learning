import "reflect-metadata";

interface IMyCar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

const limitMetadataKey = Symbol("limit");

@closeCar(false)
@addFuel(35) //closeCar(addFuel())
class MyCar implements IMyCar {
	fuel = "50%";
	open = true;
	_weight: number;

	@checkWeightLog
	get weight(): number {
		return this._weight;
	}

	set weight(amount: number) {
		if (amount < 100000 && amount > 800) {
			amount = amount;
		} else {
			console.log("Wrong amount for weight. Max: 100000, Min: 800");
		}
	}
	@checkSeatsCount(4)
	freeSeats: number;

	// @extraIsOpen
	isOpen(): boolean {
		console.log(this.fuel);
		return this.open;
	}

	@validate
	startTravel(@limit passengers: number) {
		console.log(`started with ${passengers} passengers`);
	}
}

function limit(
	target: Object,
	propertyKey: string | symbol,
	parameterIndex: number,
) {
	let limitedParametrs: number[] =
		Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
	limitedParametrs.push(parameterIndex);
	Reflect.defineMetadata(
		limitMetadataKey,
		limitedParametrs,
		target,
		propertyKey,
	);
}

function validate(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor,
) {
	let medthod = descriptor.value;

	descriptor.value = function (...args: any) {
		let limitedParametrs: number[] = Reflect.getOwnMetadata(
			limitMetadataKey,
			target,
			propertyKey,
		);

		if (limitedParametrs) {
			for (let index of limitedParametrs) {
				if (args[index] > 4) throw new Error("Не можна > 4");
			}
		}
		return medthod?.apply(this, args);
	};
}

function checkWeightLog(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	const oldSet = descriptor.set;
	const oldGet = descriptor.get;
	descriptor.set = function (this: any, ...args: any) {
		console.log("Extra set actions...");
		console.log(`Extra set actions with data ${this.open}`);
		return oldSet?.apply(this, args);
	};
	descriptor.get = function (this: any, ...args: any) {
		console.log("Extra get actions...");
		console.log(`Extra get actions with data ${this.open}`);
		return oldGet?.apply(this, args);
	};
}

function checkSeatsCount(limit: number) {
	return function (target: Object, propertyKey: string | symbol) {
		let value: number;

		const getter = function () {
			return value;
		};

		const setter = function (newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) value = newAmount;
			else
				Object.defineProperty(target, "errors", {
					value: "Забагато вільних місць",
				});
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

//v 5.0+
// function extraIsOpen<T, A extends any[], R>(
// 	target: (this: T, ...args: A) => R,
// 	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>,
// ) {
// 	return function (this: T, ...args: A): R {
// 		console.log("Extra actions...");
// 		return target.apply(this, args);
// 	};
// }

// v. older than 5.0
function extraIsOpen(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, args: any[]) {
		console.log("Extra actions...");
		console.log(`Extra actions with data ${this.open}`);
		return oldValue.apply(this, args);
	};
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
myCar.startTravel(4);

console.log(myCar);
