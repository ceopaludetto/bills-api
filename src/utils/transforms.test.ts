import { plainToClass } from "class-transformer";

import { Email, RemoveMask, Trim } from "./transforms";

describe("Transforms", () => {
  describe("Trim", () => {
    it("should remove leading and trailing spaces", () => {
      class Test {
        @Trim()
        public name!: string;
      }

      const test = plainToClass(Test, { name: "  test   " });
      expect(test.name).toBe("test");
    });
  });

  describe("Email", () => {
    it("should remove leading and trailing spaces and lowercase", () => {
      class Test {
        @Email()
        public email!: string;
      }

      const test = plainToClass(Test, { email: "  TEST@GMAIL.COM   " });
      expect(test.email).toBe("test@gmail.com");
    });
  });

  describe("RemoveMask", () => {
    it("should remove masks", () => {
      class Test {
        @RemoveMask()
        public cpf!: string;
      }

      const test = plainToClass(Test, { cpf: "456.456.456-10" });
      expect(test.cpf).toBe("45645645610");
    });
  });
});
