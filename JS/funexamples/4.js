//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids, names, images) {
  //Implement your function here
  const ans = [];
  const finalAns1 = ids.map(({ ids, names }) => ({ id: [ids], name: [names] }));
  const finalAns2 = names.map((ids, names, images) => ({
    id: [names],
    name: [ids],
    image: [images],
  }));
  console.log(finalAns1);
  console.log(finalAns2);
}

createUserObjects(ids, names, images);
