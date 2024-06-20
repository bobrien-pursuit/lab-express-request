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
app.get("/bugs/", (req, res) => {

    res.send(`99 little bugs in the code
                <br>
                <br>
                <a href="/bugs/101">pull one down, patch it around</a>`)
            
            });
app.get("/bugs/:num", (req, res) => {
   const { num } = req.params;

    res.send(`${num} little bugs left in the code
                <br>
                <br>
                <a href="/bugs/${Number(num)}">pull one down, patch it around</a>`)     
            
            });


// EXPORT
module.exports = app;