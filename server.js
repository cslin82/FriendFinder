const express = require('express');
const path = require('path');

const app = express();


var PORT = process.env.PORT || 3000;

const friendsList = require('./app/data/friends');

console.log(friendsList);

// require('./routing/apiRoutes');
// require('./routing/htmlRoutes');

// app.get('/', (req, res) => res.send('Hello World!'))

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }/`));