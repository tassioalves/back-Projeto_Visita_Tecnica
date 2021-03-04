const express = require('express');
const config = require('config');
const connectDB = require('./database/connectDB');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || config.get('serverPort');

/**
 * DB connection
 */
connectDB();

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json({extended: false}));

/**
 * Routes
 */
app.use('/user', require('./services/user/routes/main'));

/**
 * Application start
 */
server.listen(PORT, ()=>{
    console.log('HTTP Server listening');
});