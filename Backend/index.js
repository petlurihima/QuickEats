const express = require('express');
const app = express();
const port = 8080;
const mongoDB = require('./db');

// Initialize MongoDB connection
mongoDB();

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
