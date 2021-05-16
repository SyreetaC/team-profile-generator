const Manager = require("../lib/Manager");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newManager = new Manager(name);
  //assert
  expect(newManager.name).toBe(name);
});

test("can set ID via constructor", () => {
  const Id = "123";
  const newManager = new Manager(Id);
  expect(newManager.Id).toBe(Id);
});
