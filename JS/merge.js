arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  const mySet = new Set();
  for (let i = 0; i < arr1.length; i++) {
    let x = arr1[i];
    mySet.add(x);
  }
  for (let i = 0; i < arr2.length; i++) {
    let x = arr2[i];
    if (!mySet.has(x)) {
      mySet.add(x);
    }
  }
  return [...mySet];

  //   const arr3 = [...arr1, ...arr2];
  //   const merged = [...new Set(arr3)];

  //   return merged;
}
console.log(mergeArray(arr1, arr2));
//Output : [1,2,4,5,7,3,6,9,0]
