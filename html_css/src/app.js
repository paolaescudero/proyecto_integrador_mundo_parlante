// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors')

const userCookieMiddleware = require('./middlewares/userCookieMiddleware');
const authLocals = require('./middlewares/authLocals');
const cartMiddleware = require('./middlewares/cartMiddleware');
const prevPageMiddleware = require('./middlewares/prevPageMiddleware');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'Mundo Parlante Session',
  resave: false,
  saveUninitialized: true
}));
app.use(cors())
app.use(userCookieMiddleware);
app.use(authLocals);
app.use(cartMiddleware);
app.use(prevPageMiddleware);



// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRoutes');
app.use('/', mainRouter);

const usersRouter = require('./routes/usersRoutes');
app.use('/users', usersRouter);

/* LE decimos a APP que use el router de APIs */
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);



// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;
