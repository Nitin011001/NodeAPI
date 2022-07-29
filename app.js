const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// port

const port = 3000;
// ---------------------------------------------- middlewares -----------------------------------------------------------

app.use(morgan('dev'));

app.use(express.json()); //midlleware that lie in between the request and response

app.use((req, res, next) => {
  console.log('Middleware says Hello');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
