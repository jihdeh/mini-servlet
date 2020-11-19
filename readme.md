### Mini Servlet

This is a mini wrapper written on top of nodeJS's http.server module the provides a small amount set of features for web applications.

It makes available a set HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.


### How to use

GET 

```javascript

  app.get('/endpoint', (req, res) => {

    res.send('hello');
    // res.json({name: "ks"})
  })

  req.query, req.params are made available to get query and url parameters
```

POST with middleware

```javascript

  app.post('/endpoint',
    (req, res, next) => {
      //perform authentication
      next();
    },
    (req, res) => {
      res.send('hello');
    // res.json({name: "ks"})
    }
  )
```

The `next()` function in the middleware also returns an error 500 if a parameter is passed into it.



*@TODO*

 - Unit/Integration testing
 - Combine exposed methods to one and expose as an event emitter function.
 - Performance testing
 - More functionalities
 - build commands on push