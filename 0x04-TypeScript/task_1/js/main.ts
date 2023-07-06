interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

type printTeacherFunction = (firstName: string, lastName: string) => string;

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const name = firstName[0] + '. ' + lastName;
	return name;
}

interface studentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements studentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName:string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName
	}
}
