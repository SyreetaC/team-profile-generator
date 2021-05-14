const Intern = require("./intern.test");

test("can set name via constructor", () => {
  //arrange
  const name = "Bob";
  //act
  const newIntern = new Intern(name);
  //assert
  expect(newIntern.name).toBe(name);
});
