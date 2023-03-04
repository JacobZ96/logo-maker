const Shape = require('../lib/circle');

const circle = new Shape('circle', 'yellow', 'CMZ', 'blue');

describe('circle', () => {
    describe('Properties of a Circle', () => {
        test('Test Shape properties', () => {
            expect(circle.shape).toEqual('circle')         
        })
        test('Test shapeColor', () => {
            expect(circle.shapeColor).toEqual('yellow')
        })
        test('Test text', () => {
            expect(circle.text).toEqual('CMZ')
        })
        test('Test textColor', () => {
            expect(circle.textColor).toEqual('blue')
        })
    })
})