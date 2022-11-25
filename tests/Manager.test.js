const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Create Manager", () => {
    it("Should create an object with a name, id, email and office number", () => {
      const manager = new Manager("Jeff", 0, "jeff@email.com", 1);

      expect(manager.name).toEqual("Jeff");
      expect(manager.id).toEqual(0);
      expect(manager.email).toEqual("jeff@email.com");
      expect(manager.officeNumber).toEqual(1);
    });
    it("Should return the employee role when getRole is called", () => {
      const manager = new Manager("Jeff", 0, "jeff@email.com", 1);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
