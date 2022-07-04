require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const passport = require('passport');
const session = require('express-session');
const LocalPassport = require('passport-local');

const { Strategy } = LocalPassport;
const MongoStore = require('connect-mongo');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const createHttpError = require('http-errors');
const indexRouter = require('./routes/index');
const initializeDatabaseConnection = require('./database/config');
const { passportCallback } = require('./passport');
const { APP_PUBLICURL, MONGODB_URL, SECRET_KEY, SESSIONEXPIRATIONTIME, PORT } = require('./constants');

const app = express();

initializeDatabaseConnection();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    credentials: true,
    origin: `${APP_PUBLICURL}`,
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  }),
);
app.use(session({
  store: MongoStore.create({
    mongoUrl: MONGODB_URL,
  }),
  secret: SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  rolling: true, // forces resetting of max age
  cookie: {
    maxAge: parseInt(SESSIONEXPIRATIONTIME, 10),
  },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API for User-Categories',
    version: '1.0.0',
    description:
      'This API is made with Express. It retrieves data from mongodb.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Nikhil Shinde',
      url: 'https://deqode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/v1',
      description: 'Development server',
    },
  ],
}

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

passport.serializeUser(async (user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    passportCallback,
  ),
);

// app.use((req, res, next) => {
//   next(createHttpError(404));
// });

// app.use((err, req, res) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   });
// });

app.listen(PORT, () => {
  console.log('Server is running on port : ', PORT);
});
module.exports = app;
