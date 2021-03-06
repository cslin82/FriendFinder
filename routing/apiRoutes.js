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

        // console.log(req.body.scores);

        var myScores = req.body.scores.map(num => parseInt(num, 10));

        function compatScore(scoresA, scoresB) {
            var score = 0;
            for (let i = 0; i < scoresA.length; i++) {
                score += Math.abs(scoresA[i] - scoresB[i])
            }
            return score;
        }

        var compats = [];

        for (let j = 0; j < friendsList.length; j++) {
            const element = friendsList[j];
            compats.push(compatScore(myScores, element.scores))
            friendsList[j].compat = compatScore(myScores, element.scores);
        }

        // console.log('compats', compats);
        // console.log('compats sorted', compats.sort());

        // does not properly account for multiple equal matches
        res.json(friendsList.find(friend => friend.compat === Math.min(...compats)));

    });

}
