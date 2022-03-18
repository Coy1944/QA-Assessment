const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("Add", () => {
        expect(shuffleArray.add(7, 3)).toBe(10)
      });
    
      test("Subtract", () => {
        expect(shuffleArray.subtract(10, 7)).toBe(3)
      });
    