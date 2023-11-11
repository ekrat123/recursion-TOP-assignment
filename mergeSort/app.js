function merge(arr1, arr2) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      result.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      result.push(arr2[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(arr1.slice(leftIndex), arr2.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);
  return merge(sortedLeftArr, sortedRightArr);
}

mergeSort([3, 5, 7, 1, 15, 8, 101, 96]);
