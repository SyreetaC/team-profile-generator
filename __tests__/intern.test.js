const Intern = require("./intern.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newIntern = new Intern(name);
  //assert
  expect(newIntern.name).toBe(name);
});

test("can set ID via constructor", () => {
  const id = "123";
  const newIntern = new Intern(id);
  expect(newIntern.id).toBe(id);
});
