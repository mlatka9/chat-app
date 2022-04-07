require('dotenv').config();
require('express-async-errors');

const cors = require('cors');
const express = require('express')
const connectDB = require('./db/connect');

const app = express()

// const port = 5000
// const {auth} = require('./firebase')

connectDB()
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

app.use(express.json());
app.use(cors());

const morgan = require('morgan');
app.use(morgan('tiny'));

const channelsRoutes = require('./routes/channels');
const personsRoutes = require('./routes/persons');
const postsRoutes = require('./routes/posts');

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const {authenticationMiddleware} = require('./middleware/authentication')

app.use('/api/v1/persons', authenticationMiddleware, personsRoutes)
app.use('/api/v1/posts', authenticationMiddleware, postsRoutes)

app.use('/api/v1/channels', authenticationMiddleware, channelsRoutes)




app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app;