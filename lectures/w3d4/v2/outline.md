# Security and Real World HTTP Servers

## Secure cookies

problem: it is easy to manipulate unencrytpted cookies and fake a log in as someone else on the site.

Solution: encrypt the cookies

encryption

using a cipher to "scramble" data. 

A P P L E
1 1 1 1 1
B Q Q M F


## Secure passwords

Problem with storing passwords in plaintext: if your database is compromised the hackers had access to everyones accounts

partial solution: use a hash

hashing is a one way street

```js
const hashFunc = (input) => {
  const obj = {
    '123': 1,
    '456': 2,
    'password': 3,
    'sadflknklas': 4,
    '3': 5,
    '5': 6
  }

  return obj[input]
}

const hashVal = hashFunc('password')

const salt = genSalt()

// => 'sd89fsdh9hsf'

hashFunc('password' + salt) 
```

## Secure http https

problem

Alice <-> Bob

Alice <-> Carol <-> Bob

Alice -> Carol: hi bob

Carol -> Bob: hi bob

----some point later

Bob -> Carol: lets meet up later at the park

Carol -> Alice lets meet up later at the mall


## Security summary


cookies 

- ALWAYS encrypt the cookies
- you only want to store the userID 


passwords

plain text is too easy for hackers to gain access to your accounts 

hashing is a partial solution 
salting adds to this solution

http 

https help prevent man in the middle attacks 



--- salts are stored in the db with the hash

--- never use your own hashing algo in prod.......

# break (5-10m)

 <!-- REAL WORLD  -->
# Http Review && REST

representational state transfer

puts a **convention** around http the encourages resource based routing

a resource is an entity inside a system 

Posts <<--- resource 

refresher on CRUD

create POST
read   GET
update PUT
destroy DELETE

Create: POST /posts
Read: GET /posts
Read single entity: GET /posts/:id
Update single entity: PUT /posts/:id
Delete single entity: DELETE /posts/:id

Nested resources

Create: POST /posts/:id/comments
Read: GET /posts/:id/comments
Read single entity: GET /posts/:id/comments/:id
Update single entity: PUT /posts/:id/comments/:id
Delete single entity: DELETE /posts/:id/comments/:id

# breaking an express app into modules

# middleware

# alternatives to express


