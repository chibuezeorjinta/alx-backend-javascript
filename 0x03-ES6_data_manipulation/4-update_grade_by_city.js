const updateStudentGradeByCity = (objList, city, newGrades) => {
  const studentsInCity = objList.filter((obj) => obj.location === city);
  const gradedStudents = studentsInCity.map((student) => {
    for (const item of newGrades) {
      if (student.id === item.studentId) {
        const updateStudent = {
          ...student,
          grade: item.grade || 'N/A',
        };
        return updateStudent;
      }
    }
    return student;
  });
  return gradedStudents;
};

export default updateStudentGradeByCity;
