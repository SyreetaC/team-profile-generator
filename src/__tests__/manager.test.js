const Manager = require("./manager.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newManager = new Manager(name);
  //assert
  expect(newManager.name).toBe(name);
});

test("can set ID via constructor", () => {
  const id = "123";
  const newManager = new Manager(id);
  expect(newManager.id).toBe(id);
});
