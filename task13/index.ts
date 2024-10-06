interface ICuboid {
	width: number;
	length: number;
	height: number;
	calcArea: (multiply?: number) => number;
	calcVolume: (multiply?: number) => number;
}
@addCreationDate
class ShippingContainer implements ICuboid {
	// @IsInt
	// @Min(1)
	width: number;

	// @IsInt
	// @Min(1)
	length: number;

	// @IsInt
	// @Min(1)
	// @Max(8)
	height: number;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
	}

	@addCalculationDate
	calcArea(multiply?: number): number {
		return this.width * this.length * (multiply ? multiply : 1);
	}

	@addCalculationDate
	calcVolume(multiply?: number) {
		return (
			this.width * this.length * this.height * (multiply ? multiply : 1)
		);
	}
}
function addCreationDate<T extends { new (...arg: any[]): {} }>(
	constructor: T,
) {
	return class extends constructor {
		createdAt = new Date();
	};
}

function IsInt(target: Object, propertyKey: string | symbol) {
	let value: number;

	const setter = function (number: number) {
		if (Number.isInteger(number)) value = number;
		else throw new Error("Number is not integer");
	};

	Object.defineProperty(target, propertyKey, {
		set: setter,
	});
}

function Min(min: number) {
	return function (target: Object, propertyKey: string | symbol) {
		let value: number;

		const setter = function (number: number) {
			if (number >= min) value = number;
			else throw new Error(`Number ${number} is less than Min: ${min}`);
		};

		Object.defineProperty(target, propertyKey, {
			set: setter,
		});
	};
}

function Max(max: number) {
	return function (target: Object, propertyKey: string | symbol) {
		let value: number;

		const setter = function (number: number) {
			if (number <= max) value = number;
			else throw new Error(`Number ${number} is more than Max: ${max}`);
		};

		Object.defineProperty(target, propertyKey, {
			set: setter,
		});
	};
}

function addCalculationDate(
	target: Object,
	propertyKey: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, args: any[]) {
		// if ("lastCalculation" in this) this.lastCalculation = new Date();
		// else
		// 	Object.defineProperty(target, "lastCalculation", {
		// 		value: new Date(),
		// 		enumerable: true,
		// 		writable: true,
		// 	});

		this.lastCalculation = new Date();

		return oldValue.apply(this, args);
	};
}

// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра

// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число

// 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// ИЛИ менять содержимое свойства самого класса lastCalculation
// Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

const container = new ShippingContainer(10, 100, 10);
container.width = 0;
container.height = 5;
console.log(container.calcVolume());
console.log(container.calcArea());
console.log(container);
