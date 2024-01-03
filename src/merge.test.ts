import merge from "./merge";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4];

describe("merge", () => {
  it("should merge normal array", () => {
    expect(merge(arr1, arr2)).toEqual([1, 2, 2, 3, 4, 4, 5]);
  });

  it("should merge empty array", () => {
    expect(merge([], [])).toEqual([]);
  });

  it("should merge empty array with normal array", () => {
    expect(merge([], arr1)).toEqual(arr1);
  });
});
