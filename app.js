//DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

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

   if (num >= 200) {
    res.send(`<a href="/bugs/">Start Over</a>`)
   }
   else {
    res.send(`${num} little bugs left in the code
                <br>
                <br>
                <a href="/bugs/${Number(num)+2}">pull one down, patch it around</a>`)     
        }    
            });
app.get("/pokemon/", (req, res) => {

    res.send(pokemon);

            });

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;

    if(indexOfArray > 0 && indexOfArray < pokemon.length - 1)
            res.send(pokemon[indexOfArray].name);
    else
            res.send(`sorry, no pokemon found at /pokemon/${indexOfArray}`)

})

app.get("pokemon/:operator", (req, res) => {
    const { name } = req.query;
    const { operator } = req.params;
    if (operator === "search") 
        res.send(pokemon.find((foo) => foo[name] === pokemon[name]));
})

// EXPORT
module.exports = app;