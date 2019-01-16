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

// //#region  4-) Model Creator
// var newTrymodel = new tryModel({
//     Title: "oylesine",
//     Name: "ertan"
// });
// newTrymodel.save(function (err, data) {
//     if (err) {
//         console.log("Ekleme yapılırken hata oluştu");
//     }
//     console.log("Ekleme işlemi bşarılı");
// });
//#endregion

//#region 5-) Configure Route Manager 
require("../Route/RouteManager")(app);
//#endregion

// tryModel.find({},(err,result)=> {
//     if (err) {
//         console.log("Hiçbir Data Bulunamadı");

//     }
//     console.log(result);
//     console.log("####################################################");
// });

// tryModel.findOne({"Title":"oylesine"},(err,res)=> {
//     if (err) {
//         console.log("İşlem Hatalı");
//     }
//     console.log(res);
// });

// tryModel.findById("5c3f380e44e9982b5cc41ffe",(err,res)=> {
// if (err) {
//     console.log("Hatalı işlem");
// }
// console.log(res);
// });

// tryModel.findByIdAndUpdate("5c3f380e44e9982b5cc41ffe",{Title:"guncellenen isim"},(err,res)=>{
//     if (err) {
//         console.log("Güncellenirken hata oluştu");
//     }
//     else {
//         console.log("Güncelleme başarılı");
//     }
// });

// tryModel.findByIdAndRemove("5c3f380e44e9982b5cc41ffe", (err, res) => {
//     if (err) {
//         console.log("İşlem Hatalı");
//     } else
//         console.log(res);
// });

// tryModel.find({},(err,res)=> {
//     console.log(res);
// }).sort({Title:-1});

// tryModel.aggregate([{
//     $match: {
//         Title: "oylesine"
//     }
// }], (err, result) => {
//     console.log(result);
// });


// tryModel.aggregate([
//     {
//         $group:{
//             _id:"$Category",
//             adet:{$sum:1}
            
//         }
//     }
// ],(err,result)=>{
//     if (err) {
//         console.log("İşlemde bir hata oluştu"+ err);
//     }
//     else{
//         console.log(result);
//     }
// })

tryModel.aggregate([
     {
         $project:{
             Title:true,
             Name:true
         }
     }
],(err,result)=>{
    if (err) {
        console.log("Hatalı işlem yapıldı");
    }
    else{
        console.log(result);
    }
});

app.listen(8000, () => {
    console.log("Server is starting....");
});