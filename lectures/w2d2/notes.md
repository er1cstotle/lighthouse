Aloha crew!

Thank you for coming to lecture today. Here are some notes on the key takeaways

Meeting Recording:
https://us02web.zoom.us/rec/share/9ddXLoDXqWhLE4GVs32HYfceBYrBX6a81nQdqfZenUccdDPo7NEsRQFWvsWK28An

Access Password: 9q+@s^e3

Code samples: https://github.com/er1cstotle/lighthouse/tree/master/lectures/w2d2/samples

# Async vs Sync 

### Restaurant as an analogy 
>A synchronous waiter would take an order from a customer deliver it to the cooks and then wait for the food to finish before taking another order.

>A more typical waiter is asynchronous. They take a customers order, deliver it to the chef then continue to take orders until the food finishes, at which point they give the meal to the customer.

### Blocking vs Non-Blocking
- node is single threaded... meaning it can only do one thing at a time. (threading is an advanced topic. I recommend saving that for after graduation. This definition will suffice for now)
- code is said to be ***blocking*** when the execution of any additional javascript must wait for a non-javascript operation to be completed
- ***non blocking*** means that additional javascript is able to run while that non-javascript operation is still running
- synchronous code is blocking
- asynchronous code is non-blocking

### What is the difference between Node and Javascript?

javascript is an language
node is a runtime environment for javascript

### Event loop 

- This is not a topic for today but I thought it important to touch on quickly
- The event loop is what enables Javascript's asynchronous behavior
- The loop pulls things out of the event queue and runs the task then goes back to the queue and runs the next task etc...

### JS examples

`SetTimeout()` and  `SetInterval()`

both of these functions are asyncronous
- they throw their callbacks in the event queue
- they are not precise. They will execute the callback roughly after the specified time.
- they both use the callback pattern to implement the async behaviour. 
- it is important to note that NOT all callbacks are async.

### What are some things that can be handled asynchronously 

- Talking to a database
- Talking to an api
- reading a from the file system
- listening for user input
- setTimeout & setInterval

# Reading from the file system

quick notes:
- `FS` is a package built into node. You can require it in any node program without needing to install anything extra
- The docs are here: https://nodejs.org/api/fs.html

> FS allows node to interact with the hosts file system. (host refers to the system that is running your program. In your case this is vagrant). The host system is technically the outside world to your node program. That means that interacting with it is an I/O operation that node will handle asyncronously


- today we looked at `fs.readfile`

# stdin and events / listeners
- in our final code example we looked at how we can write a program that waits for input from the user
- we saw that the event listener is async

