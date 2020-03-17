# What problem does react solve?

> It helps us build interactive uis

see article: *boiling react down to a few lines of jquery*

- react is a function of state, meaning: if you give react some state and props. It will give you back a ui tree based on that state.

- always think about why something exists. It will inform you if it is the right tool for you and about why the library does things a certain way.

# Hooks review
> before react hooks were released there was class components. Hooks are just a new way to "hook" into existing react functionality

There are 2 rules when using hooks

Rule 1: Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.
Rule 2: Only Call Hooks from React Functions.

# Pure functions
- A pure function is a function that has no side-effects and will produce the same return value given the same arguments
- We want our functional react components to be pure with respect to their own props.

``` js
const pure = (x, y) => {
  return x + y
}
```
# Side Effects
Any operation which modifies the state of the computer or which interacts with the outside world is said to have a side effect

- console.log
- setting state
- I/O
- modifying the dom directly
- setting up listeners
- setting up socket connections
- setting timers or intervals

# UseEffect
- React provides a hook for us to use when dealing with side effects in functional components
- It runs after react paints the dom.
- you can and should use multiple effect hooks to group logical operations together
- it accepts a dependency array as the second argument that lets you specify when you want the effect to run

gotcha
- be careful you don't get trapped in an infinite loop


# Render + Effects + Cleanup
![effects](https://www.bram.us/wordpress/wp-content/uploads/2019/03/hook-flow.png)


Here's a simple example 
```
React: Give me the UI when the state is 0.
Your component: Here’s the render result:

>You clicked 0 times

Also remember to run this effect after you’re done: () => { document.title = 'You clicked 0 times' }
React: Sure. Updating the UI. Hey browser, I’m adding some stuff to the DOM.
Browser: Cool, I painted it to the screen.
React: OK, now I’m going to run the effect you gave me.

Running () => { document.title = 'You clicked 0 times' }.
```

remember: all functions within a component have the props, state, and surrounding scope for that functional call baked into them. Snapshot in time.

# SPA's
- You need to run 2 apps. One `server` and one `client`
- It is very common to create a JSON api for your server
- we use a library called Axios to make our ajax requests

# Compute data from existing state
- derive state from existing props and state whenever possible. We want to store the minimum amount of state possible

How does react compare to Jquery: http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/
https://reactjs.org/docs/thinking-in-react.html

In-depth blog post on useEffect: https://overreacted.io/a-complete-guide-to-useeffect/
Get thinking in a react mind set: https://reactjs.org/docs/thinking-in-react.html