# First Node

...

## Filesystem

The official documentation of Node : https://nodejs.org/dist/latest-v8.x/docs/api/

And the documentation about filesystem : https://nodejs.org/dist/latest-v8.x/docs/api/fs.html

Here are the instructions:

1. create a new file `script.js`
2. in `script.js` write a program which:
    - create a file `toto.txt`
    - write `Salut Toto !` inside `toto.txt`
3. _Bonus_ in `script.js` improve the program so that it can:
    - list and display the content of the current folder using synchronous functions
    - list and display the content of the current folder using asynchronous functions

## Middleware

We are going to submit a form to Node and parse the received data.
Help from Stackoverflow: https://stackoverflow.com/a/12008719
Doc from Express: http://expressjs.com/fr/4x/api.html#req.body

Instructions:

1. create a web server using Node
2. serve an index page with a form:
    - the form must POST data to the `/auth` URL
3. create an handler for `/auth` which display the data received

We are going to restrict access to `/private` using
`http-auth`: https://www.npmjs.com/package/http-auth

Instructions:

1. install `http-auth` using npm
2. initialize the `http-auth` middleware
3. create a new handler for `/private` and register the middleware


