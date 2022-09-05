import analyzeArray from "../src/analyzeArray";

it('standard test', () => {
    expect(analyzeArray([1,2,3,4])).toEqual({average: 3, min: 1, max: 4, length: 4});
});

