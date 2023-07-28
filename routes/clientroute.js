const express = require("express");
const client_route = express();
const adminController = require("../controller/adminController");
const bodyParser = require("body-parser");
client_route.use(bodyParser.json());
const clientController = require("../controller/clientController");
client_route.use(bodyParser.urlencoded({extended:true}));
const config = require("../config/config");


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
client_route.post('/product1', clientController.details)
client_route.get('/goodselection', authentication.isLoggedin, clientController.goodselection);
client_route.get('/', clientController.availablegoods);
client_route.get('/signup', authentication.isloggedout, clientController.signup);
client_route.post('/signup', clientController.verifysignup);
client_route.get('/forgetpassword', authentication.isloggedout,clientController.forgetpass);
client_route.post('/forgetpassword', clientController.forgetPasswordVerification);
client_route.get('/resetpassword', authentication.isloggedout, clientController.Loadresetpassword) 
client_route.post('/resetpassword', clientController.resetPassword)




client_route.post('/product3', clientController.details)
client_route.post('/product4', clientController.details)
client_route.post('/product5', clientController.details)
client_route.post('/product6', clientController.details)
client_route.post('/product7', clientController.details)
client_route.post('/product8', clientController.details)
client_route.post('/product9', clientController.details)
client_route.post('/product10', clientController.details)
client_route.post('/product11', clientController.details)
client_route.post('/product12', clientController.details)
client_route.post('/product13', clientController.details)
client_route.post('/product14', clientController.details)
client_route.post('/product15', clientController.details)
client_route.post('/product16', clientController.details)
client_route.post('/product17', clientController.details)
client_route.post('/product18', clientController.details)
client_route.post('/product19', clientController.details)
client_route.post('/product20', clientController.details)
client_route.post('/product21', clientController.details)
client_route.post('/product22', clientController.details)




module.exports= client_route;