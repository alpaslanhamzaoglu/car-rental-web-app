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
let advert;

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

app.post("/buy", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const card = req.body.card;
    const cvv = req.body.cvv;
    const date = req.body.date;

    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(5, 7));
    const day = parseInt(date.substring(8, 10));

    let currentDate = new Date();

    if(name == "" || email == "" || card == "" || cvv == "" || date == "") {
        res.send({ message: "Incomplete Information" });
    } else if(card.length != 16) {
        res.send({ message: "Wrong Credit Card Number" });
    } else if(cvv.length != 3) {
        res.send({ message: "Wrong CVV" });
    } else if(currentDate.getFullYear() > year || (currentDate.getFullYear() == year && currentDate.getMonth() + 1 > month) || (currentDate.getFullYear() == year && currentDate.getMonth() + 1 == month && currentDate.getDate() > day)) {
        res.send({ message: "Card is expired" })
    }
    else {
        const sqlSelect = "SELECT users.uid FROM users WHERE uemail = ?";
        db.query(sqlSelect, [mail], (err, result) => { 
            let uid;
            uid = result[0].uid;

            const sqlInsert = "INSERT INTO pastpurchase (aID, uID, purcdate, creditCardNumber, creditCardCVV, creditCardDate, creditCardName, creditCardEmail) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            db.query(sqlInsert, [advert.aID, uid, date, card, cvv, date, name, email], (err, result) => { 
                console.log(result, err);
                res.send({ message: "Successful" });
            });
        });
    };
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

app.post("/advertCreation", (req, res) => {
    const destination = req.body.destination;
    const departureTime = req.body.departureTime;
    const arrivalTime = req.body.arrivalTime;
    const departure = req.body.departure;
    const carmodel = req.body.carmodel;
    const price = req.body.price;
    const adate = req.body.adate;

    const sqlSelect = "SELECT users.uid FROM users WHERE uemail = ?";
    db.query(sqlSelect, [mail], (err, result) => { 
        let uid;
        uid = result[0].uid;

        if(destination != "" && departureTime != "" && arrivalTime != "" && departure != "" && carmodel != "" && price != "" && adate != "") {
            const sqlInsert = "INSERT INTO advert (destination, deptime, departure, carmodel, price, adate, arrtime) VALUES (?, ?, ?, ?, ?, ?, ?)";
            db.query(sqlInsert, [destination, departureTime, departure, carmodel, price, adate, arrivalTime], (err, result) => { 
                console.log(result, err);
                res.send({ message: "Successful" });
            });
        } else {
            res.send({ message: "Incomplete Information" });
        }
    });
});

app.get("/listing", (req, res) => {
    const sqlInsert = "SELECT * FROM advert";
    db.query(sqlInsert, [], (err, result) => {
        if(err) {
            console.log(err);
        }
        if(result) {
            res.send(result);
        }
    });
});

app.get("/carListing", (req, res) => {
    const sqlInsert = "SELECT * FROM rentcars";
    db.query(sqlInsert, [], (err, result) => {
        if(err) {
            console.log(err);
        }
        if(result) {
            res.send(result);
        }
    });
});

app.get("/deneme", (req, res) => {
    res.send(advert);
});

app.post("/filterSearch", (req, res) => {
    const departure = req.body.departure;
    const destination = req.body.destination;
    const departureTime = req.body.departureTime;
    const arrivalTime = req.body.arrivalTime;
    const adate = req.body.adate;

    console.log(departure);

    const sqlInsert = "SELECT * FROM advert WHERE (destination, deptime, departure, adate, arrtime) VALUES (?, ?, ?, ?, ?)"; 
    db.query(sqlInsert, [destination, departureTime, departure, adate, arrivalTime], (err, result) => {
        res.send(result);
    });

});

app.post("/purchase", (req, res) => {
    advert = req.body.advert;
    res.send({ message: "Success" });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});