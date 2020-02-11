const fs = require('fs');
const path = require('path');


// READ async
console.log('before calling readFile');

fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', function(err, contents) {
  console.log('inside the callback');
  
  console.log(contents);
});

console.log('after calling readFile');




// READ  SYNC
console.log('before calling readFileSync');

const contents = fs.readFileSync(path.join(__dirname, 'file.txt'), 'utf8')
console.log(contents);


console.log('after calling readFileSync');
