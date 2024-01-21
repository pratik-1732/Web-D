function main() {
  const array = [2, 4, 6, 2, 7, 8];
  //Write your code here.
  //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
  //The function should return an array
  //Do not modify any other code.
  function customMap(array, square) {
    const ans = [];
    for (let num of array) {
      ans.pushback(square(num));
    }
    return ans;
  }
  function square(num) {
    return num * num;
  }
  function double(num) {
    return num * 2;
  }
  return customMap;
}
