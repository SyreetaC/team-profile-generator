const Employee = require("../lib/Employee");

describe("Employee Tests", () => {
  test("should construct a new instance of an Employee", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");

    expect(employee).toBeInstanceOf(Employee);
  });

  test("should construct a new instance of an employee with name, id and email", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");

    expect(employee.name).toEqual("Bob");
    expect(employee.id).toEqual("123");
    expect(employee.email).toEqual("bob@email.com");
  });

  test("should return role", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");
    expect(employee.getJobRole()).toEqual("Employee");
  });

  test("should return name", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");
    expect(employee.getName()).toEqual("Bob");
  });

  test("should return id", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");
    expect(employee.getId()).toEqual("123");
  });

  test("should return email", () => {
    const employee = new Employee("Bob", "123", "bob@email.com");
    expect(employee.getEmail()).toEqual("bob@email.com");
  });
});
