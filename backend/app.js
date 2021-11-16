var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var morgan = require('morgan')
const passport = require("passport");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
dotenv.config();


var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

const logger = require("./logger");

var app = express()
app.use(cors())
app.set("port", process.env.PORT || 8000);

// log, security setup
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combine"));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}

//static file access setup
app.use(express.static(path.join(__dirname, "public")));

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
app.use(session(sessionOption));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

mongoose
  .connect('mongodb://127.0.0.1:27017/dolpin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} router does not exist`);
  error.status = 404;

  logger.error(error.message);
  next(error);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.status(404).json({
    code: 404,
    message: err.message,
  });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

module.exports = app
