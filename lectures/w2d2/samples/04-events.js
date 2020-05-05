const stdin = process.stdin
const stdout = process.stdout

stdin.setEncoding('utf8')
stdin.setRawMode(true)

stdin.on('data', (data) => {
  if (data === '\u0003') {
    process.exit()
  }
  
  console.log('did you say ' + data);
})