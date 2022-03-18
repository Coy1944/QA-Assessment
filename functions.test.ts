const {shuffleArray} = require('./utils')

let newArr = [1, 2, 3, 4, 5, 6, 7]

describe('shuffleArray should', () => {
    test('should return array of the same lenght', () => {
        let returnedArray = shuffleArray(newArr)
        expect(returnedArray.length).toEqual(newArr.length)
    })

    test("Add", () => {
        expect(shuffleArray.add(7, 3)).toBe(10)
      });
    
    test("Subtract", () => {
        expect(shuffleArray.subtract(10, 7)).toBe(3)
      });
    
})