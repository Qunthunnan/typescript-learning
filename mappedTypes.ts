interface Curencies {
	dollars: "usd";
	hryvnya: "uah";
	euros: "eur";
	zlotyj: "zl";
}

type CustomCurencies<T> = {
	[key in keyof T]: string;
};

const customCurencies: CustomCurencies<Curencies> = {
	dollars: "$",
	hryvnya: "₴",
	euros: "€",
	zlotyj: "zlotyj",
};

interface PartialCurencies {
	dollars?: "usd";
	hryvnya?: "uah";
	readonly euros?: "eur";
	readonly zlotyj?: "zl";
}

type StrongFreeNumericCurencies<T> = {
	-readonly [key in keyof T]-?: number;
};

const strongCurencies: StrongFreeNumericCurencies<PartialCurencies> = {
	dollars: 0,
	hryvnya: 2,
	euros: 4,
	zlotyj: 5,
};

strongCurencies.euros = 6;

type Anim = "ease" | "fade";
type AnimDirections = "out" | "in";
type Anims = `${Anim}-${AnimDirections}`;

type Values = "max" | "min";
type UpperValues = Uppercase<Values>;

type CustomKeysCurrencies<T> = {
	[key in keyof T as `custom${Anim}${key & string}`]: T[key];
};

const cccc: CustomKeysCurrencies<Curencies> = {
	customeasedollars: "usd",
	customeaseeuros: "eur",
	customeasehryvnya: "uah",
	customeasezlotyj: "zl",
	customfadedollars: "usd",
	customfadeeuros: "eur",
	customfadehryvnya: "uah",
	customfadezlotyj: "zl",
};
