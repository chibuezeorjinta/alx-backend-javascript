const groceriesList = () => {
  const shopping = new Map();
  const itemsList = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(itemsList)) {
    shopping.set(key, itemsList[key]);
  }
  return shopping;
};

export default groceriesList;
