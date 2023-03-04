const Shape = require('../lib/triangle');

const triangle = new Shape('triangle', 'red', 'WOW', 'yellow');

describe('triangle', () => {
    describe('Properites of a Triangle', () => {
        test('Test Shape Properties', () => {
            expect(triangle.shape).toEqual('triangle')
        })
        test('Test shapeColor', () => {
            expect(triangle.shapeColor).toEqual('red')
        })
        test('Test text', () => {
            expect(triangle.text).toEqual('WOW')
        })
        test('Test textColor', () => {
            expect(triangle.textColor).toEqual('yellow')
        })
    })
})