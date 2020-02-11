const id = setInterval(() => {
  console.log('hi');
  
}, 1000);

clearInterval(id)


// part 1 

console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');

// part 2 
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);


// part 3
const higherOrderFunc = function(callback) {
  // get some data from somewhere
  let data = 'hello world'

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data = 'hola mundo'
    callback(data);
    // this return does nothing
    return data;
  }, 1000);

  console.log('AFTER TIMEOUT CALL');
  // this provides a return value for the main call
  return data;
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc((data) => {
  console.log('INSIDE CALLBACK');
  console.log(`DATA: ${data}`);  
})


console.log('AFTER MAIN CALL');
console.log(result);


