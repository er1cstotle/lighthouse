const getName = (cb) => { //1
  return setTimeout(() => { //3
    const name = 'Eric' //4
    cb(name)//5
  }, 3000);
}

const value = getName((name) => { //2
  console.log(name); //6
})


console.log(value);
