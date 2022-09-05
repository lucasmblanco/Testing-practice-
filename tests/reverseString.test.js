import reverseString  from "../src/reverseString";

test('string reversed' , () => {
    expect(reverseString('hola')).toEqual('aloh');
});