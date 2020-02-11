// Functions

// function declaration
function add(a, b) {
  return a + b;
}

// function expression 
const add = function(a, b) {
  return a + b;
}

// arrow function review
const add = function(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
}

const add = (a, b) => a + b;


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




