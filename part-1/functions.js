
function getMonth(date) {
  let months = ["January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"]
  let currentMonth = date.getMonth()
  let nameOfMonth = months[currentMonth]
  return nameOfMonth
}


let date = new Date(2017, 5, 19) // June 19, 2017
console.log(getMonth(date)) // returns "June"

let christmas = new Date(2017, 11, 25) // December 25, 2017
console.log(getMonth(christmas)) // returns "December"

let birthday = new Date(2017, 0, 10) // January 10, 2017
console.log(getMonth(birthday)) // returns "January"






function reverseSentence(stringOfWords) {
  // check if the given string has more than one word using split array method
  // if ture split the string, reverse it then join back
  // if false return the one word string with no modification

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
  // get the object property name using Object.getOwnPropertyNames
  // sort the resutls

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






// function filterBetween(arrayOfStrings, minValue, maxValue) {
//   // create a copy of the array
//   // add the min and max values to the copy of the array
//   // sort the new array
//   // find the index of the elements that falls between min and max value
//   // push the elements to a new array and return the array
//
//   let finalArray = []
//   newArray = arrayOfStrings.slice(0)
//   newArray.push(minValue, maxValue)
//   newArray.sort()
//   for ( var element = 0; element < newArray.length; element++ ) {
//     if ( element > newArray.indexOf(minValue) && element < newArray.indexOf(maxValue) ) {
//       finalArray.push(newArray[element])
//     }
//   }
//   return finalArray
// }

function filterBetween(arr, min, max) {
  let newArray = []
  arr.filter(function(string) {
    if (string >= min && string <= max) {
      newArray.push(string)
    }
  })
  return newArray;
};


let arrayOfStrings = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

console.log(filterBetween(arrayOfStrings, 'deer', 'giraffe')) // => ['dog']
console.log(filterBetween(arrayOfStrings, 'chimp', 'lobster')) // => ['dog', 'lion', 'cow']
console.log(filterBetween(arrayOfStrings, 'chickadee', 'chimpanzee')) // =>



// 
// module.exports = {
//   getMonth,
//   reverseSentence,
//   nameProps,
//   filterBetween
// }
