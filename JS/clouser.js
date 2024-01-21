function cart() {
  let items = 0;
  return {
    addltem: function () {
      items++;
    },
    getltem: function () {
      return items;
    },
  };
}
const closure = cart();
closure.addltem();
closure.addltem();
closure.addltem();
console.log(closure.getltem);
