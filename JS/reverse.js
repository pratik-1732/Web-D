//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str) {
  //Implement Your function here
  const strNew = str.split("").reverse().join("");
  return strNew;
}
console.log(reverseString("Hello"));
//Output : "olleH"
