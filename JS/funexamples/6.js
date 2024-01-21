const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];
function mapContactsToCompanies(contacts) {
  //Implement your function and return the object
  //   const ans = contacts.reduce(function (accumulator, currentObject) {
  //     let str = currentObject.company;
  //     if (!accumulator[str]) {
  //       accumulator[str] = [];
  //     }
  //     accumulator[str].push(currentObject);
  //     return accumulator;
  //   });
  //   console.log(ans);
  const ans = contacts.reduce((items) => {
    const container = {};
  });
}

mapContactsToCompanies(contacts);
