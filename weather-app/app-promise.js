const yargs = require("yargs");
const axios = require("axios").default;


const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: "address to fetch weather for.",
            string: true,
        }

    })
    .help('help', 'h')
    .alias()
    .argv;

let createLocationUri = (response) => {
    let status = response.data.status;
    if (status === "OK") {
        let location = response.data.results[0].geometry.location;
        let lat = location.lat;
        let lng = location.lng;
        let baseUri = "https://api.darksky.net/forecast";
        let secretKey = "e9e564fb06f1742071ffe40d823fbfaa";
        return `${baseUri}/${secretKey}/${lat},${lng}`;
    } else {
        throw new Error("please check address");
    }
}


let createWeatherObj = (response) => {
    return {
        summary: response.data.currently.summary,
        temperature: (response.data.currently.temperature - 32) * (5 / 9),
    }
}



// flow
let address = argv.a;
console.log(`Fetching weather for ${address}`);

let encodedAddress = encodeURIComponent(address);
let getLocationUri = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(getLocationUri, { "json": true }).then((response) => {
    return axios.get(createLocationUri(response), { "json": true });
}).then((response) => {
    let weather = createWeatherObj(response);
    console.log(weather);
}).catch((error) => {
    console.log(error.message);
})
