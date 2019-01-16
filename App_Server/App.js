var express = require("express");
var app  = express();
var path = require("path");
//#region COMMON TASK
                // 1-) Enable Static Files
                // 2-) Definition jade,pug file 
                // 3-) Connect to database 
                // 4-) Model Creator
                // 5-) Configure Route Manager
//#endregion
//#region 1-) Enable Static Files
app.use("/App_Server/public/assets",express.static(path.join(__dirname,"public/assets")));
//#endregion

//#region  2-) Definition jade,pug file
app.set("view engine","pug");
app.set("Views",path.join(__dirname,"../Views"));
//#endregion

app.listen(8000,()=>{
    console.log("Server is starting....");
});