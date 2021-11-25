const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');
const session = require('express-session');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aga"
});

let mail = "";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

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
            mail = req.body.uemail;
            res.send(result);
        } else {
            res.send({ message: "Wrong username/password combination" });
        }
    });
});

app.get("/profile", (req, res) => {
    res.send({ title : mail });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});