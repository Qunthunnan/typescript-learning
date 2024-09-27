enum Directions {
	LEFT = "left",
	RIGHT = "right",
	TOP = "top",
	BOTTOM = "bottom",
}

enum AnimFunctions {
	EASE = "ease",
	LINEAR = "linear",
	EASEIN = "ease-in",
	EASEOUT = "ease-out",
	EASEINOUT = "ease-in-out",
}

function animate(direction: Directions, animFunction: AnimFunctions): void {
	switch (direction) {
		case Directions.BOTTOM: {
			console.log(direction, animFunction);
			break;
		}
		case Directions.LEFT: {
			console.log(direction, animFunction);
			break;
		}
		case Directions.TOP: {
			console.log(direction, animFunction);
			break;
		}
		case Directions.RIGHT: {
			console.log(direction, animFunction);
			break;
		}
	}
}

animate(Directions.BOTTOM, AnimFunctions.EASEINOUT);
