const userName: string = "Kyrylo";
let age: number = 23;
const isBirthday: boolean = true;

const userData = {
	userName: "Kyrylo",
	age: 23,
	isBirthday: true,
	messages: {
		gretengs: "Прив",
		atack: "АААААА",
		parting: "Sayonara, mthfck",
	},
};

const userDataTuple: [boolean, number, string] = [true, 40, "John"];
const tuppleSpreadDemo: [...boolean[], number, string] = [
	true,
	true,
	false,
	123,
	"Vasyl",
];
const tuppleSpreadDemo2: [boolean, ...number[], string] = [
	false,
	12441,
	12,
	2344,
	"Kyrylo",
];

function getPartingMessage({
	userName,
	age,
	messages: { parting },
}: {
	userName: string;
	age: number;
	messages: {
		parting: string;
	};
}): string {
	return `${userName}, ${age}, wants to say something in parting: ${parting}`;
}

function congratulationMessage(
	isBirthday: boolean,
	userName: string,
	age: number,
): void {
	if (isBirthday) {
		console.log(
			`Вітаю, ${userName.toUpperCase()}, сьогодні тобі ${++age}!`,
		);
	}
}

const getCongratulationMessage = (
	isBirthday: boolean,
	userName: string,
	age: number,
): string => {
	if (isBirthday)
		return `Вітаю, ${userName.toUpperCase()}, сьогодні тобі ${++age}!`;
	else return `Тобі ${age} років`;
};

congratulationMessage(isBirthday, userName, age);

const strArray: string[] = ["Перший", "Другий", "Третій"];
const numMatrix: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
];
