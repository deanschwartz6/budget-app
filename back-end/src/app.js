const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const noMatchingRoute = require('./errors/noMatchingRoute');
const generalErrorHandling = require('./errors/generalErrorHandling');
const loginRouter = require('./login/login.router');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/logins", loginRouter);

app.use(noMatchingRoute);
app.use(generalErrorHandling);

module.exports = app;