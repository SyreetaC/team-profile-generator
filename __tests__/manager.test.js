const Manager = require("./manager.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newManager = new Manager(name);
  //assert
  expect(newManager.name).toBe(name);
});
