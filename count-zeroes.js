function countZeroes(arr) {
  let firstZero = findFirstZero(arr);

  if (firstZero === -1) {
    return 0;
  }

  return arr.length - firstZero;
}

function findFirstZero(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return mid;
      } else {
        return findFirstZero(arr, low, mid - 1);
      }
    } else {
      return findFirstZero(arr, mid + 1, high);
    }
  }
  return -1;
}
module.exports = countZeroes;
