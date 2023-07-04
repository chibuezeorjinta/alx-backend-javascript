const getListStudentIds = (objList) => {
  if (Array.isArray(objList) === false) {
    return [];
  }
  return objList.map((obj) => obj.id);
};

export default getListStudentIds;
