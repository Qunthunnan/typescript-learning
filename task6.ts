// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type Animals = "cat" | "dog" | "bird";

interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
	location: string;
	age?: number;
}

interface Animal {
	status: "available";
	data: AnimalData;
}

interface NotFoundAnimal {
	status: "not available";
	data: {
		message: string;
		nextUpdateIn: Date;
	};
}

function checkAnimalData(animal: Animal | NotFoundAnimal): AnimalData | string {
	switch (animal.status) {
		case "available":
			return animal.data;
		case "not available":
			return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
		default: {
			const neverValue: never = animal;
			throw new Error(`Unknown response animal ${animal}`);
		}
	}
}
