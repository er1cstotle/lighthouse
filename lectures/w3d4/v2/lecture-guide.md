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

- why not plain text
- if your database is compromised the hackers have access to everyones account
- hashing
- rainbow table
- one way. if you have the result you cannot reverse it
- salts!
- dont use your own hashing function....
- the ones commonly used are battle tested by cyber security 

# Secure http

- man in the middle attacks - fake routers - proxy
- firesheep
- how to secure the data that you send over the network

HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
Encrypted using asymmetric cryptography which uses a public key and private key system
The public key is available to anyone who wants it and is used to encrypt the communication
The private key is known only to the receiver and is used to decrypt the communication

# Server-side sessions

- store sessions on the server... in a db or a cache of some sort
- no limit on size
- more secure
- control to invalidate someones session

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

