// Split arr in half
// Sort left arr
// Sort right arr
// Merge left and right into new arr

let unsortedArr = [5, 10, 3, 2, 6, 1, 4, 8, 9, 7, 11]



function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle, arr.length));
  
  return merge(leftSide, rightSide);
}

  function merge(left, right) {
    let sortedArr = [];
    while(left.length > 0 && right.length > 0) {
      let smallerNum =  (left[0] < right[0] ? left : right)
      sortedArr.push(smallerNum.shift());
    }
    return sortedArr.concat(left, right);
}


console.log(mergeSort(unsortedArr))