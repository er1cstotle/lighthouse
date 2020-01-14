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
  const data = 'hello world'

  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data = "goodbye world";
    callback();
    // as per question 3, what if we return data below? Like so:
    // return data;
  });

  console.log('AFTER TIMEOUT CALL');
  // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
  // return data;
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');