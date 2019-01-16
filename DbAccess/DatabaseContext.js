var mongoose = require("mongoose");

var mongoDbUrl = "mongodb://localhost:27017/DbOcak";

// mongoose.connect(mongoDbUrl,(err)=>{
//     if (err) {
//         console.log("MongoDb failed started: " + err);
//     }
//     else
//     console.log("MongoDb connected was succesfully " + mongoDbUrl);
// });

mongoose.connect(mongoDbUrl,{useNewUrlParser:true}).then((data)=>{
    console.log("Baglanti basarili");
}).catch((err)=>{
    console.log("MongoDB Failed: " + err);
});


