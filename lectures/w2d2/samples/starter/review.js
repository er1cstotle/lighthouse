// // What is a function

// // it is an object 
// // small section of code that you can run

// // declaration and expressions


// // const exampleScope = function(params) {
// //   // let identityFunction 

// //   identityFunction(1)

  
// //   function identityFunction(param) {
// //     return param
// //   }
  
// //   // const identityFunction = function(param) {
// //   //   return param
// //   // }

// // }

// const identityFunction = function(param) {
//   return param
// }

const identityFunction = (param) => {
  console.log(param)
}

identityFunction(1)

// const identityFunction = (param) => param

// const identityFunction = param => param

// // what is a callback 
// // a function within a function
// // a function that is called inside by another function. it is passed in as an argument 

// const map = (array, cb) => {
//   const newArr = []

//   for (const element of array) {
//     const newElement = cb(element)
//     newArr.push(newElement)
//   }

//   return newArr
// }

// const resultArr = map([1,2,3], x => x + 1)

// resultArr.forEach()

// // foreach and that it is built in <---

// // function that calls a function 
// // function that takes in or returns a function

const addifier = x => y =>  x + y

const add5 = addifier(5)

console.log(add5(3));









