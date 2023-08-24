const fs = require('fs');

const countStudents = (path) => {
  // Read the file

  let file;

  try {
    file = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = file.toString().split('\n');
  console.log(`Number of students: ${students.length - 1}`);

  // for each students, collect field and add to list

  const fieldList = students.map((item) => {
    const studentFields = item.toString().split(',');
    return studentFields[studentFields.length - 1];
  });

  const fieldSet = new Set(fieldList);
  fieldSet.delete('field');
  console.log(fieldSet);

  // for each set, filter out the students then its firstname
  //

  for (const field of fieldSet) {
    const fieldStudents = students.filter((student) => {
      const splitStudent = student.toString().split(',');
      return splitStudent[3] === field;
    });

    const fieldFirstNames = fieldStudents.map((student) => {
      const splitStudent = student.toString().split(',');
      return splitStudent[0];
    });

    console.log(`Number of students in ${field}: ${fieldFirstNames.length}. List: ${fieldFirstNames.join(', ')}`);
  }
};

module.exports = countStudents;
