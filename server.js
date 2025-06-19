const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MONGO DB CONNECTED'))
    .catch((err) => console.log('MONGO DB ERROR', err));

app.use('/api/auth', require('./routes/auth'));


//new route
app.use('/api/secret', require('./routes/secret')); // for protected route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`);
});