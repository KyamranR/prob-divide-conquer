function countZeroes(arr) {
  let firstZero = findFirstZero(arr);

  if (firstZero === -1) {
    // of nothing found return 0
    return 0;
  }

  return arr.length - firstZero;
}

function findFirstZero(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2); // finding the middle of the array
    //checking the left half for zero
    if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return mid;
      } else {
        return findFirstZero(arr, low, mid - 1);
      }
    } else {
      // searching the right half
      return findFirstZero(arr, mid + 1, high);
    }
  }
  return -1; // return -1 if no zeros found
}
module.exports = countZeroes;
