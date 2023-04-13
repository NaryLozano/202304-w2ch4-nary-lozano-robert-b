import CodersArray from "./CodersArray";

describe("Given the method length", () => {
  describe("When it receives [3,8,10,2]", () => {
    test("Then it should return 4", () => {
      const numbers = new CodersArray(3, 8, 10, 2);
      const expectedCodersArrayLength = 4;

      const codersLength = numbers.length();

      expect(codersLength).toBe(expectedCodersArrayLength);
    });
  });

  describe("When it receives ['marta', 'Luis', 'Pere']", () => {
    test("Then it should return 3", () => {
      const numbers = new CodersArray("marta", "Luis", "Pere");
      const expectedCodersArrayLength = 3;

      const codersLength = numbers.length();

      expect(codersLength).toBe(expectedCodersArrayLength);
    });
  });
});
