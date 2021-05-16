const Manager = require("../lib/Manager");

describe("Manager Tests", () => {
  test("should construct a new instance of Manager", () => {
    const manager = new Manager("Bob", "123", "bob@email.com", "01211234567");

    expect(manager).toBeInstanceOf(Manager);
  });
  test("should construct a new instance of a manager with name, id, email and office number", () => {
    const manager = new Manager("Bob", "123", "bob@email.com", "01211234567");

    expect(manager.name).toEqual("Bob");
    expect(manager.id).toEqual("123");
    expect(manager.email).toEqual("bob@email.com");
    expect(manager.officeNumber).toEqual("01211234567");
  });

  test("should return office number", () => {
    const manager = new Manager("Bob", "123", "bob@email.com", "01211234567");
    expect(manager.getOfficeNumber()).toEqual("01211234567");
  });

  test("should return role", () => {
    const manager = new Manager("Bob", "123", "bob@email.com", "01211234567");
    expect(manager.getJobRole()).toEqual("Manager");
  });
});
