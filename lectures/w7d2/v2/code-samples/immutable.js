// BAD
let x = 5 

const increment = () => {
  x++
  return x
}
 
const decrement = (x) => {
  x--
  return x
}

console.log(increment() + decrement());
console.log(decrement() + increment());

// a + b !== b + a

const user = {
  email: 'eric@gmail.com',
  friends: [1,2,3,4,5]
}

const changeEmail = (user) => {
  const newObj = {...user}

  newObj.email = 'not-eric@gmail.com'
  return newObj
}

const addFriend = (user) => {
  // spread does not deep clone
  const newObj = {
    ...user,
    friends: [...user.friends] 
  }

  newObj.friends.push(6)
  return newObj
}

const newUser = changeEmail(user)
// eric@gmail.com
console.log(user);
// not-eric@gmail.com
console.log(newUser);

const newerUser = addFriend(user)

console.log(user);
console.log(newerUser);











