# TinyApp vs the World

### Things not in TinyApp but found in most real world web apps:

- No Database
- No CSS or client side JS
- All the server code in one file (routes, functions, db)
- Security: Passwords are all stored on the server.
- Security & Privacy: secret keys shouldn't be in the source code
- Web Address? It's not running on localhost:8080
- HTTP => HTTPS
- Not just GET and POST, but also other HTTP methods/verbs

### Things that TinyApp does which ARE Real World:

- Email-based User Auth
- password hashing (bcrypt)
- encrypted cookies
- Some Error handling (404 pages, etc)
- Real stack: Node, Express, NPM, EJS

# HTTP Review

- HTTP has a request / response cycle
- HTTP is stateless. Each request response cycle happens in isolation of one another
- There is a clear separation between the client and the server. A client can make a request to a server. But not visa versa

### Clients

- Browsers
- Curl
- Postman/Insomnia
- Mobile apps
- Other servers

### What makes a request?

- URL
- Verb / Method (GET and POST)
- data
  - body
  - headers (cookie)
  - query

### What makes a response

- data (json / html / error?)
- status code
- headers (set-cookie, format etc)

# REST

- REST is Representational State Transfer
- It's a (somewhat?) standardized way of thinking about the communication of data between server <> client over HTTP
- REST is a pattern, a convention to organize our url structure
- REST focuses on resource based routing
- A resource is any object the API can provide information about

> When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.

### Example End Points

By following REST principles, it allows us to design our end points:

| Action                                | http verb | end point                |
| ------------------------------------- | --------- | ------------------------ |
| List all posts                        | GET       | get '/posts'             |
| Get a specific post                   | GET       | get '/posts/:id'         |
| Display the new form                  | GET       | get '/posts/new          |
| Create a new post                     | POST      | post '/posts             |
| Display the form for updating a post  | GET       | get '/posts/:id/update'  |
| Update the posts                      | PUT       | put '/posts/:id          |
| Deleting a specific post              | DELETE    | delete '/posts:id'       |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                  |
| -------------------- | --------- | -------------------------- |
| Create a new comment | POST      | post '/posts/:id/comments  |


### Common Data Format

- HTML, JSON, XML

# Middleware Review

- nothing you haven't seen before
- we built an authentication middleware (a very common middleware in real world servers)
- we used some ROUTER level middlewares

![middleware-diagram](https://cdn-images-1.medium.com/max/1600/0*8HIzvtX-DA3C26uv.png)

# Code Separation

We talked about route separation. Using Express.Router() and putting each resource into its own file (eg: routes/articles.js and routes/comments.js).

### REST alternatives

- GraphQL

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

# Alternatives to Express
- Koa
- Fastify
- Sails
- Koa

### There are non node servers
- Rails 
- Sinatra
- Hanami
- Django 
- Flask
- Laravel
- Symphony


https://expressjs.com/en/guide/using-middleware.html
https://expressjs.com/en/guide/using-middleware.html#middleware.router

https://restfulapi.net/rest-api-design-tutorial-with-example/
