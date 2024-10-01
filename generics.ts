// function processingData<T>(data: T): T {
// 	return data;
// }

let res1 = processingData(1);
let res2 = processingData("1");

const num = 10;

const res3 = processingData<number>(10);

// interface PrintUK {
//     design: number
// }

// interface PrintES {
//     design: string
// }

interface GeneralPrint<T> {
	design: T;
}

const esPrint: GeneralPrint<string> = {
	design: "ten",
};

const ukPrint: GeneralPrint<number> = {
	design: 10,
};

function processingData<T>(data: T): T | string | number {
	switch (typeof data) {
		case "string":
			return "String data";
		case "number":
			return 45;
		default:
			return data;
	}
}

function getLastValue<T>(data: T[]): T {
	return data[data.length - 1];
}

function processing<T>(data: T): T {
	return data;
}

interface IProcessingFn {
	<T>(data: T): T;
}

const newFunc: IProcessingFn = processing;

interface DataSaver {
	processing: IProcessingFn;
}

const saver: DataSaver = {
	processing: processing,
};

type OrNull<T> = T | null;
type TypeOrArray<T> = T | T[];

interface ParentsData {
	mother: string | null;
	father: string | null;
}

interface User<ParentsExtra extends ParentsData> {
	name: string;
	age: number;
	parents: ParentsExtra;
}

const user: User<{ sister: string | null } & ParentsData> = {
	name: "Mykola",
	age: 19,
	parents: {
		mother: "Liudmyla",
		father: "Kyrylo",
		sister: "Marichka",
	},
};
