var path = require("path");


module.exports = function (app) {

    // A GET Route to /survey which should display the survey page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // should replace this with a static handler
    app.get("/images/:name", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/images/" + req.params.name));
    });

    // A default, catch-all route that leads to home.html which displays the home page. 
    app.get('*', function (req, res) {
        res.redirect("/");
    });

} // end module exports function
