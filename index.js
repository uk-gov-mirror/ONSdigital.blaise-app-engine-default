const express = require("express");
const app = express();
const ejs = require("ejs");

app.engine("html", ejs.renderFile);

app.get("/", async function (req, res) {
    console.log("Server called");
    res.status(200).json({"Hello": "( ͡° ͜ʖ ͡°)"});
});

app.get("/404", async function (req, res) {
    console.log("Server called");
    res.render("../views/404.html", {});
});

app.get("/500", async function (req, res) {
    console.log("Server called");
    res.render("../views/500.html", {});
});


const port = process.env.PORT || 8080;
app.listen(port);
console.log("Running on port " + port)
