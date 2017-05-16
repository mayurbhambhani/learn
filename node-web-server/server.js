const express = require("express");
const hbs = require("hbs");
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
//using a middleware. middleware are just request interceptors
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(now, req.method, req.url);
    next();
});

app.use((req, res, next) => {
    let maintenance = req.url === "/about";
    if (maintenance) {
        res.render("maintenance.hbs", {
            message: "This is the maintenance page."
        })
    } else {
        next();
    }
});
hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
});

//register a handler for get
app.get("/", (req, res) => {
    res.render("home.hbs", {
        header: "Home Page",
        welcomeMsg: "Welcome Puny Human!!"
    })
});
app.get("/json", (req, res) => {
    // request has header, body, args user has sent
    // response is used to send response for data and statut codes.
    // res.send("<h1>Hello Express!!</h1>");
    res.send({
        name: "mayur",
        likes: ["sleeping", "sex"],
    })
});


app.get("/about", (req, res) => {
    res.render("about.hbs", {
        header: "About Page",
    })
})


app.get("/bad", (req, res) => {
    res.send({
        errorMsg: "Unable to fulfil the request"
    });
})


// start server
app.listen(3343, () => {
    console.log("listening on port 3343");
});




