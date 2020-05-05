const fs = require('fs')
const path = require('path')

const filePath = './example.txt'
const config = {encoding: 'utf-8'}

console.log('before the read');

fs.readFile(filePath, config, (err, data) => {
  if(err){
    console.log('something went wrong... pls send a developer to help us' + err); 
  }

  console.log(data)
})

console.log('after the read');

