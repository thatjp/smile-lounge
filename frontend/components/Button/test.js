const arrA = [1, 2, 3];
const arrB = [2, 1, 3];

function compare(arr1, arr2) {
  let arr1count = 0;
  let arr2count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      arr1count + 1;
    }
    if (arr1[i] < arr2[i]) {
      arr1count++;
    }
    if (arr1[i] === arr2[i]) {
      arr2count++;
    }
  }
  return [arr1count, arr2count];
}

function compareTriplets(a, b) {
  let arr1count = 0;
  let arr2count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      arr1count++;
    }
    if (a[i] < b[i]) {
      arr2count++;
    }
  }
  console.log(arr1count, arr2count)
  return (arr1count, arr2count);
}

compareTriplets(arrA, arrB);
