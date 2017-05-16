const yargs = require("yargs");

const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js")

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


let address = argv.a;
console.log(`Fetching weather for ${address}`);

geocode.geocodeAddress(address).then((location) => {
    return weather.getWeather(location.lat, location.lng);
}).then((result) => {
    console.log(JSON.stringify(result, undefined, 3));
}).catch((errorMsg) => {
    console.log(errorMsg);
});
