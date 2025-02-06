const express = require("express");
const app = express();
const PORT = 8745;
const { dbConnection } = require("./config/config");
const router = require("./routes/taskroutes");

app.use(express.json());

app.use("/", router);

dbConnection()

app.listen(PORT, (req, res) => {
    console.log(`Server Listening On Port http://localhost:${PORT}`)
})