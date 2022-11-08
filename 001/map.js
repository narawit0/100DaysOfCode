const arr = [1,2,3,4,5];

const multiplyByTwo = num => num * 2;
const plusOne = num => num + 1;

console.log(arr.map(multiplyByTwo)); // [2,4,6,8,10]
console.log(arr.map(plusOne)); // [2,3,4,5,6,7]