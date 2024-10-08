interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	errors: any;
	_weight: number = 1000;

	@log
	set weight(num: number) {
		this._weight = this._weight + num;
	}

	get weight() {
		return this._weight;
	}

	@checkNumberOfSeats(4)
	freeSeats: number;

	@checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? "open" : `close ${value}`;
	}
}

function log(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	const oldValue = descriptor.set;
	const oldGet = descriptor.get;
	descriptor.set = function (this: any, ...args: any) {
		console.log(`Изменяем значение на ${[...args]}`);
		return oldValue?.apply(this, args);
	};
	descriptor.get = function () {
		console.log(`Test`);
		return oldGet?.apply(this);
	};
}

function checkNumberOfSeats(limit: number) {
	return function (target: Object, propertyKey: string | symbol) {
		let symbol = Symbol();

		const getter = function (this: any) {
			return this[symbol];
		};

		const setter = function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				this[symbol] = newAmount + 1;
			} else {
				// console.log(`Больше ${limit} сидений быть не может`);
				Object.defineProperty(target, "errors", {
					value: `Больше ${limit} сидений быть не может`,
				});
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

function checkAmountOfFuel(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, ...args: any[]) {
		console.log(this.fuel);
		return oldValue.apply(this, args);
	};
}

function changeDoorStatus(status: boolean) {
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			fuel = `${amount}%`;
		};
	};
}

const car = new myCar();
car.weight = 3;
console.log(car.weight);
// console.log(car.errors);

// f(x(y()));
