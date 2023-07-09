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
client_route.post('/login',clientController.verifyLogin);
client_route.get('/profile', clientController.profile);
client_route.get('/goodDetails', clientController.goodDetails);
client_route.post('/goodDetails', clientController.details)
client_route.get('/goodselection', authentication.isLoggedin, clientController.goodselection);
client_route.get('/', clientController.availablegoods);
client_route.get('/signup', authentication.isloggedout, clientController.signup);
client_route.post('/signup', clientController.verifyLogin);
client_route.get('/forgetpassword', authentication.isloggedout,clientController.forgetpass);
client_route.post('/forgetpassword', clientController.forgetPasswordVerification);
client_route.get('/resetpassword', authentication.isloggedout, clientController.Loadresetpassword) 
client_route.post('/resetpassword', clientController.resetPassword)





module.exports= client_route;