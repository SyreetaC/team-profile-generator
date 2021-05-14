const Engineer = require("./engineer.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newEngineer = new Engineer(name);
  //assert
  expect(newEngineer.name).toBe(name);
});
