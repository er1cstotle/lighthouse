// let a = 1
// let b = a 
// a = 2

// console.log(b);

// let a = [1,2,3]
// let b = a
// a = [1,2,3,4]

// console.log(b);

// let a = [1,2,3]
// let b = a
// a[0] = 5

// console.log(b);

// let a = [1,2,3]
// let b = a
// b[0] = 5

// console.log(a);

// const allows mutation... it only prevents re assignment
// const a = [1,2,3]
// const b = a
// b[0] = 5

// console.log(a);

// when does this become a problem
// let x = 5 

// const increment = () => {
//   x++
//   return x
// }
 
// const decrement = (x) => {
//   x--
//   return x
// }

// console.log(increment() + decrement());
// console.log(decrement() + increment());

// const user = {
//   email: 'eric@gmail.com',
//   friends: ["Tony","Steve","Bruce","Natasha"]
// }

// const changeEmail = (user) => {
//   const newObj = {...user}

//   newObj.email = 'not-eric@gmail.com'
//   return newObj
// }

// const addFriend = (user) => {
//   // spread does not deep clone
//   const newObj = {
//     ...user,
//     friends: [...user.friends] 
//   }

//   newObj.friends.push("Thanos")
//   return newObj
// }

// const newUser = changeEmail(user)
// // eric@gmail.com
// console.log(user);
// // not-eric@gmail.com
// console.log(newUser);

// const newerUser = addFriend(user)

// console.log(user);
// console.log(newerUser);



