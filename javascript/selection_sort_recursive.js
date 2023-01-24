function selectionSortRecursive(arr) {

  // if an array is empty, return empty array
  if (arr.length === 0) {
    return [];
  }

  // store value of the smallest number in variable 'min'
  const min = Math.min(...arr);
  // find index of the smallest number
  const idx = arr.indexOf(min);
  // delete the smallest element from the array
  arr.splice(idx, 1);

  // store calling a recursive function in a variable
  const result = selectionSortRecursive(arr);
  // call recursive variable and prepend the smallest number
  result.unshift(min);
  // return sorted array
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
