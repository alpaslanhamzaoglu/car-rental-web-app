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

app.post("/changeProfile", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const pass_repeat = req.body.pass_repeat;
    const uname = req.body.uname;
    const covidvac = req.body.covidvac;
    const infos = req.body.infos;

    if(uemail != "") {
        const sqlInsert = "UPDATE users SET uemail = ? WHERE uemail = ?";
        db.query(sqlInsert, [uemail, mail], (err, result) => {
            if(err) {
                console.log(err);
            }
        });
        mail = uemail;
    }
    if(password != "" && pass_repeat != "") {
        const sqlInsert = "UPDATE users SET password = ? WHERE uemail = ?";
        db.query(sqlInsert, [password, mail], (err, result) => {
            if(err) {
                console.log(err);
            }
        });
    }
    if(uname != "") {
        const sqlInsert = "UPDATE users SET uname = ? WHERE uemail = ?";
        db.query(sqlInsert, [uname, mail], (err, result) => {
            if(err) {
                console.log(err);
            }
        });
    }
    if(covidvac != "") {
        const sqlInsert = "UPDATE users SET covidvac = ? WHERE uemail = ?";
        db.query(sqlInsert, [covidvac, mail], (err, result) => {
            if(err) {
                console.log(err);
            }
        });
    }
    if(infos != "") {
        const sqlInsert = "UPDATE users SET infos = ? WHERE uemail = ?";
        db.query(sqlInsert, [infos, mail], (err, result) => {
            if(err) {
                console.log(err);
            }
        });
    }
});

app.post("/ForgotPassword", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const pass_repeat = req.body.pass_repeat;

    if(uemail != "" && password != "" && pass_repeat != "") {
        if(pass_repeat == password) {
            const sqlInsert = "UPDATE users SET password = ? WHERE uemail = ?";
            db.query(sqlInsert, [password, uemail], (err, result) => {
                if(err) {
                    console.log(err);
                }
                if(result) {
                    if(result.changedRows == 0) {
                        res.send({ message: "Mail is not found in database" });
                    } else {
                        res.send({ message: "Successful"});
                    }
                }
            });
        } else {
            res.send({ message: "Passwords are not same" })
        }
    }
    else {
        res.send({ message: "Incomplete information" });
    }
});

app.listen(3001, () => {
    console.log("running on port 3001");
});