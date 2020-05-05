// functions vs arrow functions. Lets get comfortable with syntax
function sampleFunction(x) {
  console.log(x);
}

const sampleFunction = function(x) {
  console.log(x);
}

const sampleFunction = (x) => {
  console.log(x);
}

const sampleFunction = x => {
  console.log(x);
}

const sampleFunction = x => console.log(x)

const sampleFunction = () => console.log('hello')


// we have seen a callback back before
[1,2,3].map((elem) => {
  return elem + 1
})

// example with return values
const add = (a, b) => {
  return a + b
}
const add = (a, b) => a + b

const addifier = (num) => {
  return (num2) => {
    return num + num2
  }
}




















