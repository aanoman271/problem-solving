const removeDuplicates = (arr) => {
  return arr.filter((number, index) => arr.indexOf(number) === index);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
