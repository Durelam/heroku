const express = require("express");
const app = express();
let port = process.env.PORt || 8080;

app.get("/", (req, res) =>  {
    res.send("Hello world!")
})

app.listen(port, () =>   {
    console.log("OK");
})