const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://quickEats:glOgCUSkPm3tCOW3@cluster0.8gvve.mongodb.net/quickEats?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            // No longer need these deprecated options
        });
        console.log('Connected to MongoDB Atlas');

        // Fetching data from the "food_items" collection
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();

        // console.log('Fetched Data:', fetchedData); // Log the fetched data
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;
