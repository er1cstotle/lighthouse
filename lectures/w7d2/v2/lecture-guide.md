# What problem does react solve

- building complex interactive ui's
- A big way it does this is through how react handles state.
- unidirectional data 
- boiling react down to a few lines of jquery

# state review
- similarity to functions 
- basic prop names
- onclick needs a function just like map needs a call back
- props vs state
- Parent vs child
- react function of state 


# Intro to immutable data 

- pleb: unchanging over time or unable to be changed
- developer definition: In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

- makes code more predictable
- single source of truth

- go into code samples

- Pure function 
- mathematical truths

a + b === b + a

- nested objects
- deep clones
- spread only spreads top level 
- passed by value or passed by reference 
- const and top level 

- why do we want this 

Immutable data structure are simpler to construct, test, and use
Immutable data is side-effect free (avoids unexpected bugs hard to detect)
You can quicky compare the previous and the new version

# Hooks review 5min

# React + Immutable data
- unidirectional data 
- explicit state updates
- state acts as a cache 
- we use it to stay in sync with server data etc

simple counter
stale closure
multiple state hooks
- explicit state updates*** demo
- deeply nested

- what is ui. a way for the user to interact with your application... The power very often lies in the data
- square example

- In a perfect world we would always have state stored in 1 source of truth , that way we dont have to keep it in sync 

- square example - single source of truth

immutable js