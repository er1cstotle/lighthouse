# Real World HTTP servers 

## Tiny app vs the World

#### what about tiny app is totally legit
- User authentication system
- hashed passwords / user security 
- LOTS of bugs
- GET and POST requests
  - Get for retrieving data and Post for sending data
- Testing 
- Route handling in general 
- Encrypted cookies
- Persistent data *
- Templating
- Express, Ejs, Npm

#### things that are not so legit

- No real database 
- Not hosted, we are just running on localhost
- have only run the code in a local environment... so we arent sure it is even deployable
- no ssl or security certificates
- All routes are in one giant file
- Database redundancy or backups
- We are only using get and post

## HTTP Review 

# what does it mean to be stateless
- No record of the transaction, only send data to end points, connection only exists within a request response cycle

#### What makes up a request

GET
- Method + Path
- Http headers
- cookies
- params and query params/

Post

- Body 
- Formdata

#### what makes up a response 

- payload, if its html... the browser know how to display and render it 
- headers (set-cookie)
- status code, 404 not found

## REST 

- Representational State Transfer

GET
POST
PUT
DELETE

#### Current tiny app

GET /urls
GET /urls/:id
POST /urls
POST /urls/:id/edit(update)
POST /urls/:id/delete

#### restful tinyapp

<!-- get collection -->
GET /urls
<!-- get single entity -->
GET /urls/:id
<!-- Add and new entity to our collection -->
POST /urls
<!-- updating a single entity -->
PUT /urls/:id
<!-- deleting a single entity -->
DELETE /urls/:id



<!-- list all comments for a post -->
GET /posts/:id/comments

GET /comments
<!-- get a single comment on a post -->
GET /posts/:postID/comments/:commentID
POST /posts/:postID/comments/

PUT /posts/:postID/comments/:commentID
DELETE /posts/:postID/comments/:commentID










### break 

## Middleware review and common middleware
## Convert single server.js file into a more realistic app 
## Alternatives to Express 
## Alternatives to Rest 
