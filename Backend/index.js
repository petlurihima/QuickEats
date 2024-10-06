const express = require('express');
const cors = require('cors');  // Import CORS
const app = express();
const port = 8080;
const mongoDB = require('./db');

// Initialize MongoDB connection
mongoDB();

// Middleware to handle CORS
app.use(cors({
    origin: 'http://localhost:3000',  
    credentials: true  
}));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
