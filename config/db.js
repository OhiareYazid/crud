const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4, 
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;