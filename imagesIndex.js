const fs = require('fs')
const Image = require('./models/images')
const express = require('express')
const app = express();




async function storeImage(imagePath, imageName){
    try{
        const imageBuffer = fs.readFileSync(imagePath);

        const image = new Image({
            name: imageName,
            data: imageBuffer,
            format: 'png'
        });

        await image.save();

        console.log("images stored successfully")
    } catch(error) {
        console.error('Error Storing Image in monogoDB: ', error)
    }
    
}

// storeImage('./Logos/acura.png', 'acura.png');
// storeImage('./Logos/alfa romeo.png', 'alfa romeo.png');
// storeImage('./Logos/alpine.png', 'bmw alpina.png');
// storeImage('./Logos/am general.png', 'am general.png');
// storeImage('./Logos/amc.png', 'american motors corporation.png');
// storeImage('./Logos/asc.png', 'asc incorporated.png');
// storeImage('./Logos/aston martin.png', 'aston martin.png');
// storeImage('./Logos/audi.png', 'audi.png');
// storeImage('./Logos/avanti.png', 'avanti motor corporation.png');
// storeImage('./Logos/bently.png', 'bentley.png');
// storeImage('./Logos/bertone.png', 'bertone.png');
// storeImage('./Logos/bitter.png', 'bitter gmbh and co. kg.png');
// storeImage('./Logos/bmw grey.png', 'bmw grey.png');
// storeImage('./Logos/bmw white.png', 'bmw.png');
// storeImage('./Logos/bugatti.png', 'bugatti.png');
// storeImage('./Logos/buick.png', 'buick.png');
// storeImage('./Logos/byd.png', 'byd.png');
// storeImage('./Logos/cadillac.png', 'cadillac.png');
// storeImage('./Logos/Chevrolet.png', 'chevrolet.png');
// storeImage('./Logos/chrysler.png', 'chrysler.png');
// storeImage('./Logos/coda.png', 'coda automotive.png');
// storeImage('./Logos/dacia.png', 'dacia.png');
// storeImage('./Logos/daewoo.png', 'daewoo.png');
// storeImage('./Logos/daihatsu.png', 'daihatsu.png');
// storeImage('./Logos/dodge.png', 'dodge.png');
// storeImage('./Logos/eagle.png', 'eagle.png');
// storeImage('./Logos/evans.png', 'evans automobiles.png');
// storeImage('./Logos/Excalibur.png', 'excalibur autos.png');
// storeImage('./Logos/ferrari.png', 'ferrari.png');
// storeImage('./Logos/fiat.png', 'fiat.png');
// storeImage('./Logos/fisker.png', 'fisker.png');
// storeImage('./Logos/ford.png', 'ford.png');
// storeImage('./Logos/general motors.png', 'general motors.png');
// storeImage('./Logos/genesis.png', 'genesis.png');
// storeImage('./Logos/geo.png', 'geo.png');
// storeImage('./Logos/gmc.png', 'gmc.png');
// storeImage('./Logos/gtr.png', 'gtr.png');
// storeImage('./Logos/honda.png', 'honda.png');
// storeImage('./Logos/hummer.png', 'hummer.png');
// storeImage('./Logos/hyundai.png', 'hyundai.png');
// storeImage('./Logos/infiniti.png', 'infiniti.png');
// storeImage('./Logos/isuzu.png', 'isuzu.png');
// storeImage('./Logos/jaguar.png', 'jaguar.png');
// storeImage('./Logos/jba motors.png', 'jba motors.png');
// storeImage('./Logos/jeep.png', 'jeep.png');
// storeImage('./Logos/kandi.png', 'kandi.png');
// storeImage('./Logos/karma.png', 'karma.png');
// storeImage('./Logos/kia.png', 'kia.png');
// storeImage('./Logos/Koenigsegg.png', 'koenigsegg.png');
// storeImage('./Logos/lada.png', 'lada.png');
// storeImage('./Logos/land rover.png', 'land rover.png');
// storeImage('./Logos/lexus.png', 'lexus.png');
storeImage('./Logos/lincolin.png', 'lincoln.png');
// storeImage('./Logos/lotus.png', 'lotus.png');
// storeImage('./Logos/lucid.png', 'lucid.png');
// storeImage('./Logos/maserati.png', 'maserati.png');
// storeImage('./Logos/maybach.png', 'maybach.png');
// storeImage('./Logos/mazda.png', 'mazda.png');
storeImage('./Logos/mclaren.png', 'mclaren automotive.png');
storeImage('./Logos/mercedes.png', 'mercedes-benz.png');
// storeImage('./Logos/mercury.png', 'mercury.png');
// storeImage('./Logos/merkur.png', 'merkur.png');
// storeImage('./Logos/mg.png', 'mg.png');
// storeImage('./Logos/mini.png', 'mini.png');
// storeImage('./Logos/mitsubishi.png', 'mitsubishi.png');
// storeImage('./Logos/morgan.png', 'morgan.png');
// storeImage('./Logos/nismo.png', 'nismo.png');
// storeImage('./Logos/nissan.png', 'nissan.png');
storeImage('./Logos/Oldsmobile.png', 'oldsmobile.png');
// storeImage('./Logos/pagani.png', 'pagani.png');
storeImage('./Logos/panoz.png', 'panoz auto-development.png');
storeImage('./Logos/Peugeot.png', 'peugeot.png');
storeImage('./Logos/Pininfarina.png', 'pininfarina.png');
// storeImage('./Logos/plymouth.png', 'plymouth.png');
storeImage('./Logos/polester.png', 'polestar.png');
// storeImage('./Logos/pontiac.png', 'pontiac.png');
// storeImage('./Logos/porsche.png', 'porsche.png');
// storeImage('./Logos/ram.png', 'ram.png');
// storeImage('./Logos/renault.png', 'renault.png');
// storeImage('./Logos/rivian.png', 'rivian.png');
storeImage('./Logos/rolls royca.png', 'rolls-royce.png');
storeImage('./Logos/ruf.png', 'ruf automobile.png');
// storeImage('./Logos/saab.png', 'saab.png');
// storeImage('./Logos/saleen.png', 'saleen.png');
// storeImage('./Logos/saturn.png', 'saturn.png');
// storeImage('./Logos/seat.png', 'seat.png');
// storeImage('./Logos/shelby.png', 'shelby.png');
// storeImage('./Logos/skoda.png', 'skoda.png');
// storeImage('./Logos/smart.png', 'smart.png');
// storeImage('./Logos/spyker.png', 'spyker.png');
storeImage('./Logos/sterling trucks.png', 'sterling.png');
// storeImage('./Logos/subaru.png', 'subaru.png');
// storeImage('./Logos/suzuki.png', 'suzuki.png');
// storeImage('./Logos/tesla.png', 'tesla.png');
// storeImage('./Logos/toyota crown.png', 'toyota crown.png');
// storeImage('./Logos/toyota.png', 'toyota.png');
storeImage('./Logos/tvr.png', 'tvr engineering ltd.png');
storeImage('./Logos/vector motors.png', 'vector.png');
// storeImage('./Logos/vinfast.png', 'vinfast.png');
// storeImage('./Logos/volkswagen.png', 'volkswagen.png');
// storeImage('./Logos/volvo.png', 'volvo.png');
// storeImage('./Logos/lamborghini.png', 'lamborghini.png');
storeImage('./Logos/roush performance.png', 'roush performance.png');
storeImage('./Logos/srt.png', 'srt.png');






app.get('/retrieve/:imageName', async (req, res) => {
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
    });

    const port = 3000; // Replace with your desired port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});