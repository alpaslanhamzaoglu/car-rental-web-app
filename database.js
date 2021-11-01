var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aga"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE aga", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (uID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, uname VARCHAR(255), uemail VARCHAR(255), password VARCHAR(255), covidvac BIT, infos text)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE admin (uID INT, adminlevel VARCHAR(255), FOREIGN KEY(uID) REFERENCES users(uID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE driver (uID INT, dID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, driverlicense VARCHAR(255), FOREIGN KEY(uID) REFERENCES users(uID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE review (uID INT, dID INT, star INT, comment text, FOREIGN KEY(uID) REFERENCES users(uID), FOREIGN KEY(dID) REFERENCES driver(dID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE advert (aID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, dID INT, destination VARCHAR(255), estimatedtime time(0) NOT NULL, departure VARCHAR(255), carmodel VARCHAR(255), price DOUBLE, adate DATE, FOREIGN KEY(dID) REFERENCES driver(dID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE pastpurchase (aID INT, uID INT, pID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, purcdate DATE, FOREIGN KEY(uID) REFERENCES users(uID), FOREIGN KEY(aID) REFERENCES advert(aID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE rentcars (cID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, rentcarmodel VARCHAR(255), availability BOOL, rentprice INT, rentdate DATE, deliverdate DATE)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE rentcarpurchase (rID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cID INT, uID INT, rentpurcdate DATE, FOREIGN KEY(uID) REFERENCES users(uID), FOREIGN KEY(cID) REFERENCES rentcars(cID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});