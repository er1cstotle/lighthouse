# TinyApp vs the World

### Things not in TinyApp but found in most real world web apps:

- No Database
- No CSS or client side JS
- All the server code in one file (routes, functions, db)
- Security: Passwords are all stored on the server.
- Security & Privacy: secret keys shouldn't be in the source code
- Web Address? It's not running on localhost:8080
- HTTP => HTTPS
- UX is subpar (form errors, etc.)
- Automated Testing!
- Not just GET and POST, but also other HTTP methods/verbs

### Things that TinyApp does which ARE Real World:

- Email-based User Auth
- password hashing (bcrypt)
- encrypted cookies
- Some Error handling (404 pages, etc)
- Real stack: Node, Express, NPM, EJS

# HTTP Review

- HTTP has a request / response cycle
- HTTP is stateless
- There is a clear separation between the client and the server. A client can make a request to a server. But not visa verse

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

### What happens when a browser makes a request to the server

#### GET

1. User navigates to https://news.ycombinator.com (by typing the URL in the navbar)
2. Browser makes makes a GET request to https://news.ycombinator.com
3. Express gets the request and needs to decide which route to invoke (uses the URL/path and verb/method)
4. Express calls ONE of our MANY route handlers by CALLING that callback function. It passes in 2 things (request object, and response object)
5. Our handler code/function will render the form using EJS
6. res.render('articles', { templateVars });
7. Express/EJS will read the .ejs file from disk
8. Any ejs tags (<% %>) are interpreted 
9. Result is a string of HTML from the EJS file
10. Express will use http to send the response data/headers/etc that we set down as a response
11. Browser receives the RESPONSE (200)
12. Parses and renders the HTML
13. Downloads other dependencies (links to CSS, JS, images, videos) 

#### POST

1. User fills out the form for a new article and hits submit
2. Browser looks at the form details (method and action attributes)
3. Browser uses those 2 things to construct a request (POST to /articles)
4. All the form fields are sent up as an encoded string (form url encoding) (text=cool&author=eric)
5. Express receives the POST request with the form body/data
6. BodyParser takes that form data string above and turns it into a nice object for us to easily access that data: {text: "cool", author: "eric"}
8. Express executes our callback function (handler) for the post request
9. Our code is able to access the form data using req.body
10. Save the data (insert into a "database")
11. respond using res.redirect("/articles") which sends back a redirect response (302, Location: /articles)
12. Browser sees the 302 and looks for Location header in the response and performs a GET request to that location (/articles).
13. Another request is made by the browser (following the redirect)
14. Again: Goes to Express Routing -> Express Middleware -> Our Callback Code -> EJS -> HTML -> Browser

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


## References

Interesting links
About REST and naming convention : https://restfulapi.net/resource-naming/
Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
Method override : https://www.npmjs.com/package/method-override
Express middleware : https://expressjs.com/en/guide/using-middleware.html
JSON APIs responses : https://jsonapi.org/examples
WordPress REST API : https://developer.wordpress.org/rest-api/
https://restfulapi.net/
Video: https://thoughtbot.com/upcase/videos/rest
Reading: https://codewords.recurse.com/issues/five/what-restful-actually-means
