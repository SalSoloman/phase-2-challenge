const assert = require('chai').assert
const {month, reverseSentence, nameProps, filterBetween} = require('../part-1/functions')


describe('Tests for part-1', () => {

  describe('month()', () => {
    it('it returns the month for a given Date', () => {
      let date = new Date(2017, 5, 19)
      assert.equal(month(date), 'June')
    })
    it('should not return August when given the date of Christmas', () => {
      let christmas = new Date(2017, 11, 25)
      assert.notEqual(month(christmas), 'August')
    })
    it('month returns a string', () => {
      let birthday = new Date(2017, 1, 10)
      assert.typeOf(month(birthday), 'string')
    })
  })



  describe('reverseSentence()', () => {
    it('it takes a string of words and reverse it with regrads to punctuation', () =>
      assert.equal(reverseSentence('The cat jumped over the dog.'), 'dog. the over jumped cat The')
    )
    it('it returns one word arguments unchanged', () =>
      assert.equal(reverseSentence('Counter'), 'Counter')
    )
    it('it does not reverse non-space words', () =>
      assert.notEqual(reverseSentence('HelloThere'), 'ThereHello')
    )
  })



  describe('nameProps()', () => {
    it('it returns the property names of an object in alphabetical order', () => {
      let friend = {
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      }
      assert.deepEqual(nameProps(friend), ['age', 'name', 'phone'])
    })
    it('it does not return properties from an empty object', () =>
      assert.deepEqual(nameProps({}), [])
    )
  })



  describe('filterBetween()', () => {
    it('it returns a new array with elements that comes after a min value and before a max value', () => {
      let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
      assert.deepEqual(filterBetween(arr, 'chimp', 'lobster'), ['dog', 'lion', 'cow'])
    })
    it('filterBetween returns a new array containing only the elements that come after min and before max', () => {
      let buildingItems = ['carvan', 'garage', 'park', 'floor']
      assert.notDeepEqual(filterBetween(buildingItems, 'door', 'gate'), ['garage', 'park', 'floor'])
    })
  })
})
