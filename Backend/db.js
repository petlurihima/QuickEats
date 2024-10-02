const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://quickEats:glOgCUSkPm3tCOW3@cluster0.8gvve.mongodb.net/quickEats?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to MongoDB Atlas');

        // Fetching data from the "food_items" collection
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();

        if (fetchedData.length === 0) {
            console.log("No data found in the 'food_items' collection.");
        } else {
            global.food_items = fetchedData;
            // console.log("Fetched food_items:", global.food_items); // This should print the data
        }

    } catch (error) {
        console.error('Error connecting to MongoDB or fetching data:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;
