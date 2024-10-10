const express = require("express");
const path = require("path");
const app = express();
const PoRT = 982;
app.get("/", (req,res)=>{
    res.redirect("/Home");
});
app.use("/Home", express.static(path.join(__dirname, "Public/Main")));
app.listen(PoRT, ()=>{
    console.log(`http://localhost:${PoRT}`);
});