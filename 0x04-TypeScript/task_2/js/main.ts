interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks():string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home'
	};

	getTowork(): string {
		return this.getCoffeeBreak();
	};

	workDirectorTasks(): string {
		return 'Getting to director tasks'
	};

	getCoffeeBreak(): string {
		return 'Good Coffee for peak work efficency'
	};
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	};

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	};

	workTeacherTasks(): string {
		return 'Getting to work'
	};
}

const createEmployee = (salary: number | string) => {
	if (typeof salary === 'number' && salary < 500) {
		return (new Teacher());
	} else {
		return (new Director());
	}
}


function isDirector(employee: Director | Teacher) {
	return (employee instanceof Director ? true : false)
}

function executeWork(employee: Director | Teacher) {
	if (employee instanceof Director) {
		return console.log(employee.workDirectorTasks());
	} else {
		return console.log(employee.workTeacherTasks());
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
	if (todayClass === 'Math') {
		return console.log('Teaching Math')
	} else {
		return console.log('Teaching History')
	}
}