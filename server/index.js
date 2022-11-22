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
    database: 'passwordmanager',
    // insecureAuth : true
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