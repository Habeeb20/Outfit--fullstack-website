const connectdb = require("./dbconnection/dbconnect");
connectdb();
const express = require("express")
const app = express();
const bodyParser = require("body-parser");



// const winston = require("winston");

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     defaultMeta: {service:'user-service'},
//     transports:[

//         new winston.tra
//     ]
// })

app.set('view engine', 'ejs');
const client_route = require("./routes/clientroute");
app.use('/', client_route);

const admin_route = require("./routes/adminroute");
app.use('/',admin_route)


const port = process.env.PORT || 24000;

app.listen(24000, function(){
    console.log("server is running on port " + port)
})