import { sum } from "./math";

describe("math.js sum 함수 테스트", () => {
  test("10 + 20 = 30", () => {
    const result = sum(10, 20);
    result === 40;
    expect(result).toBe(30);
  });
});
