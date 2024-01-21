//complete the increaseSalaries function
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];
function increaseSalaries(employees) {
  //Implement your function here to modify the salaray.

  const ans = employees.map((item) => {
    const container = {};
    container.id = item.id;
    container.name = item.name;
    container.department = item.department;
    if (item.department === "sales") {
      item.salary += item.salary * 0.1;
      item.salary = item.salary.toFixed(1);
    } else if (item.department === "engineering") {
      item.salary += item.salary * 0.15;
      item.salary = item.salary.toFixed(1);
    } else {
      item.salary += item.salary * 0.05;
      item.salary = item.salary.toFixed(1);
    }
    container.salary = item.salary;
    return container;
  });
  console.log(ans);
}
increaseSalaries(employees);
