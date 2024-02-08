function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // if the array is already sorted return 0
    if (arr[left] <= arr[right]) return left;

    let mid = Math.floor((left + right) / 2); // find the middle
    let next = (mid + 1) % arr.length; // calculate the next element index

    // check if the middle element is the smallest
    if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
      return mid;
    }

    // if the middle element is greater than the last element, search in the right half
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      // else search left half
      right = mid - 1;
    }
  }
  return -1; // if not found return -1
}

module.exports = findRotationCount;
