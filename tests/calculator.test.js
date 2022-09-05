import calculator from "../src/calculator";

test('sum', () => {
    expect(calculator(2,1,'sum')).toBe(3)
})

test('subtract', () => {
    expect(calculator(2,1,'subtract')).toBe(1)
})

test('divide', () => {
    expect(calculator(10,2,'divide')).toBe(5)
})

test('multiply', () => {
    expect(calculator(10,10,'multiply')).toBe(100)
})