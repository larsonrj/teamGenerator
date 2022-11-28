const Engineer = require("../lib/Engineer");

// Tests that an engineer will have a name, id email and github username added and that getRole() returns "Engineer"
describe("Engineer", () => {
  describe("Create Engineer", () => {
    it("Should create an object with a name, id, email and github username", () => {
      const engineer = new Engineer("Jeff", 0, "jeff@email.com", "jeffgithub");

      expect(engineer.name).toEqual("Jeff");
      expect(engineer.id).toEqual(0);
      expect(engineer.email).toEqual("jeff@email.com");
      expect(engineer.github).toEqual("jeffgithub");
    });
    it("Should return the employee role when getRole is called", () => {
      const engineer = new Engineer("Jeff", 0, "jeff@email.com", "jeffgithub");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
