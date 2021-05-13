const Employee = require("../lib/employee");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newEmployee = new Employee(name);
  //assert
  expect(newEmployee.name).toBe(name);
});
