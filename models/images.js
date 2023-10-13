require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');




mongoose
.connect("mongodb+srv://douqa20:h3zBgOBCSCbP1yew@carsdatabase.pia5oyg.mongodb.net/Cars").then(() => {
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
