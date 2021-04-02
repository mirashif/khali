import isKhali from "../src/index";

describe("isKhali", () => {
  describe("Truthy cases", () => {
    test("empty array", () => {
      const value: any[] = [];
      expect(isKhali(value)).toBeTruthy();
    });

    test("empty object", () => {
      const value = {};
      expect(isKhali(value)).toBeTruthy();
    });

    test("empty string", () => {
      const value = "";
      expect(isKhali(value)).toBeTruthy();
    });

    test("number zero", () => {
      const value = 0;
      expect(isKhali(value)).toBeTruthy();
    });

    test("non-existing array item", () => {
      const value = ["Dhaka", ["Uttara", [1, 2]]];
      expect(isKhali(value[10])).toBeTruthy();
    });

    test("non-existing object item", () => {
      const value = {
        city: "Dhaka",
        location: {
          latitude: "23.809473999508782",
          longitude: "90.4151957081839",
        },
      };
      // @ts-ignore
      expect(isKhali(value["capital"])).toBeTruthy();
    });

    test("non-existing nested array item", () => {
      const value = ["Dhaka", ["Uttara", [1, 2]]];
      // @ts-ignore
      expect(isKhali(value[0][100])).toBeTruthy();
    });

    test("non-existing nested object item", () => {
      const value = {
        city: "Dhaka",
        location: {
          latitude: "23.809473999508782",
          longitude: "90.4151957081839",
        },
      };
      // @ts-ignore
      expect(isKhali(value["location"]["area"])).toBeTruthy();
    });
  });

  describe("Falsy cases", () => {
    test("negative number", () => {
      const value = -1;
      expect(isKhali(value)).toBeFalsy();
    });

    test("positive number", () => {
      const value = 1;
      expect(isKhali(value)).toBeFalsy();
    });

    test("array item", () => {
      const value = ["Dhaka", ["Uttara", [1, 2]]];
      expect(isKhali(value[0])).toBeFalsy();
    });

    test("object item", () => {
      const value = {
        city: "Dhaka",
        location: {
          latitude: "23.809473999508782",
          longitude: "90.4151957081839",
        },
      };
      // @ts-ignore
      expect(isKhali(value["city"])).toBeFalsy();
    });

    test("nested array item", () => {
      const value = ["Dhaka", ["Uttara", [1, 2]]];
      // @ts-ignore
      expect(isKhali(value[0][0])).toBeFalsy();
    });

    test("nested object item", () => {
      const value = {
        city: "Dhaka",
        location: {
          latitude: "23.809473999508782",
          longitude: "90.4151957081839",
        },
      };
      // @ts-ignore
      expect(isKhali(value["location"]["latitude"])).toBeFalsy();
    });
  });
});
