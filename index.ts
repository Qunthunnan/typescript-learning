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

<<<<<<< HEAD
const message: string | number = 5;
=======
//union

function getNumberOrString(value: string): string | number {
	if (value.length > 3) {
		return 'Більше 3';
	} else return 0;
}

const message: string | number = getNumberOrString('sfsfsf');

function multiAction (data: string | number | number[]): void { 
	if(typeof data === 'string')
		console.log(data.toUpperCase());
	if(typeof data === 'number')
		console.log(data.toExponential());
	if(Array.isArray(data)) {
		console.log(data.reduce((i, k) => i + k), 10);
	}
}

function sameMethods(data: number[] | string): void {
	console.log(data.length);
}

function equalNarrow(first: number | string, second: number | boolean): void {
	if(first === second) {
		console.log(first.toFixed() + second * first);
	}
}

function objectNarrow(data: {system: number} | {user: string} ): void {
	if('system' in data) {
		console.log(data.system.toFixed());
	}

	if('user' in data) {
		console.log(data.user.length);
	}
}

function objectIsInstanceOf(obj: {super: number} | Date) {
	if (obj instanceof Date) {
		console.log(obj.getDate());
	}
}

//literal types, type alias

type Protocol = 'https' | 'http' | 'ftp';
type AnimationFunction = 'ease' | 'ease-out' | 'ease-in';
type ID = number | string;


const protocol: Protocol = 'https';

const getAnimationStyleString = (animName: string, timingFunc: AnimationFunction = 'ease', duration: number, iterCount: number | 'infinite' ): string => {
	return `${animName} ${timingFunc} ${duration} ${iterCount}`;
}
>>>>>>> d7122756929250a1fd6fe2ad8a9e841fc019789e
