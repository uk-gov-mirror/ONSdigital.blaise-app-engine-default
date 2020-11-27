const express = require("express");
const app = express();

app.get("/", async function (req, res) {
    console.log("Server called");
    res.status(200).json({"Hello": "( ͡° ͜ʖ ͡°)"});
});

const port = process.env.PORT || 8080;
app.listen(port);
