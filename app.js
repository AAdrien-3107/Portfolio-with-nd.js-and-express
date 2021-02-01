const express = require('express');
const pug = require('pug');
const aboutRouter = require("./routes/about");
//import data from ("./data.json");

const app = express();
//const pugApp = pug();


//middleware setup
app.set('view engine', 'pug');

//route the static files
app.use(express.static("public"));
app.use('/about', aboutRouter)

//setting routes 
app.get("/", (req, res)=>{
    res.render('layout');
});
app.get("/about", function (req, res){
    res.send('GET request to the homepage');
});

//app.get(`/projects/${id}`, function (req, res){
//    res.send('GET request to the homepage');
//});

app.listen(3000);
//console.log("Node server running on port %d", app.address().port);
