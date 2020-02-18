const fs = require('fs')
const path = require('path')

// console.log(path.join(__dirname, 'example.txt'));

console.log('before read');


const contents = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf-8')

console.log(contents);

console.log('after read');
