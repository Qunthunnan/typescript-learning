interface Curencies {
	dollars: "usd";
	hryvnya: "uah";
	euros: "eur";
	zlotyj: "zl";
}

type Curency = "usd" | "uah" | "eur" | "zl";

type UsdCurecy = Pick<Curencies, "dollars">;
type CurenciesWithoutUsd = Omit<Curencies, "dollars">;
type CurencyWithoutZl = Exclude<Curency, "zl">;

type Players = "Kyrylo" | "Danil" | "Roman" | "Liudmyla";

type PlayerCurencies = Record<Players, Curency>;
