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

// const message: string | number = 5;
//union

function getNumberOrString(value: string): string | number {
	if (value.length > 3) {
		return "Більше 3";
	} else return 0;
}

const message: string | number = getNumberOrString("sfsfsf");

function multiAction(data: string | number | number[]): void {
	if (typeof data === "string") console.log(data.toUpperCase());
	if (typeof data === "number") console.log(data.toExponential());
	if (Array.isArray(data)) {
		console.log(
			data.reduce((i, k) => i + k),
			10,
		);
	}
}

function sameMethods(data: number[] | string): void {
	console.log(data.length);
}

function equalNarrow(first: number | string, second: number | boolean): void {
	if (first === second) {
		console.log(first.toFixed() + second * first);
	}
}

function objectNarrow(data: { system: number } | { user: string }): void {
	if ("system" in data) {
		console.log(data.system.toFixed());
	}

	if ("user" in data) {
		console.log(data.user.length);
	}
}

function objectIsInstanceOf(obj: { super: number } | Date) {
	if (obj instanceof Date) {
		console.log(obj.getDate());
	}
}

//literal types, type alias

type Protocol = "https" | "http" | "ftp";
type AnimationFunction = "ease" | "ease-out" | "ease-in";
type ID = number | string;

const obj = {
	supers: "sfsfsf",
};

const protocol: Protocol = "https";

type Config = { protocol: Protocol; port: number };

type Role = { role: string };

type ConfigWithRole = Config & Role;

// const getAnimationStyleString = (animName: string, timingFunc: AnimationFunction = 'ease', duration: number, iterCount: number | 'infinite' ): string => {
// 	return `${animName} ${timingFunc} ${duration} ${iterCount}`;
// }

const serverConfig: Config = {
	protocol: "http",
	port: 3004,
};

const addConfig: Config = {
	protocol: "https",
	port: 3343,
};

const userConfig: ConfigWithRole = {
	protocol: "ftp",
	port: 9999,
	role: "user",
};

function startServer({
	protocol,
	port,
}: {
	protocol: Protocol;
	port: number;
}): void {
	console.log(`${protocol.toUpperCase()} server started on ${port} port`);
}

startServer(serverConfig);

const getAnimationStyleString = (
	animName: string,
	timingFunc: AnimationFunction = "ease",
	duration: number,
	iterCount: number | "infinite",
): string => {
	return `${animName} ${timingFunc} ${duration} ${iterCount}`;
};

// const unit = document.querySelector(".a");

interface User {
	readonly login: string;
	password: string;
	age: number;
	addr?: string;
	system: string | undefined;
}

const freezeUser: Readonly<User> = {
	login: "liudmyla",
	password: "sifhihfiwhfiw",
	age: 24,
	addr: "HFkskfi hsifw khwwfsa",
	system: "sjfowww",
};

// freezeUser.password = 'sfsfsfss';

const user: User = {
	login: "qunthunnan",
	password: "Jojfojoj",
	age: 23,
	system: undefined,
};

const dbAdress = "ksfhkshfssff";

function sendData(data: User, dbAdress?: string): void {
	console.log(data, dbAdress!.toLocaleLowerCase());
}

sendData(user, dbAdress);

const basicPorts: readonly number[] = [3000, 3001, 3002];
const basicStr: ReadonlyArray<string> = ["ssfjlf", "sfsfs", "ssss"];

const userReading = {
	water: 3.45,
	electricity: 14.2,
};

function checkReadings(readings: typeof userReading): boolean {
	const systemReadings = {
		water: 3.45,
		electricity: 14.2,
	};

	if (
		readings.electricity === systemReadings.electricity &&
		readings.water === systemReadings.water
	) {
		return true;
	}
	return false;
}

// basicPorts[0] = 225;
// basicPorts.push(223)

const fetchData = (url: string, method: "GET" | "POST"): void => {
	console.log(url, method);
};

const reqOptions = {
	url: "https://google.com",
	method: "GET" as "GET",
};

fetchData(reqOptions.url, reqOptions.method);

const cornerOptions = {
	url: "https://google.com",
	method: "POST",
};

fetchData(cornerOptions.url, <"POST">cornerOptions.method);

interface Project {
	name: string;
	projectBudget: number;
}

interface Department {
	name: string;
	budget: number;
}

const department: Department = {
	name: "qunth",
	budget: 42422424,
};

function transformDepartment(department: Department, budget: number): Project {
	return {
		name: department.name,
		projectBudget: budget,
	};
}

const newProject = transformDepartment(department, 3000);

interface Square {
	side: number;
	area: number;
}

interface Rect {
	a: number;
	b: number;
	area: number;
}

function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;
function calculateArea(a: number, b?: number): Square | Rect {
	if (b) {
		const rect: Rect = {
			a,
			b,
			area: a * b,
		};

		return rect;
	} else {
		const square: Square = {
			side: a,
			area: a * a,
		};

		return square;
	}
}

calculateArea(32);
