const updateUniqueItems = (shopping) => {
  if (shopping instanceof Map) {
    for (const [key, value] of shopping.entries()) {
      if (value === 1) {
        shopping.set(key, 100);
      }
    }
    return shopping;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
