const Intern = require("../lib/Intern");

// Tests that an engineer will have a name, id email and school added and that getRole() returns "Intern"
describe("Intern", () => {
  describe("Create Intern", () => {
    it("Should create an object with a name, id, email and school", () => {
      const intern = new Intern("Jeff", 0, "jeff@email.com", "university");

      expect(intern.name).toEqual("Jeff");
      expect(intern.id).toEqual(0);
      expect(intern.email).toEqual("jeff@email.com");
      expect(intern.school).toEqual("university");
    });
    it("Should return the employee role when getRole is called", () => {
      const intern = new Intern("Jeff", 0, "jeff@email.com", "university");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
