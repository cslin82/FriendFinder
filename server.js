const express = require('express');
const path = require('path');

const app = express();


var PORT = process.env.PORT || 3000;

// require('./app/data/friends');
// require('./routing/apiRoutes');
// require('./routing/htmlRoutes');

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));