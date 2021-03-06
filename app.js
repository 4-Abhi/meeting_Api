const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const path = require("path");


const authRoutes = require("./routes/authRoutes");
const mettingRoutes = require("./routes/mettingRoutes");
const mettingUser = require("./routes/MettingUserRoutes");

const app = express();
app.use(express.static(__dirname + "/public"))

const mongoose = require("./db/dbConnect");
app.use(cors());

dotenv.config({ path: './config.env' });

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/metting", mettingRoutes);
app.use("/api/mettingUser", mettingUser);

const port = process.env.PORT || 4004;
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}
app.listen(port, () => {
    console.log("Process start in 4004");
})
