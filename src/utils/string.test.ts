import { removeMask } from "./string";

describe("String Utils", () => {
  describe("removeMask", () => {
    it("should remove mask", () => {
      expect(removeMask("456.456.456-10")).toBe("45645645610");
    });
  });
});
