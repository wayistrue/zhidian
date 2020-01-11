const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.js");

let app = express();
app.listen(8080);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
extended : false
}));

app.use("/public",userRouter);