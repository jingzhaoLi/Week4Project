let express = require('express');
let app = express();

let router = require('./lab3router.js');

app.use('/',router);
app.listen(8080);
