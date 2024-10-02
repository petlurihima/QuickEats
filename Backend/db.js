const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://quickEats:glOgCUSkPm3tCOW3@cluster0.8gvve.mongodb.net/quickEats?retryWrites=true&w=majority&appName=Cluster0';

global.foodItemsCache = null;
global.foodCategoryCache = null;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to MongoDB Atlas');

        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        // Cache the data in global variables
        global.foodItemsCache = fetchedData;
        global.foodCategoryCache = foodCategoryData;

    } catch (error) {
        console.error('Error connecting to MongoDB or fetching data:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;
