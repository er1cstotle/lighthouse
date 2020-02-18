// function add (a, b) {
//   return a + b
// }

// const add = function(a,b ) {
//   return a + b
// }

// const add = (a, b) => {
//   return a + b
// }

// const add = (a, b) => a + b

// const identity = (a) => a

// const identity = a => a

// const map = (arr, cb) => {
//   const newArr = []

//   for(element of arr) {
//     newArr.push(cb(element))
//   }

//   return newArr
// }

// const result = map([1,2,3], (num) => num + 1)

// const addifier = (x) => {
//   return (y) => {
//     return x + y
//   }
// }

// const add5 = addifier(5)

// const answer = add5(4)
// // => 9


// console.log('before the timeout');

// setTimeout(() => {
//   console.log('inside the timeout')
// }, 0);

// console.log('after the timeout');


const higherOrdFunc = (cb) => {
  // console.log('inside higher');

  // setTimeout(() => {
  //   const data = 'hello world'
  //   console.log('inside the timeout');
  //   cb(data)
  // }, 0);

  return 'hola mundo'
  // console.log('after the timeout');
}

const result = higherOrdFunc((message) => {
  console.log('inside our callback ');
  console.log(message);
})

console.log('end');
console.log(result);



















