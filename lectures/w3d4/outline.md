# Intro (2min)

- RTFM
- Learn how to learn

# Tiny app vs the World (15min)

- What are some things that a real server/ a real website / a real app would have that tiny app does not
- What are some things about tiny app that are legit?

#  HTTP Review (30min)

- what is http?
- what does it mean to be stateless?
- what is a Server?
- What is a Client?
- Can a server send a request to a client?
- what makes a request?
- what makes a response?

- what does res.render() do?
- what does res.redirect() do?
- what does res.send() do?

# REST (30min)
- tiny app routes

- Restful architecture???
- What does it stand for?
- what does that mean?
- What is a resource?

- can you drive on the wrong side of the road?
- anyone watch russian dash cams?

- can I build my whole api with DELETE?
- What formats
- how would we build a blog

- they've used cat apis
- Show that server rendered apps respond with html and json apis respond with json

### break (5m)

# REST continued (30mins)

# Middleware review and common middleware (15min) (can drop)

- What is a middleware?
- What are some middlewares we have seen?
- Show middleware diagram, emphasize (the same req object gets passed to each subsequent middleware)
- Is order important for middlewares?

- what happens if we don't call next()

- quickly build user auth middleware
- router level middleware

# Convert single server.js file into a more realistic app (10min) (can drop)
- app.use vs app.use(router)
- move routers to external files

stretch
- change to dependency injection model using factory functions

# Alternatives to Express (2min) (can drop)
# Alternatives to Rest (2min) (can drop)
