const myCar = {
	fuel: "100%",
	open: true,
	freeSeats: 3,
	isOpen() {
		return this.open;
	},
};

function closeCar(car: typeof myCar) {
	car.open = false;
	return car;
}

function addFuel(car: typeof myCar) {
	car.fuel = "150%";
	return car;
}

console.log(addFuel(closeCar(myCar)).isOpen());
