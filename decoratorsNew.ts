// interface IMyCar {
// 	fuel: string;
// 	open: boolean;
// 	freeSeats: number;
// }

// @closeCar(false)
// @addFuel(35) //closeCar(addFuel())
// class MyCar implements IMyCar {
// 	fuel = "50%";
// 	open = true;
// 	@checkSeatsCount(4)
// 	freeSeats: number = 1;

// 	_weight: number;

// 	@checkWeightLogGet
// 	get weight(): number {
// 		return this._weight;
// 	}
// 	@checkWeightLogSet
// 	set weight(amount: number) {
// 		if (amount < 100000 && amount > 800) {
// 			this._weight = amount;
// 		} else {
// 			console.log("Wrong amount for weight. Max: 100000, Min: 800");
// 		}
// 	}

// 	@extraIsOpen
// 	isOpen(): boolean {
// 		console.log(this.fuel);
// 		return this.open;
// 	}
// }

// function checkWeightLogGet(
// 	target: () => number,
// 	context: ClassGetterDecoratorContext,
// ) {
// 	return function (this: any, ...args: any) {
// 		console.log("Extra get actions...");
// 		console.log(`Extra get actions with data ${this.open}`);
// 		return target.apply(this, args);
// 	};
// }

// function checkWeightLogSet(
// 	target: (value: number) => void,
// 	context: ClassSetterDecoratorContext,
// ) {
// 	return function (this: any, ...args: any) {
// 		console.log("Extra set actions...");
// 		console.log(`Extra set actions with data ${this.open}`);
// 		return target.apply(this, args);
// 	};
// }

// //5.0+
// function checkSeatsCount(limit: number) {
// 	return function (target: undefined, context: ClassFieldDecoratorContext) {
// 		return function (this: any, newAmount: number) {
// 			if (newAmount >= 1 && newAmount < limit) return newAmount;
// 			else throw new Error("Забагато вільних місць");
// 		};
// 	};
// }

// //v 5.0+
// function extraIsOpen<T, A extends any[], R>(
// 	target: (this: T, ...args: A) => R,
// 	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>,
// ) {
// 	return function (this: T, ...args: A): R {
// 		console.log("Extra actions...");
// 		return target.apply(this, args);
// 	};
// }

// // v. older than 5.0
// // function extraIsOpen(
// // 	target: Object,
// // 	propertyKey: string | symbol,
// // 	descriptor: PropertyDescriptor,
// // ): PropertyDescriptor | void {
// // 	const oldValue = descriptor.value;
// // 	descriptor.value = function (this: any, args: any[]) {
// // 		console.log("Extra actions...");
// // 		console.log(`Extra actions with data ${this.open}`);
// // 		return oldValue.apply(this, args);
// // 	};
// // }

// function closeCar(arg: boolean) {
// 	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
// 		console.log("closeCar");
// 		return class extends constructor {
// 			open = arg;
// 		};
// 	};
// }

// // function closeCar(constructor: Function) {
// // 	constructor.prototype.open = false;
// // }

// // function closeCar<T extends { new (...arg: any[]): {} }>(constructor: T) {
// // 	return class extends constructor {
// // 		open = false;
// // 	};
// // }

// function addFuel(fuel: number) {
// 	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
// 		console.log("addFuel");
// 		return class extends constructor {
// 			fuel = `${fuel}%`;
// 		};
// 	};
// }

// const myCar = new MyCar();

// console.log(myCar.weight);
// myCar.weight = 1000;
// console.log(myCar);
