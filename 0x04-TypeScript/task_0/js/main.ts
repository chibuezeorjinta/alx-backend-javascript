interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'chibueze',
	lastName: 'orjinta',
	age: 22,
	location: 'thinkers corner',
};

const student2: Student = {
	firstName: 'obi',
	lastName: 'okpa',
	age: 3020,
	location: 'Under-world',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

const fNameRow = document.createElement('td');
fNameRow.textContent = 'First Name';

const locRow = document.createElement('td');
locRow.textContent = 'Location';

const headRow = document.createElement('tr');
headRow.appendChild(fNameRow);
headRow.appendChild(locRow);

const thead = document.createElement('thead');
thead.appendChild(headRow);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {	
	const row = document.createElement('tr');
	const fName = document.createElement('td');
	const Loc = document.createElement('td');

	fName.textContent = student.firstName;
	row.appendChild(fName);

	Loc.textContent = student.location;
	row.appendChild(Loc);

	tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);