var path = require("path");


module.exports = function (app) {


    // A default, catch-all route that leads to home.html which displays the home page. 



    // A GET Route to /survey which should display the survey page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
} // end module exports function
