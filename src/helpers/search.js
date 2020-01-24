export const searchResult = (data, filter) => {
  let result = [];

  const coincidence = (value, index) => {
    if (value.toString().includes(filter)) {
      result.push(data[index]);
      return true;
    }
    return false;
  };

  const checking = (element, index) => {
    for (let value of Object.values(element)) {
      if (value instanceof Object) return checking(value, index);
      if (coincidence(value, index)) {
        break;
      }
    }
  };

  for (let [index, item] of data.entries()) {
    checking(item, index);
  }

  return result;
};
