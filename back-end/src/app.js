const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res, next) => {
    console.log(req.query);
    const {name} = req.query;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
};

const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const content =  `${greeting}!`;
    res.send(content);
}

app.use(morgan('dev'));

// go to /hello to see output
app.get('/hello', sayHello);

// go to /say/<AnyGreeting> to see output
app.get('/say/:greeting', saySomething);

//error handling if there is no matching route
app.use((req, res, next) => {
    res.send('That route could not be found.');
});

// error handler
app.use((err, req, res, next) => {
    //log error passed in
    console.log(err);
    //send error passed in
    res.send(err);
});

module.exports = app;