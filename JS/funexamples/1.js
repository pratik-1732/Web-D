//Create your function with the name shuffle.
//It should return a function when call should give the shuffled array.
//Do not modify the anything in the starter code.
function main() {
  const Subject1 = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
  ];
  //Write your function here
  function shuffle(quearray) {
    return function quepaper(quearray) {
      for (let i = 0; i < 5; i++) {
        let x = Math.floor(Math.random() * 5);
        console.log(quearray[x]);
      }
    };
  }
  const func = shuffle(Subject1);
  console.log(func());
  return shuffle;
}
