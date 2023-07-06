const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
const cTeacher: Subjects.Teacher= {
	experienceTeachingC: 10,
	firstName: 'John',
	lastName:'Bobby',
}

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export {cpp, react, java, cTeacher};