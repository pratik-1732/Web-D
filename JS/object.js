// const student = {
//     name: "alexa",
//     class: 12
// }
// student.age = 21;
// console.log(student);

//Complete the findClassTopper function
//Do not alter alter the starter code.
//The object on which you will be working will be of this format.
const studentMarks = {
  John: [85, 90, 92, 88, 87],
  Jane: [92, 95, 89, 91, 94],
  David: [78, 85, 90, 92, 84],
  Emily: [90, 88, 92, 87, 91],
  Michael: [86, 92, 90, 89, 94],
};
function avgMarks(arr) {
  let sum = 0;
  let length = arr.length;

  for (element of arr) {
    sum += element;
  }
  let avgSum = sum / length;
  return avgSum;
}
function findClassTopper(studentMarks) {
  //Implement your function here
  let ans = 0;
  let name;
  for (key in studentMarks) {
    const arr = studentMarks[key];
    let avg = avgMarks(arr);
    if (avg > ans) {
      ans = avg;
      name = key;
    }
  }
  return name;
}
console.log(findClassTopper(studentMarks));
//Output : "Jane";
