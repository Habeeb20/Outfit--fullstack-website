const express = require("express");
const adminroute = express();
const adminController = require("../controller/adminController");
const bodyParser = require("body-parser");
adminroute.use(bodyParser.json());
const clientController = require("../controller/clientController");
const config = require('../config/config')
adminroute.use(bodyParser.urlencoded({extended:true}));
const session = require('express-session');

adminroute.use(session({secret:config.sessionSecret,
                        resave:true,
                        saveUninitialized:true}))




const authentication = require("../middleware/authentication")
adminroute.set('view engine', 'ejs');
// adminroute.set('views', '/views');

adminroute.use(express.static('public'));

adminroute.get('/profile', authentication.isLoggedin, adminController.profile)
adminroute.get('/editpost/:id', adminController.geteditpost);
adminroute.post('/editpost/:id', adminController.loadedit);
adminroute.get('/deletepost/:id', adminController.deletePost)

module.exports= adminroute