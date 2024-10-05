interface State {
	data: {
		name: string;
	};
	tag?: string;
	index: number;
}

function setData(state: Readonly<State>): void {
	state.data.name = "No deep readonly";
}

const requiredState: Required<State> = {
	data: {
		name: "Sun",
	},
	tag: "required",
	index: 0,
};

const partialState: Partial<State> = {
	data: {
		name: "Earth",
	},
};
