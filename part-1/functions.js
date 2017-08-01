function month(date) {

}









function reverseSentence(stringOfWords) {
  if (stringOfWords.split(' ').length > 1) {
    let reversedString = stringOfWords.split(' ').reverse().join(' ')
    return reversedString
  }
  return stringOfWords
}

console.log(reverseSentence("The cat jumped over the dog.")) // => "dog. the over jumped cat The"
console.log(reverseSentence("Hello, world!")) // => "world! Hello,"
console.log(reverseSentence('Counter')) // => "Counter"











function nameProps(object) {
  let alphabeticalProperties = Object.getOwnPropertyNames(object).sort()
  return alphabeticalProperties
}

let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

console.log(nameProps(friend)) // => ['age', 'name', 'phone']
console.log(nameProps({})) // => []










function filterBetween(arrayOfStrings, minValue, maxValue) {
  // create an instance of the array
  // add the min and max values to the copy of the array
  // sort the new array
  // find the index of the elements that falls between min and max value
  // push the elements to a new array and return the array

  let finalArray = []
  newArray = arrayOfStrings.slice(0)
  newArray.push(minValue, maxValue)
  newArray.sort()
  for ( var element = 0; element < newArray.length; element++ ) {
    if ( element > newArray.indexOf(minValue) && element < newArray.indexOf(maxValue) ) {
      finalArray.push(newArray[element])
    }
  }
  return finalArray
}


let arrayOfStrings = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

console.log(filterBetween(arrayOfStrings, 'deer', 'giraffe')) // => ['dog']
console.log(filterBetween(arrayOfStrings, 'chimp', 'lobster')) // => ['dog', 'lion', 'cow']
console.log(filterBetween(arrayOfStrings, 'chickadee', 'chimpanzee')) // =>
