const { createArray } = require("../lab1.js");

describe("here i test some function", function () {
  it("test that the return value of type array", () => {
    expect(createArray()).toEqual(jasmine.any(Array));
  });
});

describe(" function 2", function () {
  it("test if we pass 2 it will return array of length 2 and test it includes 1", () => {
    expect(createArray(2)).toContain(1);
    expect(createArray(2)).toHaveSize(2)
  });
});

describe("function 3", function () {
  it("test if we pass 3 it will return array of length 3 and test it doesnot include 3", () => {
    expect(createArray(3)).not.toContain(3);
    expect(createArray(3)).toHaveSize(3)
  });
});

//////////////////////////////////Q1

const { random } = require("../lab1.js");

describe("problem 2 no 1 ", function () {
  it("test that the return value is a number", () => {
    expect(random()).toEqual(jasmine.any(Number));
  });
});

describe("problem 2 no 2 ", function () {
  it("test if we pass 5,7 it will return a number >= 5 and <= 7", () => {
    expect(random(5, 7)).toBeGreaterThanOrEqual(5);
    expect(random(5, 7)).toBeLessThanOrEqual(7);
  });
});

describe("problem 2 no 3 ", function () {
  it("test if we pass one parameter it will return NaN", () => {
    expect(random(5)).toBeNaN()
  });
});
