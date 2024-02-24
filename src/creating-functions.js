// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increment(number) {
  return number + 1
}
console.log(increment(1))
console.log(increment(2))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalises(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(capitalises('excellent work'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smiley(name) {
  name = capitalises(name)

  return `Hi, ${name} :)`
}
console.log(smiley('edward'))
console.log(smiley('aiyana'))
// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function data(dataArray) {
  let count = 0
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] === 'string') {
      count++
    }
  }
  return count
}
console.log(data(['eduard']))
console.log(data(['edward', 'aiyana']))
console.log(data([1]))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function addObjectProperty(obj) {
  // Check if 'edward' property exists in the object
  if (!Object.prototype.hasOwnProperty.call(obj, 'edward')) {
    // If not, add 'edward' property with value 'amazing'
    obj.edward = 'amazing'
  }
  return obj // Return the modified object
}

// function addObjectProperty(obj) {
// if (!obj.hasOwnProperty('edward')) {
// obj.edward = 'amazing'
// }
// return obj 
// }

// Test cases
console.log(addObjectProperty({})) // Output: { edward: 'amazing' }
console.log(addObjectProperty({ aiyana: 'fantastic' })); // Output: { aiyana: 'fantastic', edward: 'amazing' }
console.log(addObjectProperty({ edward: 'fabulous' })); // Output: { edward: 'fabulous' }

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: data,
  e: addObjectProperty
}
