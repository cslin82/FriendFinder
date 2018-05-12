// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
const friendsList = require('./../app/data/friends');
var bodyParser = require('body-parser');


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

module.exports = function (app) {

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req);

        console.log(req.body);
        res.json(req.body)

    });

}
