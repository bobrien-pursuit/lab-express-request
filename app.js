//DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun} = req.params;

    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}\!`)
})

// HOMEPAGE
app.get("/bugs", (req, res) => {

    res.send(`99 little bugs in the code`);
})

// EXPORT
module.exports = app;