const Engineer = require("./engineer.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newEngineer = new Engineer(name);
  //assert
  expect(newEngineer.name).toBe(name);
});

test("can set ID via constructor", () => {
  const id = "123";
  const newEngineer = new Engineer(id);
  expect(newEngineer.name).toBe(id);
});
