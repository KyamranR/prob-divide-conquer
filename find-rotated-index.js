function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // finding middle of the array

    if (arr[mid] === num) {
      // if array of mid is equal to num then return mid, means target index found
      return mid;
    }
    // check if the left half is sorted
    if (arr[left] <= arr[mid]) {
      // check if the target(num) is with in the sorted left half
      if (arr[left] <= num && num < arr[mid]) {
        right = mid - 1; // search the left half
      } else {
        left = mid + 1; // search the right half
      }
    } else {
      // if the left half is not sorted, the right half must be sorted
      // check if the target(num) is within the sorted right half
      if (arr[mid] < num && num <= arr[right]) {
        left = mid + 1; // search the right half
      } else {
        right = mid - 1; // search the left half
      }
    }
  }
  return -1; // if the target(num) is not found return -1
}

module.exports = findRotatedIndex;
