const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aga"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const sqlInsert = "INSERT INTO users (uemail, password) VALUES (?, ?)";
    db.query(sqlInsert, [uemail, password], (err, result) => {
        console.log(result);
    });
});

app.post("/login", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const sqlInsert = "SELECT * FROM users WHERE uname = ? AND password = ?";

    db.query(sqlInsert, [uemail, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result) {
            res.send(result);
        } else {
            res.send({ message: "Wrong username/password combination" });
        }
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});