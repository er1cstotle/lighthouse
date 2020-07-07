Cool article about state:  http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/

useful article about value vs reference: https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c

code samples: https://github.com/er1cstotle/lighthouse/tree/master/lectures/w7d2/v2/code-samples

# review

### What problem does react solve and how

- building complex and interactive ui's

How
- It allows us to use components which are reusable and encapsulate logic and behaviour 
- It also forces us to work with a unidirectional data flow


- given the sames state and props. react should always return the same tree
```js

const User =  (props) => {
  return <div>{props.user.email}</div>
}

<User user={user}/>
```
> {email: 'eric@gmail.com'} ----> React ----> <div>eric@gmail.com</div>

### Review Components, Props, and State
- Components:
  - The building blocks of a React application
  - Encapsulate application behaviour/logic in its own isolated container
  - By encapsulating behaviour, underlying complexity is abstracted away into a simple interface
  - Allows reuse of components in different parts of the application
  - A large application is built up from many of these small pieces
- Props:
  - Data that is passed into a component from outside itself
  - Received as an argument to the component function
- State:
  - Data that is local to the component
  - Can be passed down to child components as props
  - For state to persist in a functional component, we need to use the `useState` hook


# Immutable data 

definition: cannot be changed/ unchanging over time

developer definition: In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

### Immutable Data Patterns with Arrays and Objects
- Arrays and objects in JavaScript are stored as references which means that we can easily change the original object/array without meaning to

```js
const myObj = { name: 'Alice' };
const otherObj = myObj; // otherObj has the same reference as myObj
otherObj.name = 'Bob';
console.log(myObj); // { name: 'Bob' } oops!!
```

- Array methods that don't return a new array are not "pure" (ie. they mutate the original array)

```js
// mutate the array in place
array.sort();
array.pop();
array.push();
array.splice();

// don't change the original array
const newArr = array.concat();
const newArr = array.map();
const newArr = array.filter();
const newArr = array.slice();
```

- It is a better idea to copy the array/object and then update it

```js
// copy an array with the spread operator
const myArr = [1, 2, 3];
const copy = [ ...myArr ];
copy.push(4); // myArr is not affected

// works the same for objects
const myObj = { name: 'Alice' };
const newObj = { ...myObj };
newObj.name = 'Bob'; // myObj not affected

// it's possible to overwrite keys in a single step
const myObj = { name: 'Alice', age: 27 };
const newObj = { ...myObj, name: 'Bob' };
console.log(newObj); // { name: 'Bob', age: 27 }
```

- The spread operator makes a shallow copy only (the reference to child objects/arrays is copied instead of duplicating the object/array)

```js
const objOne = {
  key: 'value',
  childObj: {
    name: 'Alice',
    likes: ['pizza']
  }
};

// shallow copy
const objTwo = {...objOne};

objTwo.childObj.name = 'Bob';
console.log(objOne.childObj.name); // 'Bob' ooooops!!

objTwo.childObj.likes.push('pineapple');
console.log(objOne.childObj.likes); // ['pizza', 'pineapple'] uh oh
```

- To make sure that we get a true copy, we need to spread each child object and array

```js
const objOne = {
  key: 'value',
  childObj: {
    name: 'Alice',
    likes: ['pizza']
  }
};

// deep copy
const objTwo = { 
  ...objOne,
  childObj: {
    ...objOne.childObj,
    likes: [
      ...objOne.childObj.likes
    ]
  }
};

objTwo.childObj.name = 'Bob';
console.log(objOne.childObj.name); // 'Alice' 😅

objTwo.childObj.likes.push('pineapple');
console.log(objOne.childObj.likes); // ['pizza']
```

### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

#### notes:
- the spread operator only does a shallow copy

# immutability in React 

```js
// Ex.1 How might React know the difference
const state = {};

const diffState = (newState) => {
  const oldState = state;
  if (oldState === newState) {
    console.log('state is the same, no re-render')
  } else console.log('different state, re-renders')
}

state.a = 4;
diffState(state);
```

