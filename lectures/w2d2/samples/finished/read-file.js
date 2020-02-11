const fs = require('fs');
const path = require('path');

console.log('before  calling readFile');

fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', function(err, contents) {
  console.log('inside the callback');
  
  console.log(contents);
});

console.log('after calling readFile');