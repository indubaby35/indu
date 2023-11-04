const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: 'https://localhost:8001'
};

app.use(cors(corOptions));
app.use(express.json()); // Use express.json() instead of express.json
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded() instead of express.urlencoded

// Testing API
app.get('/', (req, res) => {
    res.json({ message: 'hello from API' });
});

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
