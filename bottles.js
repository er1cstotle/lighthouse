const recycle = (bottles, caps) => {
  const newBottles = Math.floor(bottles / 2) + Math.floor(caps / 4)

  const bottlesRemaining = bottles % 2
  const capsRemaining = caps % 4

  const bottlesToExchange = bottlesRemaining + newBottles
  const capsToExchange = capsRemaining + newBottles  
  
  if (bottlesToExchange >= 2 || capsToExchange >= 4) {
    return newBottles + recycle(bottlesToExchange, capsToExchange )
  } else {
    return newBottles
  }
}

console.log(5 + recycle(5, 5))
console.log(10 + recycle(10, 10))
console.log(15 + recycle(15, 15))

