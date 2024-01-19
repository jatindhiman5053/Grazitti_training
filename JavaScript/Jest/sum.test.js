const sum = require('./sum')

test("adding 2 numbers", () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})