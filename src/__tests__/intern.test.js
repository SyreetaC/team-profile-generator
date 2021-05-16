const Intern = require("../lib/Intern");

describe("Intern Tests", () => {
  test("should construct a new instance of Intern", () => {
    const intern = new Intern(
      "Bob",
      "123",
      "bob@email.com",
      "University of Birmingham"
    );

    expect(intern).toBeInstanceOf(Intern);
  });
  test("should construct a new instance of an intern with name, id, email and school", () => {
    const intern = new Intern(
      "Bob",
      "123",
      "bob@email.com",
      "University of Birmingham"
    );

    expect(intern.name).toEqual("Bob");
    expect(intern.id).toEqual("123");
    expect(intern.email).toEqual("bob@email.com");
    expect(intern.school).toEqual("University of Birmingham");
  });

  test("should return school", () => {
    const intern = new Intern(
      "Bob",
      "123",
      "bob@email.com",
      "University of Birmingham"
    );
    expect(intern.getSchool()).toEqual("University of Birmingham");
  });

  test("should return role", () => {
    const intern = new Intern(
      "Bob",
      "123",
      "bob@email.com",
      "University of Birmingham"
    );
    expect(intern.getJobRole()).toEqual("Intern");
  });
});
