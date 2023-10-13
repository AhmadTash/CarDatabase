require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');




mongoose
.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer, 
  format: String, 
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
