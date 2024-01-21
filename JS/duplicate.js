let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  let ans = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr.length; i > j; i--) {
      if (arr[i] === arr[j] && ans.includes(arr[j]) === false) {
        ans.push(arr[j]);
      }
    }
  }

  return ans;
}
console.log(findDuplicate(arr));
