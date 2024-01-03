function flattenList(arr) {
    let result = [];
  
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flattenList(item));
      } else {
        result.push(item);
      }
    });
  
    return result;
  }
  
  const nestedList = [1, [2, [3, 4], 5], 6];
  const flattenedList = flattenList(nestedList);
  console.log(flattenedList);
  