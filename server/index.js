const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aga"
});

// app.get("/", (req, res) => {
//     const sqlInsert = "INSERT INTO users (uname, uemail, password, covidvac, infos) VALUES ('alpaslan hamzaoglu', 'alpaslan@gmail.com', 'alpaslan', '1', 'yahsi');"
//     db.query(sqlInsert, (err, result) => {
//         res.send("inserted");
//     })
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
    const uemail = req.body.uemail;
    const password = req.body.password;
    const sqlInsert = "INSERT INTO users (uemail, password) VALUES (?, ?)";
    db.query(sqlInsert, [uemail, password], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});

const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aga"
});

app.listen(3001, () => {
    console.log("running on port 3001");
});