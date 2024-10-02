interface ICompany {
	name: string;
	debts: number;
}

function printDebts<T, K extends keyof T>(company: T, key: K): void {
	console.log(company[key]);
}

const company: ICompany = {
	name: "Quntsoft",
	debts: 1234141,
};

type CompanyKeys = keyof typeof company;

printDebts(company, "debts");

interface Department {
	name: string;
	budget: number;
}

interface ICompanyWithDepartments extends ICompany {
	departments: Department[];
	owner: {
		name: string;
	};
}

const nameIndex = "name";

type CompanyDebts = ICompany["debts"];
type CompanyOwner = ICompanyWithDepartments["owner"][typeof nameIndex];
type DepartmentBudget =
	ICompanyWithDepartments["departments"][number]["budget"];
type CompanyKeyTypes = ICompanyWithDepartments[keyof ICompanyWithDepartments];

const newCompany: ICompanyWithDepartments = {
	name: "Qunterra",
	debts: 0,
	departments: [
		{
			name: "A1",
			budget: 75000,
		},
		{
			name: "A2",
			budget: 50000,
		},
	],
	owner: {
		name: "Liudmyla",
	},
};
