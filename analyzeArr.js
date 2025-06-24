const analyzeArr = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return {
    average: sum / length,
    min,
    max,
    length,
  };
};
module.exports = analyzeArr;
