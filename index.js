
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Image = require('./models/images');



app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");





mongoose
.connect("mongodb+srv://douqa20:h3zBgOBCSCbP1yew@carsdatabase.pia5oyg.mongodb.net/Cars")
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("there is an error WITH MONGO CONNECTION");
    console.log(err);
  });

  const carSchema = new mongoose.Schema({
    cylinders: Number,
    displ: Number,
    drive: String,
    engId: Number,
    eng_dscr: String,
    fuelType: String,
    fuelType1: String,
    id: Number,
    lv2: Number,
    lv4: Number,
    make: String,
    model: mongoose.Mixed,
    phevBlended: Boolean,
    trany: String,
    VClass: String,
    year: Number,
    baseModel: String,
    createdOn: Date,
    modifiedOn: Date,})


    const Cars = mongoose.model('Car', carSchema);

    
    let makes = []
    
  const carMakes = async()=> {

    const cars = await Cars.find({})

    for(let car of cars){
        
        if(makes.includes(car.make) === false){
            makes.push(car.make)
        }

    }
    
    makes.sort()
    
  }

  carMakes()




app.get("/makes", wrapAsync(async(req, res) => {

    
    res.render("index", { makes })

}))

app.get("/:make", wrapAsync(async(req, res) => {
    const { make } = req.params;
    const cars = await Cars.find({make:make})
    let models = []
    const findModels = async() => {
        for(let car of cars){
            if(models.includes(car.model) === false){
                models.push(car.model)
            }
        }
    }
    findModels()
    

    res.render("models", { make, models })
}))


app.get('/retrieve/:imageName', wrapAsync(async(req, res) => {
  const imageName = req.params.imageName;
  
  try {
      // Find the image by name
      const image = await Image.findOne({ name: imageName });
  
      if (image) {
        // Set the content type to image/jpeg (adjust for other formats)
        res.setHeader('Content-Type', 'image/png');
        // Send the image data as the response
        
        res.send(image.data);
      } else {
        res.status(404).send('Image not found');
      }
    } catch (error) {
      console.error('Error retrieving image:', error);
      res.status(500).send('Internal Server Error');
    }
  }));


  app.get("/:make/:model", wrapAsync(async(req, res) => {
    try {
      const { make, model } = req.params;
      let checkedModel = model
     
      if(isNumeric(checkedModel) === true){
        checkedModel = parseInt(model)
      }
      
      const searchCars = await Cars.find({
        make: make,
        model: checkedModel ,
      });
      const years = [];
      const uniqueCars = new Set();
      for (let car of searchCars) {
        const carKey = `${car.model}-${car.year}`;
  
        if (!uniqueCars.has(carKey)) {
          uniqueCars.add(carKey);
          years.push(car.year);
        }
      }
      years.sort();
  
      res.render("modelOptions", { make, model, years, searchCars });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred.");
    }
  }));
  

app.get("/:make/:model/:year", wrapAsync(async(req, res) => {
  const { make, model, year } = req.params
  let checkedModel = model
      if(isNumeric(checkedModel) === true){
        checkedModel = parseInt(model)
      }
  const cars = await Cars.find({make:make, model:checkedModel, year:year})
  res.render("yearOfModel", { make, model, year, cars})
}))



function isNumeric(input) {
  // Use a regular expression to match digits only
  return /^\d+$/.test(input);
}






  
  app.use((err, req, res, next) => {
    res.send(err)
  })




app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
  });


  function wrapAsync(fn){
    return function (req, res, next) {
      fn(req, res , next).catch(e => next(e))
    }
  }
   
