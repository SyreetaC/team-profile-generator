const Engineer = require("../lib/Engineer");

describe("Engineer Tests", () => {
  test("should construct a new instance of Engineer", () => {
    const engineer = new Engineer("Bob", "123", "bob@email.com", "bob123");

    expect(engineer).toBeInstanceOf(Engineer);
  });
  test("should construct a new instance of an engineer with name, id, email and gitHub", () => {
    const engineer = new Engineer("Bob", "123", "bob@email.com", "bob123");

    expect(engineer.name).toEqual("Bob");
    expect(engineer.id).toEqual("123");
    expect(engineer.email).toEqual("bob@email.com");
    expect(engineer.gitHub).toEqual("bob123");
  });

  test("should return gitHub", () => {
    const engineer = new Engineer("Bob", "123", "bob@email.com", "bob123");
    expect(engineer.getGitHub()).toEqual("bob123");
  });

  test("should return role", () => {
    const engineer = new Engineer("Bob", "123", "bob@email.com", "bob123");
    expect(engineer.getJobRole()).toEqual("Engineer");
  });
});
