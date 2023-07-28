const connectdb = require("./dbconnection/dbconnect");
connectdb();
const express = require("express")
const app = express();
const bodyParser = require("body-parser");



app.set('view engine', 'ejs');
const client_route = require("./routes/clientroute");
app.use('/', client_route);

const adminroute = require("./routes/adminroute");
app.use('/', adminroute)




app.get("/product1", function(req, res){
    res.render("product1.ejs")
});


app.get("/product1", function(req, res){
    res.render("product1.ejs")
});

app.get("/product2", function(req, res){
    res.render("product2.ejs")
});

app.get("/product3", function(req, res){
    res.render("product3.ejs")
});

app.get("/product4", function(req, res){
    res.render("product4.ejs")
});

app.get("/product5", function(req, res){
    res.render("product5.ejs")
});

app.get("/product6", function(req, res){
    res.render("product6.ejs")
});

app.get("/product7", function(req, res){
    res.render("product7.ejs")
});

app.get("/product8", function(req, res){
    res.render("product8.ejs")
});

app.get("/product9", function(req, res){
    res.render("product9.ejs")
});

app.get("/product10", function(req, res){
    res.render("product10.ejs")
});

app.get("/product11", function(req, res){
    res.render("product11.ejs")
});

app.get("/product12", function(req, res){
    res.render("product12.ejs")
});

app.get("/product13", function(req, res){
    res.render("product13.ejs")
});

app.get("/product14", function(req, res){
    res.render("product14.ejs")
});

app.get("/product15", function(req, res){
    res.render("product15.ejs")
});

app.get("/product16", function(req, res){
    res.render("product16.ejs")
});

app.get("/product17", function(req, res){
    res.render("product17.ejs")
});

app.get("/product18", function(req, res){
    res.render("product18.ejs")
});

app.get("/product19", function(req, res){
    res.render("product19.ejs")
});

app.get("/product20", function(req, res){
    res.render("product20.ejs")
});

app.get("/product21", function(req, res){
    res.render("product21.ejs")
});

app.get("/product22", function(req, res){
    res.render("product22.ejs")
});

app.get("/product23", function(req, res){
    res.render("product23.ejs")
});

app.get("/product24", function(req, res){
    res.render("product24.ejs")
});

app.get("/product25", function(req, res){
    res.render("product25.ejs")
});

app.get("/product26", function(req, res){
    res.render("product26.ejs")
});

app.get("/product27", function(req, res){
    res.render("product27.ejs")
});

app.get("/product28", function(req, res){
    res.render("product28.ejs")
});

app.get("/product29", function(req, res){
    res.render("product29.ejs")
});

app.get("/product30", function(req, res){
    res.render("product30.ejs")
});

app.get("/product31", function(req, res){
    res.render("product31.ejs")
});

app.get("/product32", function(req, res){
    res.render("product32.ejs")
});

app.get("/product33", function(req, res){
    res.render("product33.ejs")
});

app.get("/product34", function(req, res){
    res.render("product34.ejs")
});


app.get("/product35", function(req, res){
    res.render("product35.ejs")
});


app.get("/product36", function(req, res){
    res.render("product36.ejs")
});

app.get("/product37", function(req, res){
    res.render("product37.ejs")
});


app.get("/product38", function(req, res){
    res.render("product38.ejs")
});

app.get("/product39", function(req, res){
    res.render("product39.ejs")
});

app.get("/product40", function(req, res){
    res.render("product40.ejs")
});
app.get("/product41", function(req, res){
    res.render("product41.ejs")
});

app.get("/product42", function(req, res){
    res.render("product42.ejs")
});


app.get("/product43", function(req, res){
    res.render("product43.ejs")
});


app.get("/product44", function(req, res){
    res.render("product44.ejs")
});

app.get("/product45", function(req, res){
    res.render("product45.ejs")
});

app.get("/product46", function(req, res){
    res.render("product46.ejs")
});


app.get("/product47", function(req, res){
    res.render("product47.ejs")
});

app.get("/product48", function(req, res){
    res.render("product48.ejs")
});

app.get("/product49", function(req, res){
    res.render("product49.ejs")
});


app.get("/product50", function(req, res){
    res.render("product50.ejs")
});

app.get("/product51", function(req, res){
    res.render("product51.ejs")
});

app.get("/product52", function(req, res){
    res.render("product52.ejs")
});

app.get("/product53", function(req, res){
    res.render("product53.ejs")
});

app.get("/product54", function(req, res){
    res.render("product54.ejs")
});

app.get("/product55", function(req, res){
    res.render("product55.ejs")
});

app.get("/product56", function(req, res){
    res.render("product56.ejs")
});


app.get("/product57", function(req, res){
    res.render("product57.ejs")
});

app.get("/product58", function(req, res){
    res.render("product58.ejs")
});


app.get("/product59", function(req, res){
    res.render("product59.ejs")
});


app.get("/product60", function(req, res){
    res.render("product60.ejs")
});


app.get("/product61", function(req, res){
    res.render("product61.ejs")
});


app.get("/product62", function(req, res){
    res.render("product62.ejs")
});

app.get("/product63", function(req, res){
    res.render("product63.ejs")
});


app.get("/product64", function(req, res){
    res.render("product64.ejs")
});

app.get("/product65", function(req, res){
    res.render("product65.ejs")
});

app.get("/product66", function(req, res){
    res.render("product66.ejs")
});

app.get("/product67", function(req, res){
    res.render("product67.ejs")
});

app.get("/product68", function(req, res){
    res.render("product68.ejs")
});

app.get("/product69", function(req, res){
    res.render("product69.ejs")
});

app.get("/product70", function(req, res){
    res.render("product70.ejs")
});






























const port = process.env.PORT || 24000;

app.listen(24000, function(){
    console.log("server is running on port " + port)
})