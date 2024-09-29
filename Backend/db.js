const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://quickEats:glOgCUSkPm3tCOW3@cluster0.8gvve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = mongoDB;
