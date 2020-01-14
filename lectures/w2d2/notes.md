# 1. Functions Review

### Question: What is a function

Answer: 
- a reusable chunk of code that takes an input(or not) and produces and output
- they are objects, and they can be used as values
- declarations vs expression
  - expressions are not hoisted

### Question What is a callback?

Answer:
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### Question: What is a higher order function?

Answer:
1. a function that takes another function as a parameter
2. or a function that returns another function
3. or both

### What is the difference between Node and Javascript?

javascript is an language

node is a runtime environment for javascript


# 2. Async vs Sync 20m

## Javascript is asynchronous

Restaurant example
>A synchronous waiter would take an order from a customer deliver it to the cooks and then wait for the food to finish before taking another order.

>A more typical waiter is asynchronous. They take a customers order, deliver it to the chef then continue to take orders until the food finishes, at which point they give the meal to the customer.

### Blocking vs Non-Blocking
- node is single threaded... meaning it can only do one thing at a time. (threading is an advanced topic. I recommend saving that for after graduation. This definition will suffice for now)
- code is said to be ***blocking*** when the execution of any additional javascript must wait for a non-javascript operation to be completed
- ***non blocking*** means that additional javascript is able to run while that non-javascript operation is still running
- synchronous code is blocking
- asynchronous code is non-blocking

if you are curious on the topic you can do further reading here.
https://nodejs.org/de/docs/guides/blocking-vs-non-blocking/

### JS examples

`SetTimeout()` and  `SetInterval()`

**Settimeout**: and SetInterval are functions that force a wait / force async behavior.

**SetInterval**: specifies a function to be called repeatedly given the specified interval.

both of these functions are asyncronous
- they throw their callbacks in the event queue
- they are not precise. They will execute the callback roughly after the specified time.
- they both use the callback pattern to implement the async behaviour. 
- it is important to note that NOT all callbacks are async.


### I/O

- This is one thing that node typically handle async. It is one of those non-javascript operations I referred to above
- short for input/output. Typically used to discuss when a program is communicating with "the outside world" perhaps an external data source like a database

### Event loop 

- This is not a topic for today but I thought it important to touch on quickly
- The event loop is what enables Javascript's asynchronous behavior
- The loop pulls things out of the event queue and runs the task then goes back to the queue etc...


# 3. FS 10m

quick notes:
- `FS` is a package built into node. You can require it in any node program without needing to install anything extra
- The docs are here: https://nodejs.org/api/fs.html

> FS allows node to interact with the hosts file system. (host refers to the system that is running your program. In your case this is vagrant). The host system is technically the outside world to your node program. That means that interacting with it is an I/O operation that node will handle asyncronously


- today we looked at `fs.readfile`

# 4. stdin and events / listeners
- in our final code example we looked at how we can write a program that waits for input from the user
- we saw that the event listener is async

<!-- add links to git repo -->
