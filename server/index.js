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
let pass = "";
let name = "";
let info = "";
let vac = "";

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
    const uname = req.body.uname;
    const covidvac = req.body.covidvac;
    const infos = req.body.infos;

    if(uemail != "" && password != "" && uname != "" && covidvac != "" && infos != "") {
        const sqlInsert = "INSERT INTO users (uemail, password, uname, covidvac, infos) VALUES (?, ?, ?, ?, ?)";
        db.query(sqlInsert, [uemail, password, uname, covidvac, infos], (err, result) => {
            res.send({ message: "Successful"});
        });
    }
    else {
        res.send({ message: "Incomplete information" });
    }
});

app.post("/login", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const sqlInsert = "SELECT * FROM users WHERE uemail = ? AND password = ?";

    db.query(sqlInsert, [uemail, password], (err, result) => {
        if (err) {
            console.log("error");
            res.send({ err: err });
        }

        if (result.length > 0) {
            mail = req.body.uemail;
            res.send(result);
        } else {
            res.send({ message: "Wrong username/password combination" });
        }
    });
});

app.get("/profile", (req, res) => {
    const sqlInsert = "SELECT * FROM users WHERE uemail = ?"
    db.query(sqlInsert, [mail], (err, result) => {
        if(err) {
            console.log(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});