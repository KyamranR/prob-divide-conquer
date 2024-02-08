function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // find the middle

    if (arr[mid] === x) {
      return arr[mid]; // found x, so the floor is x itself
    } else if (arr[mid] < x) {
      floor = arr[mid]; // update the floor to the current element
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in the left half
    }
  }

  return floor; // return -1 if floor does not exist
}

module.exports = findFloor;
