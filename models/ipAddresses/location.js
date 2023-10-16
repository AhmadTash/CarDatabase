const mongoose = require("mongoose");
const axios = require("axios");








const locationSchema = new mongoose.Schema({
    ip: String,
    country: String,
    region: String,
    type: String,
    time: String
});

const Location = mongoose.model("Location", locationSchema);


async function saving(ip, country, region, type){
const newlocation = new Location({
    ip: ip,
    country: country,
    region: region,
    type: type,
    time: Date()
})

await newlocation.save()

}





const getLocation = async(ip) => {
    const location = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_BH68ACXzteSjksNqGt0OsdVUNtSx1&ipAddress=${ip}`)
    const checkVPN = await axios.get(`https://proxycheck.io/v2/${ip}?&risk=1&vpn=1`)
    const data = location.data
    saving(data.ip, data.location.country, data.location.region, checkVPN.data[ip].type)
}



module.exports = getLocation
