const getStudentIdsSum = (objList) => objList.reduce((count, obj) => count + obj.id, 0);
export default getStudentIdsSum;
