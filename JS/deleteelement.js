let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr, ele) {
  //   let ans = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== 56) {
  //       let x = arr[i];
  //       ans.push(x);
  //     }
  //   }
  //   return ans;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}
console.log(deleteOccur(arr, ele));
