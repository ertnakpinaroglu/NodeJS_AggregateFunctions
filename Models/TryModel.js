var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var newSchema = new Schema({
    Title:{type:String,required:[true,"Bu alanı boş bırakamazsınız"]},
    Name:String
});

module.exports  = mongoose.model("TrySchema",newSchema);
