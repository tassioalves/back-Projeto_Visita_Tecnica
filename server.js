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
// app.use('/address', require('./services/address/routes/main'));
app.use('/branch', require('./services/branch/routes/main'));
// app.use('/comment', require('./services/comments/routes/main'));
// app.use('/company', require('./services/company/routes/main'));
app.use('/course', require('./services/course/routes/main'));
app.use('/discipline', require('./services/discipline/routes/main'));
// app.use('/subscription', require('./services/subscription/routes/main'));
app.use('/user', require('./services/user/routes/main'));
app.use('/userTemp', require('./services/userTemp/routes/main'));
// app.use('/visit', require('./services/visit/routes/main'));

/**
 * Application start
 */
server.listen(PORT, ()=>{
    console.log('HTTP Server listening ' + PORT);
});