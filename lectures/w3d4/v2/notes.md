code sample 1: https://github.com/er1cstotle/lighthouse/tree/master/lectures/w3d4/v2/example-security
code sample 2: https://github.com/er1cstotle/lighthouse/tree/master/lectures/w3d4/v2/example-rest

# Secure cookies

- the problem is... we are storing cookies in plain text which makes it extremely easy to edit their cookies and impersonate someone else
- The solution is encryption
- A way of scrambling some text into a unreadable format that can later be de-scrambled 

if we shift every letter in the alphabet by 1
```
Cleartext:        A    P    P    L    E
Key:              4    4    4    4    4
Ciphertext:       E    T    T    P    I
```

cookie-session is a npm package that encrypts cookies for us!!! 

# Secure passwords

- We never want to store passwords as plain text... anyone who gains access to the database will have access to everyones accounts
- hashing is how we solve this problem
- hashing functions are a one way street. You can't reverse engineer a hashed value to see what the original string was
- salts are a unique strings that appended to passwords before hashing
- salts help prevent calculated dictionary/rainbow table attacks

worlds worst hashing function
```
const hash = (input) => {
  const obj = {
    'eric': 1,
    'apple': 2,
    'akj239df: 3
  }

  return obj[input]
}
```

# Secure http

- HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
- it helps defend against man in the middle attacks

Alice wants to talk to bob:

Alice <-> Bob 

But Carol is secretly intercepting and delivering the messages. 
Alice <->  Carol <-> Bob

We can alleviate the dangers of this if we encrypt the messages so that Carol cannot read them

# REST
- It stands for representational state transfer 
- a software architectural style(convention) that encourages resource based routing
- **Https** methods express what you want to do and a **PATH** express what you want to do it

refresher on CRUD 

Create --> POST
Read --> GET
Update --> PUT
Destroy --> DELETE

```
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id

GET /posts
GET /posts/:id
POST /posts
DELETE /posts/:id
PUT /posts/:id

GET /posts/:id/comments
GET /posts/:id/comments/:id
POST /posts/:id/comments
PUT /posts/:id/comments/:id
DELETE GET /posts/:id/comments/:id
```

# breaking an express app into modules

- We can use express routers to break out routes into seperate modules so server.js does not get massive.

# middleware 

- we looked at create a common user auth middleware


# alternatives to express

js web server alternative 

- koa
- sails 
- hapi 

Ruby

- Rails 
- Sinatra
- Hanami

Python 

- Django 
- Flask 

Graphql 

### Links

plaintext offenders: https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv
enigma machine from wwii: https://brilliant.org/wiki/enigma-machine/
salts: https://en.wikipedia.org/wiki/Salt_(cryptography)
salt rounds: https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt
hash functions: https://en.wikipedia.org/wiki/Hash_function
Man in the middle: https://en.wikipedia.org/wiki/Man-in-the-middle_attack
firesheep mozilla extension: https://en.wikipedia.org/wiki/Firesheep
