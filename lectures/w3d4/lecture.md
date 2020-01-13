# Real world HTTP Servers

RTFM

# HTTP

- hyper text transfer protocol
- Way for clients and servers to talk to each other
- ssh

### STATELESS

- requests don't know about previous requests or requests coming after


## Requests

- PATH/url /articles
- Action/verb GET/POST/PUT/DELETE
- headers(cookies,  cache)
- data
 - form data

## Response 
- body/data (json, html ,error)
- status code
- headers (set-cookies)


### Request response cycle 

server has to be alive 


1. enter url in browser bar
2. browser does a GET request to the specified path
3. express server gets the incoming request 
4. run through middlewares
5. match paths decide which route to go to and run the handler ***
6. fetch data (article/urls)
7. res.render an ejs view
8. ejs parse and executes and then generates some html
9. send html back to the client
10. checks status code (content html)
11. loads html into the page
12. load separate assets.


### Tiny app vs the Real world

What are some real/important things that tiny app is missing

- database
- remote server
- web address
- network management (load balancers)
- advanced error logging 
- security - https 
- GET/POSTs what about other methods
- All our code is in 1 file

### things that are legit 
- user and hashed/salted passwords
- encrypted cookies
- Using a totally legit stack 
- 404s

# REST
- Its a convention of sorts that guides us on how to structure our server routes
- Ruby on rails adopted in version 2. 

- Representational state transfer


### resource 

GET /urls
GET /urls/new
POST /urls
GET /urls/:url-id
GET /urls/:url-id/edit
PUT /urls/:url-id
DELETE /urls/:url-id

GET /articles/:article-id/comments/:comment-id


## Formats

- html, json, xml









 status codes,



