const updateStudentGradeByCity = (objList, city, newGrades) => {
  const studentsInCity = objList.filter((obj) => obj.location === city);
  const gradedStudents = studentsInCity.map((student) => {
    const out = newGrades.find((item) => student.id === item.studentId);
    const gradeStudent = {
      ...student,
      grade: 'N/A',
    };
    if (out) {
      gradeStudent.grade = out.grade;
    }
    return gradeStudent;
  });
  return gradedStudents;
};

export default updateStudentGradeByCity;
