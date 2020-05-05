const num = 100000

const starttime = new Date()
console.log('before the loop');

for (let i = 0; i < num; i++) {
  const now = new Date()
  console.log(now.getTime());
}

const endtime = new Date()

const timeElapsed = endtime - starttime
console.log(`after the loop it took ${timeElapsed} milliseconds`);
