var FormClasses;
(function (FormClasses) {
    FormClasses["MAIN"] = ".main-form";
    FormClasses["EMAIL"] = ".email-form";
})(FormClasses || (FormClasses = {}));
const formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
const emailForm = document.querySelector(FormClasses.MAIN);
const mainForm = document.querySelector(FormClasses.EMAIL);
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
try {
    emailForm.addEventListener("submit", getFormData);
    mainForm.addEventListener("submit", getFormData);
}
catch (error) {
    if (error instanceof Error)
        throw new Error(error.message);
}
function getFormData(event) {
    event.preventDefault();
    const data = {
        ...Object.fromEntries(new FormData(emailForm)),
        ...Object.fromEntries(new FormData(mainForm)),
    };
    if (!data.checkbox)
        data.checkbox = false;
    else
        data.checkbox = true;
    if (isIFormData(data, formData)) {
        formData.title = data.title;
        formData.email = data.email;
        formData.text = data.text;
        formData.checkbox = data.checkbox;
        if (validateFormData(data)) {
            checkFormData(data);
        }
    }
    else {
        throw new Error(`Unknown formData type`);
    }
}
function isIFormData(data, template) {
    return Object.keys(template).every((key) => typeof data[key] === typeof template[key]);
}
function validateFormData(data) {
    let valid = true;
    for (const i of Object.keys(data)) {
        if (!data[i]) {
            valid = false;
        }
    }
    if (!valid)
        alert("Please, complete all fields");
    return valid;
}
function checkFormData(data) {
    const { email } = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.some((item) => item === email)) {
        alert("This email is already exist");
    }
    else {
        alert("Posting data...");
    }
}
export {};
