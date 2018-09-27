//import { IndexRoute } from "./src/routes/index";
var bodyParser = require("body-parser");
var request = require("request");

const PORT = process.env.PORT || 7000,
    express = require('express');
    path = require('path')
    app = express();
    app.use(bodyParser.json());
    //mount query string parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));

app.use(express.static(path.join(__dirname, 'build')))
var baseURL = '';

app.get('/loans', function(req, res){
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './build'});
});

console.log("Started on port"+PORT)
var router = express.Router();
app.use(router);
app.listen(PORT)
