Cool article:  http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/

another cool article: https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c

code samples

# review

### What problem does react solve

- building complex and interactive ui's

### state review

```js

const User =  (props) => {
  return <div>{props.user.email}</div>
}

<User user={user}/>
```
> {email: 'eric@gmail.com'} ----> React ----> <div>eric@gmail.com</div>

# Immutable data 

definition: cannot be changed/ unchanging over time

developer definition: In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

### Benefits of immutability

- Immutable data structure are simpler to construct, test, and use
- Truly immutable values are always thread-safe
- Immutable data is side-effect free (avoids unexpected bugs hard to detect)
- You can quicky compare the previous and the new version

