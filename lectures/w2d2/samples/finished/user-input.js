const stdin = process.stdin

// read about these 2 lines in the instructions for todays exercises :)
stdin.setEncoding('utf8');
stdin.setRawMode(true);

stdin.on('data', (data) => {
  if (data === '\u0003') {
    process.exit();
  }

  console.log(data);
});

stdin.on('end', () => {
 process.stdout.write('end');
});