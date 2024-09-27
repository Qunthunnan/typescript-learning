let data: unknown;

data = "sfsfsfss";

if (typeof data === "string") {
	console.log(data.toUpperCase());
}

const obj = {
	name: "Kyrylo",
	login: "qunthunnan",
	password: "skfhskfhskhfskhf",
};

const json = JSON.stringify(obj);

const serverData: unknown = JSON.parse(json);

if (typeof serverData === "object" && serverData) {
	console.log(serverData);
}
