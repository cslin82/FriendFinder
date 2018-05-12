const express = require('express');
// const path = require('path');

const bodyParser = require('body-parser');

const app = express();


var PORT = process.env.PORT || 3000;

const friendsList = require('./app/data/friends');

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }/`));