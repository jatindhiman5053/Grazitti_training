
const clonearray = require('./clonearray')

test('clone an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // expect(clonearray(arr)).toBe(arr); it shows an error as both the array pointing to the same address

    expect(clonearray(arr)).toEqual(arr);
})