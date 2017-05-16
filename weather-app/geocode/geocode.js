const request = require("request");

let geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);
        request.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`, { json: true }, (error, response, body) => {
            if (error) {
                reject(`Something went wrong ${error}`);
            }
            else if (response.statusCode !== 200) {
                reject("Something went wrong. HTTP status code:" + response.statusCode);
            } else if (response && body && (body.status === "OK")) {
                let location = body.results[0].geometry.location;
                let lat = location.lat;
                let lng = location.lng;
                resolve({ lat, lng });
            } else {
                reject(`Something went wrong. Please check the address.`);
            }
        });
    })

};

module.exports = {
    geocodeAddress,
};