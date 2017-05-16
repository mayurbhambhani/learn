const request = require("request");


let getWeather = (lat, lng, resolvecallback) => {
    return new Promise((resolve, reject) => {
    let baseUri = "https://api.darksky.net/forecast";
    let secretKey = "e9e564fb06f1742071ffe40d823fbfaa";
    let uri = `${baseUri}/${secretKey}/${lat},${lng}`;
        request.get(uri, { json: true }, (error, response, body) => {
            if (error) {
                reject(`Something went wrong ${error}`);
            }
            else if (response.statusCode !== 200) {
                reject("Something went wrong. HTTP status code:" + response.statusCode);
            } else if (response && body && body.currently) {
                resolve({
                    summary: body.currently.summary,
                    temperature: (body.currently.temperature - 32) * (5 / 9),
                });
            } else {
                reject(`Something went wrong. Please check the address.`);
            }
        });
    });

};

module.exports = {
    getWeather,
};