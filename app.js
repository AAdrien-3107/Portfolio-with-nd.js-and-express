const express = require('express');
const data = require("./data.json");



const app = express();
//const pugApp = pug();


//middleware setup
app.set('view engine', 'pug');

//route the static files
app.use("/static",express.static("public"));
app.use("/static",express.static("images"));


//setting routes 
app.get("/", (req, res)=>{
    res.locals.projects = data.projects ;
    res.render('index');
});
app.get("/about", function (req, res){
    res.render('about');
});

data.projects.forEach(project => {
    app.get(`/projects/${project.id}`, (req, res) => {
        res.render('project', {project})
})
}) ;

const port = 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`) ;
});

app.use((req, res, next)=>{
    const err = new Error();
    err.status = 404;
    err.message = "Page not found";
    next(err);
})

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render('pageNotFound', {err}) ;
    } else {
        err.message = 'There was an error !' ;
        res.status(err.status).render('error', {err}) ;
    }
    console.log(err.status) ;
    console.log(err.message)
  });
