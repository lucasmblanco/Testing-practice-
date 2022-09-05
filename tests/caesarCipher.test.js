import caesarCipher from "../src/caesarCipher";

it('only one letter', () => {
    expect(caesarCipher('c', 2)).toBe('e')
})

it('more than one letter', () => {
    expect(caesarCipher('ab', 2)).toBe('cd')
})

it('letter with symbol', () => {
    expect(caesarCipher('a,', 2)).toBe('c,')
})

it('last letter', () => {
    expect(caesarCipher('y', 2)).toBe('a')
})

it('with a phrase', () => {
    expect(caesarCipher("i'm happy now", 2)).toBe("k'o jcrra pqy")
})

it('in Upper Case', () => {
    expect(caesarCipher('Hola!', 3)).toBe('krod!')
})