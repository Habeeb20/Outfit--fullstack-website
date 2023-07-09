const mongoose = require("mongoose");

const goodsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    kinds:{
        type:String,
        required:true,
    },

    color:{
        type:String,
        required:true
    }
   
});

module.exports = mongoose.model("Goods", goodsSchema);