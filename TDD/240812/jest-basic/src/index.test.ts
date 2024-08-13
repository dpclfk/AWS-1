import { minus, sum } from "./index";

describe("test Math", () => {
  test("test sum", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 4)).toBe(7);
  });
  test("minus", () => {
    expect(minus(2, 1)).toBe(1);
  });
});
