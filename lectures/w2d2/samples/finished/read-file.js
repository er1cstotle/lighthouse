const fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', function(err, contents) {
  console.log(contents);
});

console.log('after calling readFile');