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

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const numbers = new CodersArray();
      const expectedCodersArrayLength = 0;

      const codersLength = numbers.length();

      expect(codersLength).toBe(expectedCodersArrayLength);
    });
  });
});

describe("Given the method push", () => {
  describe("When it receives [5,6]", () => {
    test("Then it should return 6", () => {
      const items = new CodersArray(3, 8, 10, 2);
      const expectedCodersArray = 6;

      const itemLength = items.push(5, 6);

      expect(itemLength).toBe(expectedCodersArray);
    });
  });

  describe("When it receives ['Robert', 'Nary']", () => {
    test("Then it should return 5", () => {
      const names = new CodersArray("marta", "Luis", "Pere");
      const expectedNamesArrayLength = 5;

      const codersLength = names.push("Robert", "Nary");

      expect(codersLength).toBe(expectedNamesArrayLength);
    });
  });

  describe("When it receives ''", () => {
    test("Then it should return 5", () => {
      const numbers = new CodersArray(
        "Meow",
        "Plants",
        "chairs",
        "sleepy",
        "10:37"
      );
      const expectedCodersArrayLength = 5;

      const codersLength = numbers.push();

      expect(codersLength).toBe(expectedCodersArrayLength);
    });
  });
});
