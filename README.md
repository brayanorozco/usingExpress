# usingExpress

Just playing and exploring with Express, I'm going to write here the new things I learn.

Using Exports:

https://youtu.be/hyYbs3SANRo

I'm exporting the const 'connection', so it can be used(import) from another file
By default a module is "encapsulated", so anything you want to use out of that module
you need to tell Node that you are going to use it in another module (file). 

```
//The second one is the most recommended

//module.exports = connection;
//exports.connection = connection;
```
______________________________________________________________

What is middleware?

https://www.youtube.com/watch?v=_GJKAs7A0_4

* Basically, middleware is code or functions running in the server,  between the request and response.
Middleware runs from top to button in our code, and it runs that way until we exit the process or explicity sends a response to the browser.

get = Only runs for "get" requests.
use = Runs for every type of request.

* Code always stops every time that a middleware is executed, that's why we use the function next(), to keep the code running after it ends the execution.

* There are a lot of 3rd part middlewares that can be used to with funcionalities like: cookies, validations, security, etc. Most of those middlewares are made to help us, so we don't need to create one from the scratch because we can use the ones created.

* Express has some middlewares that allow you to request for example, static files, you need to specify the directory where those files (css, images, etc) are going to be accessed in this case.
Example:
app.use(express.static(__dirname + '/public'));
_____________________________________________________________________________

Route method

https://www.youtube.com/watch?v=iM_S4RczozU&t=435s