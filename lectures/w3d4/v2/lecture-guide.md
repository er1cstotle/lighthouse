# Security and Real World HTTP Servers

# Secure cookies

- first lets see the problem
- people can edit the cookies in the chrome dev console
- if they are not encrypted I can just change my usernames to my friends
- solution encryption
- simple cipher 
- password cipher
- two way process

# Secure passwords

- why not plain text??? if your database is compromised the hackers have access to everyones account
- solution: hashing
- these are a one way street. if you have the result you cannot reverse engineer it to get the input
- dont use your own hashing function....
- the ones commonly used are battle tested by cyber security 

- Rainbow table attacks
- partial solution: salts!

# Secure http

- man in the middle attacks - fake routers - proxy
- firesheep
- how to secure the data that you send over the network

-  Imitation Game, Enigma

# Security summary
Summary:

When to use...
plain cookies:
almost never use plain cookies

maybe for:
language selection
shopping cart for non-logged in users
analytics

encrypted cookies:
do this by default
only store user_id (rest can go in database)

server-side sessions
not worth hassle for small projects
if you need to store lots of session data
if you frequently change session data
you want the ability to invalidate specific users' sessions
Types of Cryptography:
Hashing (one way): Password Encryption
Encryption (two way): Cookie Encryption
Public Key Crypto: HTTPS


# break

# http review 

# rest 

# breaking an express app into modules

# middleware

# alternatives to express

