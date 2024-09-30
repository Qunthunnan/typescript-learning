function processingData<T>(data: T): T {
	return data;
}

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
