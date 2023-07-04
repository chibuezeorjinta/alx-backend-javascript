// array manipulation

const getStudentsByLocation = (objList, city) => objList.filter((obj) => obj.location === city);

export default getStudentsByLocation;
