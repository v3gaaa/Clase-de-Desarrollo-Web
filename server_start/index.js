const express = require('express');

// cors is a middleware that allows the server to accept requests from the client that are coming from a different origin.
const cors = require('cors');

// body-parser is a middleware that parses the request body and makes it available under req.body property.
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

// Create an express app
const app = express();
const port = 3000;


// Use the middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Define routes

app.get('/', (req, res) => {
    res.json({ info: "Hello World From Postgress, Express, Node Js" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

app.use("/users", userRoutes);

