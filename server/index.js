// index file used to access server.

const express = require('express') // module of express
const app = express() 
const mysql = require('mysql')
const cors = require('cors')
const PORT = 3001

const {encrypt, decrypt} = require('./EncryptionHandler')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'hulksmash02',
    database: 'passwordmanager'
});

app.post("/register", (req, res)=> {
    
    const username = req.body.username
    const password = req.body.password
    
    db.query(
        "INSERT INTO login (username, password) VALUES (?,?)",
        [username, password], 
        (err, result) => {
            console.log(err);
        }
    );
});

app.post("/login", (req, res)=> {
    
    const username = req.body.username
    const password = req.body.password
    
    db.query(
        "SELECT * FROM login WHERE username = ? AND password = ?",
        [username, password], 
        (err, result) => {
            if(err) {
                res.send({err: err});
            } 

            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination!"});
            }
        }
    );
});

app.post("/delpassword", (req, res) => { 
    const title = req.body.title
    db.query(
        " DELETE FROM password WHERE title= ? ",
        [title],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Success");
            }
        }
    );
});

app.post("/updpassword", (req, res) => { 
    const {password, title} = req.body
    const hashedPassword = encrypt(password);
    db.query(
        " UPDATE password SET password = ?, iv = ? WHERE title = ? ",
        [hashedPassword.password, hashedPassword.iv, title], 
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Success");
            }
        }
    );
});

app.post("/addpassword", (req, res) => { //req -> request, res -> response (router provided) //req.body acts as api call
    const {password, title} = req.body //res.send() sends data as the response of api call.
    const hashedPassword = encrypt(password);
    db.query(
        "INSERT INTO password (password, title, iv) VALUES (?,?,?)",
        [hashedPassword.password, title, hashedPassword.iv],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Success");
            }
        }
    );
});

app.get("/showpasswords", (req, res) => {
    db.query("SELECT * FROM password;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/decryptpassword", (req, res) => {
    res.send(decrypt(req.body));
  });

app.listen(PORT, ()=> { //sends port
    console.log("Server is running")
})