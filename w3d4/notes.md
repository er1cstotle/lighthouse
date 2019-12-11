# Review HTTP (30min)
- what is http?
- what makes a request?
- what makes a response?
- Review: GET/POST/GET flow
  - will have pre built app for this

# Rest (30min)
- what is rest
  <!-- - Rails rest vs true rest --> maybe
  naming convention, what is the data and what am i doing

- revisit the app shown in http review but this time look at it thru a rest context

- alternatives to rest
<!-- - give rest white paper -->

### break (5m)

take questions and see what people want to continue

choose from 1 or 2 options 

# Middleware review and common middleware (20min)

- What is a middleware?
- What are some middlewares we have seen ?
- Show middleware diagram, emphasize (the same req object gets passed to each subsequent middleware)

- what is app.use()?
- quickly build user auth middleware

stretch 
- 

probably do delete and put 

# Convert single server.js file into a more realistic app (with organization) (10min)
- app.use vs app.use(router)
- move routers to external files

stretch
- change to dependency injection model using factory functions


# JSON apis. touch on SPA vs server rendered apps (10min)
- they've used cat apis
- Show that server rendered apps respond with html and json apis respond with json

stretch 
- browser requests vs ajax requests 

# Alternatives to Express (10min)
- Read out list of alternatives
- List out some of the benefits of each and why to choose one over the other

- Koa
- Fastify
- Sails
- Koa

## There are non js servers

- Rails 
- Sinatra
- Hanami
- Django 
- Flask
- Laravel
- Symphony

REST and Routers are the main takeaways


We spent the first half reviewing the HTTP+Express workflow for submitting a new "article" to a HackerNews like site.

0. TinyApp vs the World
Things not in TinyApp but found in most real world web apps:

No Database
No CSS or client side JS
All the server code in one file (routes, functions, db)
Security: Passwords are all stored on the server.
Security & Privacy: secret keys shouldn't be in the source code
Web Address? It's not running on localhost:8080
HTTP => HTTPS
UX is subpar (form errors, etc.)
Automated Testing!
Not just GET and POST, but also other HTTP methods/verbs
Things that TinyApp does which ARE Real World:

Email-based User Auth
password hashing (bcrypt)
encrypted cookies
Some Error handling (404 pages, etc)
Real stack: Node, Express, NPM, EJS


1. HTTP Review
Review: The most important things about HTTP.

What makes a request?

URL and Verb / Method (GET and POST)

What makes a response?

Data (content)
Status code (number)
Other headers/metadata (format, caching, cookies, etc)
Review: GET/POST/GET flow
When creating new data, we first request a form, then submit it, and then are redirected. But what's happening underneath?

User navigates to /articles/new on the site (clicks a link or types the URL in the navbar)
Browser makes makes a GET request to /articles/new
Express gets the request and needs to decide which route to invoke (uses the URL/path and verb/method)
Express calls ONE of our MANY route handlers (like the one above) by CALLING that callback function. It passes in 2 things (request object, and response object)
Our handler code/function will render the form using EJS
res.render('articles_new', { data });
Express/EJS will read the .ejs file from disk
Any ejs tags (<% %>) are interpreted and removed because browsers don't understand them. This is server side logic to decide HOW to render the HTML and what to render when.
Run through the ejs template with any dynamic data that we pass in
Result is a string of HTML from the EJS file
Express will use http to send the response data/headers/etc that we set down as a response
The http library uses tcp and therefore the tcp module to communicate with the clients
Browser receives the response (200 with the form data), and renders that HTML
Parses the HTML
Downloads other dependencies (links to CSS, JS, images, videos, etc)
In our case Bootstrap CSS and JS
User fills out the form for a new article and hits submit
Browser looks at the form details (method and action attributes)
Browser uses those 2 things to construct a request (POST to /articles)
All the form fields are sent up as an encoded string (form url encoding)
title=Trumpsomething&author=KV&category=US+Politics
Express receives the POST request with the form body/data
BodyParser takes that form data string above and turns it into a nice object for us to easily access that data: {title: "Trumpsomething", author: "KV", ...}
Our code is able to access the form data using req.body
Express executes our callback function (handler) for the post request
Our code will:
validate the data
insert the data into a "database" (object)
respond using res.redirect("/articles") which sends back a redirect response
HTTP 302 with a header Location: /articles
Browser sees the 302 and looks for Location header in the response and performs a GET request to that location (/articles).
Another request is made by the browser (following the redirect)
Again: Goes to Express Routing -> Express Middleware -> Our Callback Code -> EJS -> HTML -> Browser


2. REST
REST is Representational State Transfer

It's a (somewhat?) standardized way of thinking about the communication of data (eg: objects) between server <> client over HTTP

Disclaimer: A lot of what we teach here and is talked about in the dev community is influenced by what we'll call here "Rails REST". It's not all from the original whitepaper.

ARTICLES

Create POST /articles
Read (collection) GET /articles?page=1
Read (detail) GET /article(s)/:id
Update PUT/PATCH /articles/:id
Delete DELETE /articles/:id

COMMENTS (Nested Resource)

Create POST /article(s)/:articleid/comments
Read (collection) GET /article(s)/:articleid/comments
Read (detail) GET /article(s)/:articleid/comments/:id
Update PUT/PATCH /article(s)/:articleid/comments/:id
Delete DELETE /article(s)/:article_id/comments/:id

LIKES FOR COMMENTS

Create POST /comments/:id/likes

To learn more about REST, take a look at these two articles when you have some time:

Video: https://thoughtbot.com/upcase/videos/rest
Reading: https://codewords.recurse.com/issues/five/what-restful-actually-means
3. Code Separation
We talked about route separation. Using Express.Router() and putting each resource into its own file (eg: routes/articles.js and routes/comments.js).

5. Express in The Wild
Take a look at (but do not use!) this repo to see how Express and MANY of the other node packages you've used are actually included in this popular starter code.

https://github.com/sahat/hackathon-starter


why no put and delete in tweeter?
is this code things that students will be familiar with 