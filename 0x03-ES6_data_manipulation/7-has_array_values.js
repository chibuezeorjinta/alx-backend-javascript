const hasValuesFromArray = (inSet, inArray) => {
  for (const item of inArray) {
    if (!inSet.has(item)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
