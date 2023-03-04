const Shape = require('../lib/shapes');

const shape = new Shape('circle', 'blue', 'JRZ', 'orange');

describe('shape', () => {
    describe('Properties of shape', () => {
        test('Test shape properties', () => {
            expect(shape.shape).toEqual('circle')
        })
        test('Test shapeColor', () => {
            expect(shape.shapeColor).toEqual('blue')
        })
        test('Test text', () => {
            expect(shape.text).toEqual('JRZ')
        })
        test('Test textColor', () => {
            expect(shape.textColor).toEqual('orange')
        })
    })
})