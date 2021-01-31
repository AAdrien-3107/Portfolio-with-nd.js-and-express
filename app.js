import express from "express";
import pug from "pug";
import data from ("./data.json");

var app = express();



//middleware setup
app.set('view engine', 'pug');

//route the static files
app.use(express.static("public"));

//setting routes 
app.get("/", function (req, res){
    res.send('GET request to the homepage');
});
app.get("/about", function (req, res){
    res.send('GET request to the homepage');
});

app.get(`/projects/${id}`, function (req, res){
    res.send('GET request to the homepage');
});

app.listen(3000);
console.log("Node server running on port %d", app.address().port);
