const express = require("express");
const client_route = express();
const adminController = require("../controller/adminController");
const bodyParser = require("body-parser");
client_route.use(bodyParser.json());
const clientController = require("../controller/clientController");
client_route.use(bodyParser.urlencoded({extended:true}));
const config = require("../config/config")


const session = require("express-session");

client_route.use(session({secret:config.sessionSecret,
    resave:true,
    saveUninitialized:true
    }));


const authentication = require("../middleware/authentication")
client_route.set('view engine', 'ejs');
// client_route.set('views', '/views');

client_route.use(express.static('public'))






client_route.get('/login',authentication.isloggedout, clientController.loadlogin);
client_route.post('/login',clientController.verifyLogin)
client_route.get('/goodselection', authentication.isLoggedin, clientController.goodselection)
module.exports= client_route;