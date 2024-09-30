interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

enum FormClasses {
	MAIN = ".main-form",
	EMAIL = ".email-form",
}

const formData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

const emailForm = document.querySelector(FormClasses.MAIN) as HTMLFormElement;
const mainForm = document.querySelector(FormClasses.EMAIL) as HTMLFormElement;

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

try {
	emailForm.addEventListener("submit", getFormData);
	mainForm.addEventListener("submit", getFormData);
} catch (error) {
	if (error instanceof Error) throw new Error(error.message);
}

function getFormData(event: SubmitEvent): void {
	event.preventDefault();

	const data: {
		[x: string]: FormDataEntryValue | boolean;
	} = {
		...Object.fromEntries(new FormData(emailForm)),
		...Object.fromEntries(new FormData(mainForm)),
	};

	if (!data.checkbox) data.checkbox = false;
	else data.checkbox = true;

	if (isIFormData(data, formData)) {
		formData.title = data.title;
		formData.email = data.email;
		formData.text = data.text;
		formData.checkbox = data.checkbox;

		if (validateFormData(data)) {
			checkFormData(data);
		}
	} else {
		throw new Error(`Unknown formData type`);
	}
}

function isIFormData(data: any, template: IFormData): data is IFormData {
	return Object.keys(template).every(
		(key) => typeof data[key] === typeof (template as any)[key],
	);
}

function validateFormData(data: IFormData): boolean {
	let valid = true;
	for (const i of Object.keys(data) as (keyof IFormData)[]) {
		if (!data[i]) {
			valid = false;
		}
	}

	if (!valid) alert("Please, complete all fields");
	return valid;
}

function checkFormData(data: IFormData) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	if (emails.some((item) => item === email)) {
		alert("This email is already exist");
	} else {
		alert("Posting data...");
	}
}
