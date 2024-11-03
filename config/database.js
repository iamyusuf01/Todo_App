const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    })
       .then(() => console.log('Connected to MongoDB'))
       .catch((error) => {
        console.error('Failed to connect to MongoDB')
        console.error(error.message);
        process.exit(1);
        });
}

module.exports = dbConnect;