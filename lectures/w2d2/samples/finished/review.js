// Functions

// function declaration
function identityFunction(message) {
  return (message);
}

// function expression 
const identityFunction = function(message) {
  return message;
}

// arrow function review
const identityFunction = function(message) {
  return message;
}

const identityFunction = (message) => {
  return message;
}

const identityFunction = message => message;


// What is a callback

const map = function(array, cb) {
  const arr = []

  for (const element of array) {
    const newElement = cb(element)
    arr.push(newElement
  }

  return arr
}

map([1,2,3], (x) => x + 1)

// What is a higher order function

const addifier = (x) => {
  return (y) => {
    return x + y
  }
}

const add5 = addifier(5)

console.log(add5(4));




