// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface StructuredHours {
	total: number;
	inMenu: number;
}

interface PlayerData<GameName, Hours> {
	game: GameName;
	hours: Hours;
	server: string;
}

const player1 = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2 = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3 = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FiguresNames {
	RECT = "rect",
	TRIANGLE = "triangle",
	LINE = "line",
	CIRCLE = "circle",
}

type FigureName = "rect" | "triangle" | "line" | "circle";

interface Figure<Data> {
	name: FigureName;
	data?: Data;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

function calculateAmountOfFigures(
	figures: Figure<{ [key: string]: number }>[],
): AmountOfFigures {
	const amountOfFigures: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	};

	for (let i in figures) {
		switch (figures[i].name) {
			case FiguresNames.CIRCLE: {
				amountOfFigures.circles++;
				break;
			}
			case FiguresNames.LINE: {
				amountOfFigures.others++;
				break;
			}
			case FiguresNames.RECT: {
				amountOfFigures.squares++;
				break;
			}
			case FiguresNames.TRIANGLE: {
				amountOfFigures.triangles++;
				break;
			}
		}
	}

	return amountOfFigures;
}

const data: Figure<{ [key: string]: number }>[] = [
	{
		name: FiguresNames.RECT,
		data: { a: 5, b: 10 },
	},
	{
		name: FiguresNames.RECT,
		data: { a: 6, b: 11 },
	},
	{
		name: FiguresNames.TRIANGLE,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FiguresNames.LINE,
		data: { l: 15 },
	},
	{
		name: FiguresNames.CIRCLE,
		data: { r: 10 },
	},
	{
		name: FiguresNames.CIRCLE,
		data: { r: 5 },
	},
	{
		name: FiguresNames.RECT,
		data: { a: 15, b: 7 },
	},
	{
		name: FiguresNames.TRIANGLE,
	},
];

console.log(calculateAmountOfFigures(data));
