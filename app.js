const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');

//Load Env Vars
dotenv.config({path: './config/.env'});

// Datebase connection
connectDB()

// Load route files
const persons = require('./person.route');

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api', persons)

app.use(errorHandler)

const server = app.listen(port, () => {
    console.log(`server running in on port ${port} successfully`);
});

//  Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //  Close server &exit process
    server.close(() => process.exit(1)); 
});

