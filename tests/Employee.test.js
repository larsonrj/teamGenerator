const Employee = require("../lib/Employee");

// Tests that an employee will have a name, id and email added and that getRole() returns "Employee"
describe("Employee", () => {
  describe("Create Employee", () => {
    it("Should create an object with a name, id and email", () => {
      const employee = new Employee("Jeff", 0, "jeff@email.com");

      expect(employee.name).toEqual("Jeff");
      expect(employee.id).toEqual(0);
      expect(employee.email).toEqual("jeff@email.com");
    });
    it("Should return the employee role when getRole is called", () => {
      const employee = new Employee("Jeff", 0, "jeff@email.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
