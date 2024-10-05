interface IForm {
	login: string;
	password: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

interface ValidationResult {
	isValid: boolean;
	errorMsg: string;
}

// type ValidationData = Record<keyof IForm, ValidationResult>;

type ValidationData = {
	[key in keyof IForm]:
		| { isValid: false; errorMsg: string }
		| { isValid: true };
};

const validationData: ValidationData = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};
