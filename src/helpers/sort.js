export const sortResult = (data, direction, column) => {
  //формула сортировки по столбцам
  direction
    ? data.sort(function(a, b) {
        if (a[column] > b[column]) {
          return 1;
        }
        if (a[column] < b[column]) {
          return -1;
        }
        return 0;
      })
    : data.sort(function(a, b) {
        if (a[column] < b[column]) {
          return 1;
        }
        if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      });
  return data;
};
