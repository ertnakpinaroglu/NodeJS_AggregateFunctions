var HomeRouter = require("../Route/HomeRouter");


module.exports = (app)=>{
    app.use("/",HomeRouter);
}