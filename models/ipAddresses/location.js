const mongoose = require("mongoose");
const axios = require("axios");








const locationSchema = new mongoose.Schema({
    ip: String,
    country: String,
    region: String,
});

const Location = mongoose.model("Location", locationSchema);


async function saving(ip, country, region){
const newlocation = new Location({
    ip: ip,
    country: country,
    region: region
})

await newlocation.save()

}





const getLocation = async(ip) => {
    const location = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_BH68ACXzteSjksNqGt0OsdVUNtSx1&ipAddress=${ip}`)
    const data = location.data
    saving(data.ip, data.location.country, data.location.region)
}



module.exports = getLocation
