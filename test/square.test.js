const Shape = require('../lib/square');

const square = new Shape('square', 'green', 'HI', 'pink');

describe('square', () => {
    describe('Properties of a Square', () => {
        test('Test shape properties', () => {
            expect(square.shape).toEqual('square')
        })
        test('Test shapeColor', () => {
            expect(square.shapeColor).toEqual('green')
        })
        test('Test Text', () => {
            expect(square.text).toEqual('HI')
        })
        test('Test textColor', () => {
            expect(square.textColor).toEqual('pink')
        })
    })
})