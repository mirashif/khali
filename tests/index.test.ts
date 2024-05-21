import { describe, expect, test } from "vitest";

import isEmpty from "../src/index";

describe("Truthy cases", () => {
  test("empty array", () => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const value: any[] = [];
    expect(isEmpty(value)).toBeTruthy();
  });

  test("empty object", () => {
    const value = {};
    expect(isEmpty(value)).toBeTruthy();
  });

  test("empty string", () => {
    const value = "";
    expect(isEmpty(value)).toBeTruthy();
  });

  test("number zero", () => {
    const value = 0;
    expect(isEmpty(value)).toBeTruthy();
  });

  test("non-existing array item", () => {
    const value = ["Dhaka", ["Uttara", [1, 2]]];
    expect(isEmpty(value[10])).toBeTruthy();
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
    expect(isEmpty(value.capital)).toBeTruthy();
  });

  test("non-existing nested array item", () => {
    const value = ["Dhaka", ["Uttara", [1, 2]]];
    // @ts-ignore
    expect(isEmpty(value[0][100])).toBeTruthy();
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
    expect(isEmpty(value.location.area)).toBeTruthy();
  });
});

describe("Falsy cases", () => {
  test("negative number", () => {
    const value = -1;
    expect(isEmpty(value)).toBeFalsy();
  });

  test("positive number", () => {
    const value = 1;
    expect(isEmpty(value)).toBeFalsy();
  });

  test("array item", () => {
    const value = ["Dhaka", ["Uttara", [1, 2]]];
    expect(isEmpty(value[0])).toBeFalsy();
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
    expect(isEmpty(value.city)).toBeFalsy();
  });

  test("nested array item", () => {
    const value = ["Dhaka", ["Uttara", [1, 2]]];
    // @ts-ignore
    expect(isEmpty(value[0][0])).toBeFalsy();
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
    expect(isEmpty(value.location.latitude)).toBeFalsy();
  });
});
