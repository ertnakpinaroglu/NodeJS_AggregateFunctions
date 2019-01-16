var express = require("express");
var app = express();
var path = require("path");
var tryModel = require("../Models/TryModel");
//#region COMMON TASK
// 1-) Enable Static Files
// 2-) Definition jade,pug file 
// 3-) Connect to database 
// 4-) Model Creator
// 5-) Configure Route Manager
//#endregion
//#region 1-) Enable Static Files
app.use("/App_Server/public/assets", express.static(path.join(__dirname, "public/assets")));
//#endregion

//#region  2-) Definition jade,pug file
app.set("view engine", "pug");
app.set("Views", path.join(__dirname, "../Views"));
//#endregion

//#region 3-) Connect to database
var dbAccess = require("../DbAccess/DatabaseContext");

//#endregion

//#region  4-) Model Creator
var newTrymodel = new tryModel({
    Title: "oylesine",
    Name: "ertan"
});
newTrymodel.save(function (err, data) {
    if (err) {
        console.log("Ekleme yapılırken hata oluştu");
    }
    console.log("Ekleme işlemi bşarılı");
});
//#endregion

//#region 5-) Configure Route Manager 
require("../Route/RouteManager")(app);
//#endregion

app.listen(8000, () => {
    console.log("Server is starting....");
});