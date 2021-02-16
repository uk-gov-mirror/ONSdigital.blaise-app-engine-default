const express = require("express");
const app = express();
const ejs = require("ejs");

app.engine("html", ejs.renderFile);

let {GOOGLE_CLOUD_PROJECT} = process.env;

const TOBI_URL = `https://tobi-ui-dot-${GOOGLE_CLOUD_PROJECT}.nw.r.appspot.com`
const DQS_URL = `https://dqs-ui-dot-${GOOGLE_CLOUD_PROJECT}.nw.r.appspot.com`

app.get("/404", async function (req, res) {
    console.log("Server called");
    res.render("../views/404.html", {TOBI_URL});
});

app.get("/500", async function (req, res) {
    console.log("Server called");
    res.render("../views/500.html", {TOBI_URL});
});

app.get("*", async function (req, res) {
    console.log("Server called");
    res.render("../views/index.html", {TOBI_URL, DQS_URL});
});


const port = process.env.PORT || 8080;
app.listen(port);
console.log("Running on port " + port)
