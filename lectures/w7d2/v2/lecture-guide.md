# Bobby uno's question

- what is a ui 
- it is a way 
# What problem does react solve

- building complex interactive ui's
- A big way it does this is through how react handles state.

- show mermaid js 

# state review
- react function of state 
- boiling react down to a few lines of jquery
- explicit state updates

# tips: React is very js like
- lots frameworks and libraries are just easy ways leverage powerful patterns rather than having to rebuild them yourself
- often this requires you to start thinking in terms of those patterns
- "the rails way"
- I have found that this is not as much of a struggle with react. if you ask yourself. How would I do this in js? you may find that you arrive at the answer you are looking for

# Intro to immutable data 

- pleb: unchanging over time or unable to be changed
- developer definition: In computing, a persistent data structure is a data structure that always preserves the previous version of itself when it is modified. Such data structures are effectively immutable, as their operations do not (visibly) update the structure in-place, but instead always yield a new updated structure.

- go into code samples


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

- state acts as a cache 
- we use it to stay in sync with server data etc
- In a perfect world we would always have state stored in 1 source of truth , that way we dont have to keep it in sync 

- explicit state updates*** demo

# single page applications 

immutable js