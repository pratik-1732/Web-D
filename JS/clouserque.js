function generateID(startValue) {
  //Implement Your function here
  let count = startValue || 0;
  const year = new Date().getFullYear();

  return function () {
    let ans = `A_${year}_${count}`;
    count++;
    return ans;
  };
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func()); // Output: A_2023_100
